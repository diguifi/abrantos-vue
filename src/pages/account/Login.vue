<template>
  <q-page class="flex flex-center">
    <q-form
        @submit="onSubmit"
        class="q-gutter-lg loginForm">

        <h1>Abrantos</h1>

        <q-input
          filled
          v-model="username"
          label="Username"
          hint="Digite seu nome de usuário"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Campo obrigatório']" />

        <q-input
          v-model="password"
          filled
          type="password"
          label="Senha"
          hint="Digite sua senha"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Campo obrigatório']" />

        <div>
          <q-btn label="Login" type="submit" color="primary"></q-btn>
          <q-btn label="Registrar" @click="onRegister()" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'Login',

  data() {
    return {
      username: null,
      password: null,
    };
  },

  methods: {
    onSubmit() {
      this.$q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'fas fa-check-circle',
        message: 'Bem-vindo azarado maldito! (isso é só um teste, você nem ta logado de verdade) ',
      });
    },

    onRegister() {
      this.$q.notify({
        color: 'red-5',
        textColor: 'white',
        icon: 'fas fa-exclamation-triangle',
        message: 'Calma lá queridão, to desenvolvendo aos poucos ',
      });
    },
  },
};
</script>

<style>
  .loginForm {
    width: 50%;
  }
</style>
