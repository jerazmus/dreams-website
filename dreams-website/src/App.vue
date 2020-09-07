<template>
  <div id="app">
    <div id="cover">
      <router-view></router-view>
    </div>
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
  -background-color: #001a33;
  -background-color: black;
  background: url("./assets/shadowlands.jpg");
  background-position: center;
  background-repeat: no-repeat;
}

#cover {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  height: auto;
  background-color: rgba(0,0,0,0.85);
}
</style>
