<template>
  <div>
    <h2>{{ title }}</h2>
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
  components:{
    'day' : Day,
  },
  data () {
    return {      
      'title' : 'Statistics for the last 30 days:',
      days: [
        {date: {day: '11', month: '12', year: '17'} , rounds:[10,34,12,41,41,55,12,33,112,324,234,55,44,2]},
        {date: {day: '12', month: '12', year: '17'} , rounds:[10,34,12,41,41,55,12,33,112,324,234,55,44,2]},
        {date: {day: '13', month: '12', year: '17'} , rounds:[10,34,12,41,41,55,12,33,112,324,234,55,44,2]},
        {date: {day: '14', month: '12', year: '17'} , rounds:[10,34,12,41,41,55,12,33,112,324,234,55,44,2]},
        {date: {day: '15', month: '12', year: '17'} , rounds:[10,34,12,41,41,55,12,33,112,324,234,55,44,2]},
        {date: {day: '16', month: '12', year: '17'} , rounds:[10,34,12,41,41,55,12,33,112,324,234,55,44,2]},
        {date: {day: '17', month: '12', year: '17'} , rounds:[10,34,12,41,41,55,12,33,112,324,234,55,44,2]},
        {date: {day: '18', month: '12', year: '17'} , rounds:[10,34,12,41,41,55,12,33,112,324,234,55,44,2]},
        {date: {day: '19', month: '12', year: '17'} , rounds:[10,34,12,41,41,55,12,33,112,324,234,55,44,2]},
        {date: {day: '10', month: '12', year: '17'} , rounds:[10,34,12,41,41,55,12,33,112,324,234,55,44,2]},
        {date: {day: '11', month: '12', year: '17'} , rounds:[10,34,12,41,41,55,12,33,112,324,234,55,44,2]},
        {date: {day: '12', month: '12', year: '17'} , rounds:[10,34,12,41,41,55,12,33,112,324,234,55,44,2]},
        {date: {day: '13', month: '12', year: '17'} , rounds:[10,34,12,41,41,55,12,33,112,324,234,55,44,2]},
        {date: {day: '14', month: '12', year: '17'} , rounds:[10,34,12,41,41,55,12,33,112,324,234,55,44,2]},
        {date: {day: '15', month: '12', year: '17'} , rounds:[10,34,12,41,41,55,12,33,112,324,234,55,44,2]}
      ]
    }
  },
  methods:{
    getdays: function(){
    }
  }
}
</script>

<style lang="scss" scoped>
  h2{
    margin-top: 0;
    text-align: center;
  }

  .days{
    display: flex; 
    flex-wrap: wrap;
    justify-content: space-around;    
  }
</style>
