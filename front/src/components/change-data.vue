<template>
  <div class="change-data">
    <h3 style="color: #24c2cb;">Добавить всплывающие сообщения(ошибки, удачки и т.п)</h3>
    Изменить данные в базе
    <h2>Добавить запись в базу</h2>
    <label>Пользователь: </label><input type="text" v-model="newRes.user">
    <br><br>
    <label>Число: </label>
		<input type="text" v-model="newRes.date.day">
    <label>Месяц: </label>
		<select v-model="newRes.date.month">				
	      <option v-for="month in months">{{ month.rus }}</option>
	  </select>	
    <label>Год: </label>
		<select v-model="newRes.date.year">
      <option>2016</option><option>2017</option><option>2018</option><option>2019</option>
  	</select>
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
		  months: [
				{ num: '1', rus: 'январь', eng: 'january'},
				{ num: '2', rus: 'февраль', eng: 'february'},
				{ num: '3', rus: 'март', eng: 'march'},
				{ num: '4', rus: 'апрель', eng: 'april'},
				{ num: '5', rus: 'май', eng: 'may'},
				{ num: '6', rus: 'июнь', eng: 'june'},
				{ num: '7', rus: 'июль', eng: 'july'},
				{ num: '8', rus: 'август', eng: 'august'},
				{ num: '9', rus: 'сентябрь', eng: 'september'},
				{ num: '10', rus: 'октябрь', eng: 'october'},
				{ num: '11', rus: 'ноябрь', eng: 'november'},
				{ num: '12', rus: 'декабрь', eng: 'december'},
			],
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


