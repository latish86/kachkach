<template>
  <div class="change-data">
    <h3 style="color: #24c2cb;">Добавить всплывающие сообщения(ошибки, удачки и т.п)</h3>
    Изменить данные в базе
    <h2>Добавить запись в базу</h2>
    <label>Пользователь: </label><input type="text" v-model="newRes.user">
    <br><br>
    <label>Число: </label>
		<select v-model="newRes.date.day">
      <option v-for="day in months['0'].days">{{ day }}</option>
  	</select>
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
				{ num: '1', rus: 'январь', eng: 'january', days: [1,2,3,4,5,6,7,8,9,10,11,12,131,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31] },
				{ num: '2', rus: 'февраль', eng: 'february', days: [1,2,3,4,5,6,7,8,9,10,11,12,131,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28] },
				{ num: '3', rus: 'март', eng: 'march', days: [1,2,3,4,5,6,7,8,9,10,11,12,131,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31] },
				{ num: '4', rus: 'апрель', eng: 'april', days: [1,2,3,4,5,6,7,8,9,10,11,12,131,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30] },
				{ num: '5', rus: 'май', eng: 'may', days: [1,2,3,4,5,6,7,8,9,10,11,12,131,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31] },
				{ num: '6', rus: 'июнь', eng: 'june', days: [1,2,3,4,5,6,7,8,9,10,11,12,131,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30] },
				{ num: '7', rus: 'июль', eng: 'july', days: [1,2,3,4,5,6,7,8,9,10,11,12,131,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31] },
				{ num: '8', rus: 'август', eng: 'august', days: [1,2,3,4,5,6,7,8,9,10,11,12,131,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30] },
				{ num: '9', rus: 'сентябрь', eng: 'september', days: [1,2,3,4,5,6,7,8,9,10,11,12,131,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31] },
				{ num: '10', rus: 'октябрь', eng: 'october', days: [1,2,3,4,5,6,7,8,9,10,11,12,131,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30] },
				{ num: '11', rus: 'ноябрь', eng: 'november', days: [1,2,3,4,5,6,7,8,9,10,11,12,131,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31] },
				{ num: '12', rus: 'декабрь', eng: 'december', days: [1,2,3,4,5,6,7,8,9,10,11,12,131,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},
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


