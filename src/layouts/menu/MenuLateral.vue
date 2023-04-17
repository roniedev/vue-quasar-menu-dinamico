<template>
  <q-drawer bordered show-if-above v-model="drawer" side="left">
    <q-list>
      <div id="menu-lateral">
        <template v-for="menu in menus" :key="menu.id">
          <template v-if="menu.ehMenuPai">
            <q-expansion-item :icon="menu.icone ? menu.icone : 'navigate_next'" :label="menu.nome" :caption="menu.legenda"
              class="q-expansion-item-menu" :content-inset-level="0.2">
              <template v-for="submenu in menu.subMenus" :key="submenu.id">
                <q-expansion-item v-if="submenu.ehMenuPai" :icon="submenu.icone ? submenu.icone : 'navigate_next'"
                  :label="submenu.nome" :caption="submenu.legenda">
                  <item-menu v-for="item in submenu.subMenus" :key="item.id" :descricao="item.nome" :icone="item.icone"
                    :rota="item.rota" />
                </q-expansion-item>
                <item-menu v-else :descricao="submenu.nome" :icone="submenu.icone ? submenu.icone : 'navigate_next'"
                  :rota="submenu.rota" class="item-nivel-2-q-item" />
              </template>
            </q-expansion-item>
          </template>
          <template v-else>
            <item-menu :descricao="menu.nome" :icone="menu.icone ? menu.icone : 'navigate_next'" :rota="menu.rota"
              class="item-nivel-1-q-item" />
          </template>
        </template>
        <slot></slot>
      </div>
    </q-list>
  </q-drawer>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import ItemMenu from './ItemMenu.vue';
import { IMenuLateral } from '../models';

export default defineComponent({
  name: 'MenuLateral',
  components: {
    ItemMenu
  },

  props: {
    isVisible: {
      type: Boolean,
      required: true,
      default: true,
    },
    menuList: {
      type: Array<IMenuLateral>,
      required: true,
      default: []
    }
  },

  setup(props) {
    const drawer = ref(props.isVisible);
    const menus = ref(props.menuList);

    watch(() => props.isVisible, (value) => {
      drawer.value = value
    })

    return {
      drawer,
      menus,
    }
  },

})
</script>

<style scoped lang="scss">
.q-expansion-item-menu {
  padding: 5px;
  margin: 5px;
}
</style>
