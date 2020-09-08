<template>
  <div class="hello">
    <Navbar />
    <h1>{{ msg }}</h1>
    <Recruitment />
  </div>
</template>

<script>
import Navbar from "./Navbar"
import Recruitment from "./Recruitment"

export default {
  name: 'Home',
  data() {
    return {
      msg: "about"
    }
  },
  components: {
    Navbar,
    Recruitment
  }
  
}
</script>

<style scoped>
</style>
