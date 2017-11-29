<template>
  <div class="footer">
    <div class="wrapper">
      <div class="copyright">
        copyright 2017 latish86
      </div>     
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
  @import '../scss/variables.scss';

  .footer{
    background-color: $dark-blue;
    color: $milk;
    padding: 20px;

    .copyright{
      text-align: center;
    }
    
  }
  

</style>