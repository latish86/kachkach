<template>
  <div class="day">   
    <div class="day-head">
      <div class="date">{{ day.date.day }}.{{ day.date.month }}.{{ day.date.year }}</div>
      <hr>
    </div> 
    <div class="rounds">
      <div v-for="round in day.rounds" class="round">{{ round }}</div>
    </div>    
    <div class="day-footer">
      <div class="button">Редактировать</div>
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
      currentView: 'days'
      
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
