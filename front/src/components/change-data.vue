<template>
  <div class="change-data">
    <h3 style="color: #24c2cb;">Добавить всплывающие сообщения(ошибки, удачки и т.п)</h3>
    Изменить данные в базе
    <h2>Добавить запись в базу</h2>
    <label>Пользователь: </label><input type="text" v-model="newRes.user">
    <br><br>
    <label>Дата: </label>
		<input type="date"
	  	v-bind:value="newRes.date"
		>
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
      newRes:{
        user: 'latish86',
        date: '',
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

			var resParam = {
				user: this.newRes.user,
				date: {
					day: this.newRes.date.split('-')[2],
					month: this.newRes.date.split('-')[1],
					year: this.newRes.date.split('-')[0]
				},
				results: this.newRes.results
			}

      // // POST запрос
      this.$http.post(this.urlNewRes, resParam).then(responce =>{
        // Обработка ответа
        this.dataResponse = responce.body
      }, error =>{
        // Ошибка ответа
      })
    }
  },
	created: function(){

		// ВЫставляем дату по умолчанию
		var date = new Date();
		
		if(date.getMonth() < 10){
			var month = '0'+date.getMonth();
		}else{
			var month = date.getMonth();
		}

		if(date.getDate() < 10){
			var day = '0'+date.getDate();
		}else{
			var day = date.getDate();
		}
		
		
		this.newRes.date =  date.getFullYear()+'-'+month+'-'+day;
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


