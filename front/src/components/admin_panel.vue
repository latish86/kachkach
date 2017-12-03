<template>
  <div class="admin-panel">
    <h2>Admin Panel:</h2>
    <ul>
      <li>Настройки</li>
      <li @click="addTestData()">Добавить тестовые данные</li>
      <li @click="clearBD()">Отчистить БД</li>
      <li>Пользователи</li>
      <li>Разное</li>
    </ul>
    <component v-bind:is="currentView"></component>
  </div>
  
</template>

<script>
import ChangeData from './change-data.vue'
import testData   from '../testdata'

export default {
  components:{
    'change-data': ChangeData
  },
  data(){
    return{
      currentView: 'change-data'
    }
  },
  methods: {
    addTestData: function(){
      console.log(testData),

      // // POST запрос
      this.$http.post('http://localhost:3000/test', testData).then(responce =>{
        // Обработка ответа
        this.dataResponse = responce.body
      }, error =>{
        // Ошибка ответа
      });
      
      console.log('Тестовые данные добавлены.')
    },
    clearBD: function(){
      // // POST запрос
      this.$http.post('http://localhost:3000/delbd', {}).then(responce =>{
      }, error =>{
        console.log(error)
      });
      console.log('База отчищена.')
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


