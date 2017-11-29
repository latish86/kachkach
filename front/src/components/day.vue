<template>
  <div class="day">   
    <div class="day-head">
      <div class="date">{{ day.date }}</div>
      <hr>
    </div> 
    <div class="rounds">
      <div v-for="round in day.rounds" class="round">{{ round }}</div>
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
    p{
      margin-top: 0;
    }
    .rounds{
      display: flex;
      flex-wrap: wrap;
      .round{
        padding: 5px 10px;
      }
    }
  }
</style>
