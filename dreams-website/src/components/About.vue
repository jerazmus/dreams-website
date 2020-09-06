<template>
  <div class="hello">
    <Navbar />
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import Navbar from "./Navbar"

export default {
  name: 'Home',
  data() {
    return {
      msg: "about"
    }
  },
  components: {
    Navbar
  }
  
}
</script>

<style scoped>
</style>
