<template>
  <q-page class="row text-center">
    <div class="col self-center q-ma-xl">
      <q-card class="danger" bordered>
        <q-card-section>
          <q-form
            @submit="onSubmit"
            class="q-gutter-lg">

            <div class="text-h5">Adicionar abrantos</div>

            <div>
              <q-slider
                v-model="abrantosQuantity"
                :min="-1000"
                :max="1000"
                :color="sliderColor"
                @input="sliderChange()"/>
              <div class="row">
                <div class="col" />
                <div class="col-2">
                  <q-input
                    v-model.number="abrantosQuantity"
                    type="number"
                    :rules="[ val => val <= 1000 && val >= -1000 || 'Máximo 1000 e mínimo -1000']"
                    style="text-align: right;"/>
                </div>
                <div class="col" />
              </div>
            </div>

            <q-btn label="Adicionar" type="submit"
              color="secondary" :loading="isLoading"/>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import Api from '../../api';

export default {
  name: 'Abrantos',
  data() {
    return {
      isLoading: false,
      abrantosQuantity: 0,
      sliderColor: 'red',
      api: new Api(),
    };
  },

  methods: {
    onSubmit() {
      this.isLoading = true;
      this.api.post('dailyregister',
        {
          abrantos: this.abrantosQuantity,
          date: new Date().toJSON(),
          post: '',
        }).then((success) => {
        this.isLoading = false;
        if (success) {
          this.$q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'fas fa-check-circle',
            message: 'Abrantos cadastrados pra hoje! ',
          });
          this.$router.push({ name: 'home' });
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
    sliderChange() {
      if (this.abrantosQuantity >= 0) {
        this.sliderColor = 'red';
      } else {
        this.sliderColor = 'green';
      }
    },
  },
};
</script>
