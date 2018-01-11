<template>
  <div>
    <h2>{{ title }}</h2>
    <params v-on:setReqParam="getResults"></params>
    <div class="days">
      <div v-if="days.length == 0">
        <h1>Результатов не найдено.</h1>
      </div>
      <div v-if="days != []" v-for="day in days">
        <day v-bind:day="day"></day>
      </div>
    </div>  
  </div>  
</template>

<script>
import Day from "./day.vue";
import RequestParam from "./set-param-req-result.vue";
import { bus } from '../main';

export default {
  components: {
    day: Day,
	  params: RequestParam
  },
  data() {
    return {
      title: "Statistics for the last 30 days:",
      days: []
    };
  },
  methods: {
    getResults: function(data) {
      var reqData = {
        user: data.user,
        type: data.picked,
        params: {
          month: data.monthSelected,
          year : data.yearSelected
        }
      };
      // POST запрос
      this.$http.post("http://localhost:3000/getresult", reqData).then(
        responce => {
          // Обработка ответа
          console.log(responce.body);
					if(responce.body != []){
            this.days = responce.body;
            // Отправляем данные в debug
            bus.$emit('debug', responce.body);
					}else{
						this.days = [];
					}          
        },
        error => {
          // Ошибка ответа
        }
      );
    }
  },
  created: function() {
    var reqData = {
      user: 'latish86',
      type: this.picked,
      params: {
        month: this.monthSelected
      }
    };
    this.$http.post("http://localhost:3000/getresult", reqData).then(
      responce => {
        // Обработка ответа
        this.days = responce.body;
      },
      error => {
        // Ошибка ответа
      }
    );
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";

h2 {
  margin-top: 0;
  text-align: center;
}

.days {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

</style>
