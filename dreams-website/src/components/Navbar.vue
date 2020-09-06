<template>
  <div id="navbar">
    <b-navbar toggleable="lg" >
      <b-navbar-brand href="#">DREAMS</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav mr-auto>
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
a {
  color: #b3d9ff;
}

.navbar {
  margin: auto;
}

#navbar {
  background-color: #000d1a;
  padding-top: 1vh;
  font-family: 'Raleway', sans-serif;
  align-items: center;
}

.navbar-light .navbar-nav .nav-link, .navbar-light .navbar-brand {
  color: #b3d9ff;
}

.navbar-light .navbar-toggler {
  color: #b3d9ff;
  border-color: #b3d9ff;
}

.navbar-light .navbar-nav .nav-link:focus {
  color: #b3d9ff;
}

.navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus { 
  color: #b3d9ff;
}

.navbar-light .navbar-brand {
  font-weight: 300;
  font-size: 40px;
}

.navbar-light .navbar-nav .nav-link {
  text-align: center;
  font-weight: 300;
}

.navbar-collapse { 
  align-items: right;
}

@media (min-width: 992px) {
  .navbar-expand-lg {
    flex-flow: row nowrap;
    width: 60vw;
    justify-content: center;
  }
}
</style>
