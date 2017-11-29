<template>
  <div class="app-header">
    <div class="wrapper">
      <div class="logo">kachkach</div>
      <div class="right">
        <div class="button" v-if="front" @click="changeMain('admin-panel')">Админ панель</div>
        <div class="button" v-else @click="changeMain('days')">Статистика</div>        
        <div>login/registration</div>
      </div>
    </div>
  </div>  
</template>

<script>
import { bus } from '../main';

export default {
  data () {
    return {
      front: true
    }
  },
  methods: {
    changeMain: function(data){
      if(data == 'admin-panel'){
        this.front = false;
      }else{
        this.front = true;
      }
      
      bus.$emit('changeMain', data);
    }
  }
}
</script>

<style lang="scss">
  @import '../scss/variables.scss';

  .app-header{
    background-color: $dark-red;
    color: $milk;
    .wrapper{
      max-width: 1200px;   
      margin: 0 auto;
      padding: 15px;   
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo{
        font-size: 30px;
      }
      .right{
        display: flex;
        align-items: center;
        div{
          margin-right: 10px;
        }
        .button{
          background-color: $dark-blue;
          box-sizing: border-box;
          padding: 5px 10px;
          &:hover{
            color: $light-blue;
            cursor: pointer;
          }
        }

      }
    }
  }
</style>