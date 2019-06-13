<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Abrantos
        </q-toolbar-title>

        <div>Hola</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Menu</q-item-label>
        <q-item clickable tag="a" @click="home()">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Home</q-item-label>
            <q-item-label caption>Página inicial</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" @click="addAbrantos()">
          <q-item-section avatar>
            <q-icon name="assignment_turned_in" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Abrantos</q-item-label>
            <q-item-label caption>Adicionar Abrantos</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" @click="logout()">
          <q-item-section avatar>
            <q-icon name="logout" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Sair</q-item-label>
            <q-item-label caption>vai na sombra</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar';

export default {
  name: 'AppLayout',
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
    };
  },
  methods: {
    openURL,
    home() {
      this.$router.push({ name: 'home' });
      this.leftDrawerOpen = false;
    },
    addAbrantos() {
      this.$router.push({ name: 'addabrantos' });
      this.leftDrawerOpen = false;
    },
    logout() {
      localStorage.removeItem('abrantostoken');
      this.$store.commit('auth/setAuthenticated', '');
      this.$router.push({ name: 'login' });
    },
  },
};
</script>

<style>
</style>
