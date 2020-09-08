<template>
  <div class="progress-page">
    <Navbar />
    <Progress />
  </div>
</template>

<script>
import Navbar from "./Navbar"
import Progress from "./Progress"

export default {
  name: 'ProgressPage',
  data() {
    return {
      msg: "oficialna strona gildi DreamS :)"
    }
  },
  components: {
    Navbar,
    Progress
  }
  
}
</script>

<style scoped>
</style>
