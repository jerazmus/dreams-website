<template>
  <div class="hello">
    <Navbar />
    <Progress />
    <Recruitment />
  </div>
</template>

<script>
import Navbar from "./Navbar"
import Progress from "./Progress"
import Recruitment from "./Recruitment"

export default {
  name: 'Home',
  data() {
    return {
      msg: "oficialna strona gildi DreamS :)"
    }
  },
  components: {
    Navbar,
    Progress,
    Recruitment
  }
  
}
</script>

<style scoped>
</style>
