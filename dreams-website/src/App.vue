<template>
  <div id="app">
    <div id="cover">
      <Navbar />
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar"

export default {
  components: {
    Navbar
  }
}
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
  font-family: 'Raleway', sans-serif !important;
  transition: 500ms ease;
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
  background: url("./assets/backgrounds/ardenweald.jpg");
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}

#cover {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  height: auto;
  background-color: rgba(0,0,0,0.6);
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
