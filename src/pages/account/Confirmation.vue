<template>
  <q-page class="row text-center">
    <div class="col-3"></div>
    <div class="col self-center">
      <q-card v-if="errors.length > 0" class="text-negative" flat bordered>
        <q-card-section>
          <ul>
            <li v-for="error in errors" :key="error.code">
              {{ error.description }}
            </li>
          </ul>
        </q-card-section>
      </q-card>
      <div v-else>
        {{message}}
      </div>
    </div>
    <div class="col-3"></div>
  </q-page>
</template>

<script>
import Api from '../../api';

export default {
  name: 'Confirmation',

  data() {
    return {
      message: null,
      api: new Api(),
      userId: this.$route.query.userId,
      token: this.$route.query.token,
      isLoading: false,
      errors: [],
    };
  },

  methods: {
    confirmEmail() {
      this.isLoading = true;
      this.api.post(`authentication/confirmEmail?userId=${this.userId}&token=${this.token}`,
        {}).then((success) => {
        this.isLoading = false;
        this.message = 'Email confirmado! Bem vindo azarado, ja pode logar.';
        if (success) {
          this.$q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'fas fa-check-circle',
            message: 'Email confirmado com sucesso! ',
          });
          this.$router.push({ name: 'login' });
        }
      }).catch((error) => {
        this.message = error.response.data;
        if (this.message.errors) {
          this.errors.splice(0);
          this.errors = this.message.errors;
        }
        this.isLoading = false;
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'fas fa-exclamation-triangle',
          message: 'Algo de errado nao esta certo ',
        });
      });
    },
  },

  created() {
    this.confirmEmail();
  },
};
</script>
<style>
  ul {
    list-style-type: none;
  }
</style>
