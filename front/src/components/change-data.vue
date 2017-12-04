<template>
  <div class="change-data">
    <h3 style="color: #24c2cb;">Добавить всплывающие сообщения(ошибки, удачки и т.п)</h3>
    Изменить данные в базе
    <h2>Добавить запись в базу</h2>
    <label>Пользователь: </label><input type="text" v-model="newRes.user">
    <br><br>
    <label>День: </label><input type="text" v-model="newRes.date.day">
    <label>Месяц: </label><input type="text" v-model="newRes.date.month">
    <label>Год: </label><input type="text" v-model="newRes.date.year">
    <br><br>
    <label>Подходы(числа через запятую): </label><input type="text" v-model="newRes.results">
    <br><br>
    <div class="button" @click="addResults()">Добавить</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      dataResponse: '',
      newRes:{
        user: 'latish86',
        date: {
          day: 0,
          month: 0,
          year: 0,
        },
        results:[14,15]
      },  
      urlNewRes: 'http://localhost:3000/addresult'
    }
  },
  methods:{
    addResults: function(){

      var options = {
        params: {
          one: this.newRes
        }
      }

      // // POST запрос
      this.$http.post(this.urlNewRes, this.newRes).then(responce =>{
        // Обработка ответа
        this.dataResponse = responce.body
      }, error =>{
        // Ошибка ответа
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../scss/variables.scss';
  input{
    padding: 5px;
  }
  .button{
    background-color: $dark-blue;
    display: inline-block;
    color: $milk;
    padding: 5px 10px;
    &:hover{
      color: $light-blue;
      cursor: pointer;
    }
  }
</style>


