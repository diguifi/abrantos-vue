<template>
  <q-page class="row text-center">
    <div class="col-2"></div>
    <div class="col self-center">
      <q-card class="danger" bordered>
        <q-card-section>
          <q-form
              @submit="onSubmit"
              class="q-gutter-lg">

              <div class="text-h3">Abrantos</div>

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
                <p class="text-negative">{{message}}</p>
                <q-btn label="Login" type="submit"
                  color="primary" :loading="isLoading"/>
                <q-btn label="Registrar" @click="onRegister()"
                  color="primary" flat class="q-ml-sm"/>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-2"></div>
  </q-page>
</template>

<script>
export default {
  name: 'Login',

  data() {
    return {
      username: null,
      password: null,
      message: null,
      isLoading: false,
    };
  },

  methods: {
    onSubmit() {
      this.isLoading = true;
      this.$store.dispatch('auth/AUTH_REQUEST', { username: this.username, password: this.password }).then((success) => {
        this.isLoading = false;
        if (success) {
          this.message = '';
          this.$q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'fas fa-check-circle',
            message: 'Bem-vindo azarado maldito! ',
          });
          this.$router.push({ name: 'home' });
        }
      }).catch((error) => {
        this.message = error.response.data;
        this.isLoading = false;
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'fas fa-exclamation-triangle',
          message: 'Errrrrrrrrrouuuu ',
        });
      });
    },

    onRegister() {
      this.$router.push({ name: 'register' });
    },
  },
};
</script>
