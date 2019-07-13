<template>
  <q-page class="row text-center">
    <div class="col self-center q-ma-xl">
      <q-card class="danger" bordered>
        <q-card-section>

          <graph-line
            :width="600"
            :height="400"
            :shape="'normal'"
            :axis-min="0"
            :axis-max="50"
            :axis-full-mode="true"
            :labels="dates"
            :names="names"
            :values="values">
              <note :text="'Abrantos / Tempo'"></note>
              <tooltip :names="names" :position="'right'"></tooltip>
              <legends :names="names"></legends>
              <guideline :tooltip-y="true"></guideline>
          </graph-line>

          <ul style="padding: 0;">
            <li v-for="abranto in abrantos" :key="abranto.id">
              {{ abranto.date }} - {{ abranto.abrantos }}
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
      names: ['Você'],
      values: [
        [],
      ],
      dates: [],
    };
  },
  created() {
    this.api.getAll('dailyregister')
      .then((success) => {
        this.isLoading = false;
        if (success) {
          this.abrantos = success.data.dailyRegisterList;
          this.abrantos.forEach((abranto) => {
            const jsDate = new Date(abranto.date);
            abranto.date = `${jsDate.getDate()}/${new Date(jsDate.setMonth(jsDate.getMonth() + 1)).getMonth()}`;
            this.dates.push(abranto.date);
            this.values[0].push(abranto.abrantos);
          });
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
