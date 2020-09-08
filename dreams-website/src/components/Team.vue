<template>
  <div class="team">
    <Navbar />
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import Navbar from "./Navbar"

export default {
  name: 'Team',
  data() {
    return {
      msg: "team"
    }
  },
  components: {
    Navbar
  }
  
}
</script>

<style scoped>
</style>
