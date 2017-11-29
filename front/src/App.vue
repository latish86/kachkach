<template>
<div id="app">
  <app-header></app-header>  
  <app-main></app-main>
  <app-footer></app-footer>
</div>  
</template>

<script>
import AppHeader from './components/app_header.vue'
import AppFooter from './components/app_footer.vue'
import AppMain   from './components/app_main.vue'

export default {
  name: 'app',
  components:{
    'app-header' : AppHeader,
    'app-footer' : AppFooter,
    'app-main'   : AppMain
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
  @import './libs/normalize-css/normalize.css'

</style>
