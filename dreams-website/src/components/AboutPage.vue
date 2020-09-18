<template>
  <div class="about">
    <About />
  </div>
</template>

<script>
import About from "./About"

export default {
  name: 'Home',
  data() {
    return {
      msg: "about"
    }
  },
  components: {
    About
  }
  
}
</script>

<style scoped>
</style>
