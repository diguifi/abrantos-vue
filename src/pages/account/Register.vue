<template>
  <q-page class="row text-center">
    <div class="col-3"></div>
    <div class="col self-center">
      <q-form
          @submit="onSubmit"
          class="q-gutter-lg">

          <h3>Nova conta</h3>

          <q-input
            filled
            v-model="username"
            label="Username"
            hint="Digite seu nome de usuário"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Campo obrigatório']" />

          <q-input
            filled
            v-model="email"
            type="email"
            label="Email"
            hint="Digite seu email"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Campo obrigatório']" />

          <q-input
            filled
            v-model="email2"
            type="email"
            label="Email"
            hint="Digite novamente seu email"
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

          <q-input
            v-model="password2"
            filled
            type="password"
            label="Senha"
            hint="Repita sua senha"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Campo obrigatório']" />

          <div>
            <q-btn label="Registrar" type="submit" color="primary" :loading="isLoading"></q-btn>
            <q-btn label="Cancelar" @click="onCancel()" color="primary" flat class="q-ml-sm" />
          </div>
        </q-form>
      </div>
      <div class="col-3"></div>
  </q-page>
</template>

<script>
import Api from '../../api';

export default {
  name: 'Register',

  data() {
    return {
      username: null,
      password: null,
      password2: null,
      email: null,
      email2: null,
      api: new Api(),
      isLoading: false,
    };
  },

  methods: {
    onSubmit() {
      if (this.email !== this.email2) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'fas fa-exclamation-triangle',
          message: 'O email e a confirmação de email são diferentes ',
        });
        return;
      }
      if (this.password !== this.password2) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'fas fa-exclamation-triangle',
          message: 'A senha e a confirmação de senha são diferentes ',
        });
        return;
      }

      this.isLoading = true;
      this.api.post('authentication/register',
        {
          username: this.username,
          email: this.email,
          password: this.password,
          passwordConfirmation: this.password2,
        }).then((success) => {
        this.isLoading = false;
        if (success) {
          this.$q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'fas fa-check-circle',
            message: 'Um email de confirmação foi enviado, confirma lá ',
          });
          this.$router.push({ name: 'login' });
        }
      }).catch((response) => {
        console.log(response);
        this.isLoading = false;
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'fas fa-exclamation-triangle',
          message: 'Algo de errado nao esta certo ',
        });
      });
    },

    onCancel() {
      this.$router.push({ name: 'login' });
    },
  },
};
</script>
