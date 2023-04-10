<template>
  <q-layout view="hHh Lpr lff" container style="height: 100vh" class="shadow-2">
    <q-header elevated :class="$q.dark.isActive ? 'bg-secondary' : 'bg-black'">
      <q-toolbar>
        <q-btn flat dense icon="menu" @click="alternarVisibilidade" />
        <q-toolbar-title>Header</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <menu-lateral :is-visible="menuVisible" :menu-list="menuList" />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MenuLateral from 'src/layouts/menu/MenuLateral.vue';
import { menuList } from '../services/api/mock';

export default defineComponent({
  name: 'MainLayout',

  components: {
    MenuLateral
  },

  data() {
    return {
      menuVisible: true,
      menuList
    }
  },

  methods: {
    alternarVisibilidade() {
      this.menuVisible = !this.menuVisible;
    }
  }
});
</script>
