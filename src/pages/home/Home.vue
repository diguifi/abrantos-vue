<template>
  <q-page class="row text-center">
    <div class="col self-center q-ma-xl">
      <q-card class="danger" bordered>
        <q-card-section>
          Aqui vai ficar o gráfico <br/>
          <ul style="padding: 0;">
            <li v-for="abranto in abrantos" :key="abranto.id">
              {{ new Date(abranto.date).getDate() + '/' +
               new Date(abranto.date).getMonth() }} - {{ abranto.abrantos }}
            </li>
          </ul>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import Api from '../../api';

export default {
  name: 'Home',
  data() {
    return {
      isLoading: false,
      abrantos: null,
      api: new Api(),
    };
  },
  created() {
    this.api.getAll('dailyregister')
      .then((success) => {
        this.isLoading = false;
        if (success) {
          this.abrantos = success.data.dailyRegisterList;
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
};
</script>

<style>
  ul {
    list-style-type: none;
  }
</style>
