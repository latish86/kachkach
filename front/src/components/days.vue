<template>
  <div>
    <h2>{{ title }}</h2>
    <day></day>
    <day></day>
    <day></day>
    <day></day>
    <day></day>
    <day></day>
    <day></day>
    <day></day>
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
      'title' : 'Statistics for the last 30 days:'
    }
  },
  methods:{
    getdays: function(){
    }
  }
}
</script>