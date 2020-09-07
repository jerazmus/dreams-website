<template>
  <div id="navbar">
    <b-navbar toggleable="md" sticky>
      <b-navbar-brand @click.prevent="home">DREAMS</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse">
        <b-icon icon="list"></b-icon>
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item @click.prevent="home">HOME</b-nav-item>
          <b-nav-item @click.prevent="team">TEAM</b-nav-item>
          <b-nav-item @click.prevent="about">O NAS</b-nav-item>
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
  methods: {
    home() {
      this.$router.push("/");
    },
    team() {
      this.$router.push("/team")
    },
    about() {
      this.$router.push("/about")
    }
  }
  
}
</script>

<style scoped>

.navbar {
  margin: auto;
}

#navbar {
  background-color: #000d1a;
  padding-top: 0.5vh;
  font-family: 'Raleway', sans-serif;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
}

.navbar-light .navbar-nav .nav-link,
.navbar-light .navbar-brand,
.navbar-light .navbar-toggler,
.navbar-light .navbar-nav .nav-link:focus,
.navbar-light .navbar-toggler:focus,
.navbar-light .navbar-brand:hover,
.navbar-light .navbar-brand:focus {
  /*color: #b3d9ff;*/
  color: white;
}

.navbar-light .navbar-toggler {
  border-color: none;
  outline: none;
  font-size: 35px;
}

.navbar-light .navbar-brand {
  font-weight: 300;
  font-size: 40px;
}

.navbar-light .navbar-nav .nav-link {
  text-align: center;
  font-weight: 700;
  margin-left: 0.5em;
  margin-right: 0.5em;
}

.navbar-light .navbar-nav .nav-link:hover {
    color: #b3d9ff;
}

@media (min-width: 768px) {
  .navbar-expand-md {
    flex-flow: row nowrap;
    width: 60vw;
    justify-content: center;
  }

  .navbar-expand-md .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
    direction: ltr;
    flex-direction: row;
    justify-content: flex-end;
  }

}
</style>
