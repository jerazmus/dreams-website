<template>
  <div id="navbar">
    <b-navbar toggleable="lg">
      <b-navbar-brand href="#">DREAMS</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">HOME</b-nav-item>
          <b-nav-item href="#">TEAM</b-nav-item>
          <b-nav-item href="#">O NAS</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#navbar {
  /* background-color: #003366; */
  background-color: #001a33;
  /* height: 10vh; */
  padding-top: 1vh;
}

.navbar-light .navbar-nav .nav-link, .navbar-light .navbar-brand {
  color: #b3d9ff;
}

.navbar-light .navbar-nav .nav-link {
  align-items: right;
}

</style>
