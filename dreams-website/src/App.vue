<template>
  <div id="app">
    <Navbar />
    <Home />
    <Progress />
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Progress from './components/Progress.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Home,
    Progress,
    Navbar
  }
}
</script>

<style>
* {
  margin: 0;
}

#app {
  margin: 0;
  padding: 0;
  height: 100vh;
  background-color: #001a33;
}
</style>
