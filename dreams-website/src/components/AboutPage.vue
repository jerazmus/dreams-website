<template>
  <div class="about">
    <h1>{{ msg }}</h1>
    <Recruitment />
  </div>
</template>

<script>
import Recruitment from "./Recruitment"

export default {
  name: 'Home',
  data() {
    return {
      msg: "about"
    }
  },
  components: {
    Recruitment
  }
  
}
</script>

<style scoped>
</style>
