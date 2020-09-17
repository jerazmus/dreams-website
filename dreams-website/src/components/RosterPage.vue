<template>
  <div class="roster">
      <Roster />
  </div>
</template>

<script>
import Roster from './Roster'

export default {
  name: 'Home',
  data() {
    return {
      msg: "oficialna strona gildi DreamS :)"
    }
  },
  components: {
      Roster
  }
  
}
</script>

<style scoped>
</style>
