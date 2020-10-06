<template>
  <div class="roster">
    <transition name="fade" mode="out-in">
      <div class="cover" v-if="this.$store.state.cover" />
    </transition>
    <Roster />
    <Recruitment />
    <Apply />
  </div>
</template>

<script>
import Roster from "./Roster";
import Recruitment from "./Recruitment";
import Apply from "./Apply";

export default {
  name: "RosterPage",
  data() {
    return {};
  },
  components: {
    Roster,
    Recruitment,
    Apply,
  },
};
</script>

<style scoped>
.roster {
  margin-top: 0;
}

.cover {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9;
  position: absolute;
  margin: 0;
  padding: 0;
  top: 0;
  overflow-y: hidden;
}

@media (max-width: 767px) {
  .cover {
    width: 100vw;
    height: 100vh;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 8;
    margin: 0;
    padding: 0;
  }
}
</style>
