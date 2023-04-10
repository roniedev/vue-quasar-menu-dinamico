<template>
  <q-item clickable v-ripple :to="rota" class="q-item-menu">
    <q-item-section avatar>
      <q-icon :name="icone" />
    </q-item-section>
    <q-item-section>
      {{ descricao }}
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ItemMenu',
  props: {
    descricao: {
      type: String,
      required: false,
      default() {
        return 'Descrição não definida'
      }
    },
    icone: {
      type: String,
      required: false,
      default() {
        return 'navigate_next'
      }
    },
    rota: {
      type: String,
      required: true
    }
  }
})

</script>

<style scoped>
.q-item-menu {
  margin: 0 10px;
  padding: 5px;
  padding-left: 15px;
}
</style>
