<template>
  <q-page class="row text-center">
    <div class="col-3"></div>
    <div class="col self-center">
      <q-card class="danger" flat bordered>
        <q-card-section>
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

              <q-card v-show="errors.length > 0" class="text-negative" flat bordered>
                <q-card-section>
                  <ul>
                    <li v-for="error in errors" :key="error.code">
                      {{ error.description }}
                    </li>
                  </ul>
                </q-card-section>
              </q-card>

              <div>
                <q-btn label="Registrar" type="submit" color="primary" :loading="isLoading"></q-btn>
                <q-btn label="Cancelar" @click="onCancel()" color="primary" flat class="q-ml-sm" />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
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
      username: '',
      password: '',
      password2: '',
      email: '',
      email2: '',
      api: new Api(),
      isLoading: false,
      errors: [],
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
      }).catch((error) => {
        this.isLoading = false;
        if (error.response.data.errors) {
          this.errors.splice(0);
          this.errors = error.response.data.errors;
        } else {
          this.$q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'fas fa-exclamation-triangle',
            message: error.response.data,
          });
        }
      });
    },

    onCancel() {
      this.$router.push({ name: 'login' });
    },
  },
};
</script>
<style>
  ul {
    list-style-type: none;
  }
</style>
