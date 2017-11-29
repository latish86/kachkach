<template>
  <div class="app-header">
    <div class="wrapper">
      <div class="logo">kachkach</div>
      <div class="login">login/registration</div>
    </div>
  </div>  
</template>

<script>
export default {
  data () {
    return {
      
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
      padding: 15px;   
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo{
        font-size: 30px;
      }
    }
  }
</style>