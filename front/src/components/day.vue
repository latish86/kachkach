<template>
  <div class="day" v-bind:id="day._id">   
    <div class="day-head">
      <div class="date">{{ day.date.day }}.{{ day.date.month }}.{{ day.date.year }} Пользователь: {{ day.user }}</div>
      <hr>
    </div> 
    <div class="rounds">
      <div v-if="!editingNow" v-for="round in day.rounds" class="round">
        {{ round }}        
      </div>
      <span v-if="day.rounds == false && !editingNow">Сегодня вы не занимались</span>
      <input v-if="editingNow" v-model:value="day.rounds"  class="round">
    </div>    
    <div class="day-footer">
      <div class="button" v-if="!editingNow" @click="editingNow = !editingNow">Редактировать</div>
      <div class="button" v-if="editingNow" @click="updateResult()">Сохранить</div>
    </div>
  </div>
</template>

<script>

export default {
  components:{
  },
  props:[
    'day'
  ],
  data () {
    return {
      editingNow : false
    }
  },
  methods:{
    updateResult: function(){
      this.editingNow = !this.editingNow;

      let rounds = String(this.$props.day.rounds).split(',')
      this.$props.day.rounds = rounds;



      // Параметры запроса
      let reqData = {
        id: this.$props.day._id, // ID записи в БД
        rounds: this.$props.day.rounds // Массив с результатами подходов
      }
      
      console.log(rounds);

      // POST запрос
      this.$http.post(this.$root.serverurl + "/updateOneResult", reqData).then(
        responce => {
          // Обработка ответа
          console.log(responce.body);
					
          
        },
        error => {
          // Ошибка ответа
          console.log(error)
        }
      );
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../scss/variables.scss';

  .day{
    background-color: $dark-red;
    color: white;
    width: 360px;
    height: 200px;
    margin-bottom: 20px;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p{
      margin-top: 0;
    }
    .rounds{
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      flex-grow: 1;
      .round{
        padding: 5px 10px;
      }
    }
    .day-footer{
      .button{
        float: right;
        background-color: $dark-blue;
        color: $milk;
        padding: 5px 10px;
      }
      .button:hover{
        color: $light-blue;
        cursor: pointer;
      }
    }
  }
</style>
