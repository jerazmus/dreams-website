<template>
  <div class="home">
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer"

export default {
  name: 'Home',
  data() {
    return {
      msg: "oficialna strona gildi DreamS :)"
    }
  },
  components: {
    Footer
  }
  
}
</script>

<style scoped>
</style>
