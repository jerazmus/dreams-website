<template>
  <div class="home">
    <Home />
  </div>
</template>

<script>
import Home from "./Home"

export default {
  name: 'HomePage',
  data() {
    return {
      msg: "oficialna strona gildi DreamS :)"
    }
  },
  components: {
    Home
  }
  
}
</script>

<style scoped>
</style>
