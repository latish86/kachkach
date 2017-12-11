<template>
  <div class="content"> 
    <component v-bind:is="currentView"></component>
  </div>  
</template>

<script>
import Days from "./days.vue";
import AdminPanel from "./admin_panel.vue"
import { bus } from '../main';

export default {
  components:{
    'statistic' : Days,
    'admin-panel': AdminPanel
  },
  data () {
    return {
      currentView: 'statistic'
    }
  },
  created(){
    bus.$on('changeMain', (data) => {      
      this.currentView = data;
      console.log(this.currentView)
    })
  }
}
</script>

<style lang="scss" scoped>
  .content{
    padding: 20px;
    margin: 0 auto;
    max-width: 1200px;;
  }
</style>