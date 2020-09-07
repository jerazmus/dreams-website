<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {}
</script>

<style>
* {
  margin: 0;
}

body {
  background-color: #001a33;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

body::-webkit-scrollbar {
  width: 0;
  height: 0;
}

#app {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  height: auto;
  background-color: #001a33;
}
</style>
