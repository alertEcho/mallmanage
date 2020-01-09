<template>
  <div id="app">
    
    <div>
      
    </div>
    <Login msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Login from './components/login/Login.vue'

export default {
  name: 'app',
  components: {
    Login
  }
}
</script>

<style>
#app {
  height: 100%;
}
</style>
