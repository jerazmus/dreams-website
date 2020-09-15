<template>
  <div class="progress-page">
    <Progress />
  </div>
</template>

<script>
import Progress from "./Progress"

export default {
  name: 'ProgressPage',
  data() {
    return {
      msg: "oficialna strona gildi DreamS :)"
    }
  },
  components: {
    Progress
  }
  
}
</script>

<style scoped>
</style>
