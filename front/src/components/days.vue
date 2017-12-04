<template>
  <div>
    <h2>{{ title }}</h2>
    <div>
      <h3>Параметры запроса</h3>
      <p><label>User: </label><input type="text" v-model="user"></p>
      <p><label>За последние 30 дней: </label><input type="radio" id="30day" value="30day" v-model="picked"></p>
      <p>
        <label>За месяц: </label><input type="radio" id="month" value="month" v-model="picked">
        <span v-show="picked == 'month'">
          <label>Выберите месяц</label>
          <select v-model="monthSelected">
              <option>1</option><option>2</option><option>3</option><option>4</option>
              <option>5</option><option>6</option><option>7</option><option>8</option>
              <option>9</option><option>10</option><option>11</option><option>12</option>
          </select>
        </span>
      </p>
      <div class="button" @click="getResults()">Получить результаты</div>
    </div>
    <div class="days">
      <div v-for="day in days">
        <day v-bind:day="day"></day>
      </div>
    </div>  
  </div>  
</template>

<script>
import Day from "./day.vue";

export default {
  components: {
    day: Day
  },
  data() {
    return {
      title: "Statistics for the last 30 days:",
      picked: "30day",
      monthSelected: "1",
      days: [],
      user: 'Nope'
    };
  },
  methods: {
    getResults: function() {
      var reqData = {
        user: this.user,
        type: this.picked,
        params: {
          month: this.monthSelected
        }
      }
      // // POST запрос
      this.$http.post('http://localhost:3000/getresult', reqData).then(responce =>{
        // Обработка ответа
        this.dataResponse = responce.body
      }, error =>{
        // Ошибка ответа
      })
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';
h2 {
  margin-top: 0;
  text-align: center;
}

.days {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.button {
  background-color: $dark-blue;
  box-sizing: border-box;
  padding: 5px 10px;
  color: $milk;
  display: inline-block;
  &:hover {
    color: $light-blue;
    cursor: pointer;
  }
}
</style>
