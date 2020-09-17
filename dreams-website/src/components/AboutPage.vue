<template>
  <div class="about">
    <Recruitment />
    <About />
  </div>
</template>

<script>
import Recruitment from "./Recruitment"
import About from "./About"

export default {
  name: 'Home',
  data() {
    return {
      msg: "about"
    }
  },
  components: {
    Recruitment,
    About
  }
  
}
</script>

<style scoped>
</style>
