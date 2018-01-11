<template>
  <div id="debug-window">
    <div>{{ data }}</div>
    
  </div>
</template>

<script>
import { bus } from '../main';

export default {
  data () {
    return {
      
    }
  },
  methods: {
  },
  props:[
    'data'
  ],
  created(){
    bus.$on('debug', (data) => {      
      this.data = data;
    })
  }
}
</script>

<style lang="scss" scopped>
  @import '../scss/variables.scss';
  #debug-window{
    background-color: #e1e1e1;
    width: 300px;
    height: 500px;
    position: fixed;
    bottom: 0px;
    right: 0px;
    padding: 5px;
    font-family: consolas;
    font-size: 12px;
    overflow:auto;
  }
</style>