<template>
  <div class="admin-panel">
    <h2>Admin Panel:</h2>
    <ul>
      <li>Настройки</li>
      <li>Добавить тестовые данные</li>
      <li>Отчистить БД</li>
      <li>Пользователи</li>
      <li>Разное</li>
    </ul>
    <component v-bind:is="currentView"></component>
  </div>
  
</template>

<script>
import ChangeData from './change-data.vue'

export default {
  components:{
    'change-data': ChangeData
  },
  data(){
    return{
      currentView: 'change-data'
    }
  }
}
</script>

<style lang='scss' scoped>
  @import '../scss/variables.scss';

  h2{
    text-align: center;
  }
  ul{
    padding: 0;
    display: flex;
    justify-content: center;
    li{
      list-style-type: none;
      margin-right: 15px;
      &:hover{
        color: $dark-red;
        cursor: pointer;
      }
    }
  }
</style>


