<template>
  <div class="content">
    <component v-bind:is="currentView"></component>
  </div>  
</template>

<script>
import Days from "./days.vue";

export default {
  components:{
    'days' : Days
  },
  data () {
    return {
      currentView: 'days'
    }
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