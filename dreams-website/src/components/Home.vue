<template>
  <div class="home">
    <Navbar />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./Navbar"
import Footer from "./Footer"

export default {
  name: 'Home',
  data() {
    return {
      msg: "oficialna strona gildi DreamS :)"
    }
  },
  components: {
    Navbar,
    Footer
  }
  
}
</script>

<style scoped>
</style>
