<template>
  <q-header bordered class="bg-primary text-white">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="$emit('acaoBotaoMenu')" />
      <q-toolbar-title>
        <q-avatar v-show="logo">
          <img :src="logo">
        </q-avatar>
        {{ titulo }}
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'HeaderLayout',
  props: {
    titulo: {
      type: String,
      required: false
    },
    logo: {
      type: String,
      required: false,
    }
  },
})

</script>
