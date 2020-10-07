<template>
  <div id="navbar">
    <b-navbar toggleable="md" sticky>
      <b-navbar-brand @click.prevent="home">
        <a href="#" class="logo">
          <img src="@/assets/logo/dreams-name.png" id="logo" @click.prevent="collapse">
        </a>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse">
        <b-icon icon="list"></b-icon>
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item @click.prevent="about">O NAS</b-nav-item>
          <b-nav-item @click.prevent="team">SKŁAD</b-nav-item>
          <b-nav-item @click.prevent="progress">PROGRES</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
  methods: {
    home() {
      this.$router.push("/");
      this.$store.state.cover = false;
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    team() {
      this.$router.push("/roster");
      this.$store.state.cover = false;
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    about() {
      this.$router.push("/about");
      this.$store.state.cover = false;
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    progress() {
      this.$router.push("/progress");
      this.$store.state.cover = false;
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    collapse() {
      const button = document.querySelector("button");
      const collapse = document.querySelector("#nav-collapse");
      button.classList.remove("not-collapsed");
      button.classList.remove("collapsed");
      button.setAttribute("aria-expanded", "false");
      collapse.classList.remove("show");
    }
  },
  mounted() {
    const navbar = document.querySelector("#navbar");
    const logo = document.querySelector("#logo");
    window.onscroll = () => {
      if (window.scrollY >= 1) {
        navbar.classList.add("scrolled");
        logo.style.height="60px";
        logo.style.width="108px";
      } else {
        navbar.classList.remove("scrolled");
        logo.style.height="120px";
        logo.style.width="216px";
      }
    };
  },
};
</script>

<style scoped>
.navbar {
  margin: auto;
}

#navbar {
  padding-top: 0.5vh;
  font-weight: 300;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 8;
  transition: ease 500ms;
}

.scrolled {
  background-color: rgba(0, 0, 0, 0.9) !important;
  transition: ease 500ms !important;
}

.navbar-light .navbar-nav .nav-link,
.navbar-light .navbar-brand,
.navbar-light .navbar-toggler,
.navbar-light .navbar-nav .nav-link:focus,
.navbar-light .navbar-toggler:focus,
.navbar-light .navbar-brand:hover,
.navbar-light .navbar-brand:focus {
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
  transition: 0.5s;
}

.navbar-light .navbar-nav .nav-link:hover {
  color: #478dff;
}

img {
  width: 48px;
  height: 48px;
  margin: 0;
  padding: 0;
  padding-bottom: 5px;
}

#logo {
  width: 216px;
  height: 120px;
  transition: 500ms ease;
}

a,
a:hover {
  text-decoration: none;
  color: white;
  margin-left: 12px;
}

@media (min-width: 768px) {
  .navbar-expand-md {
    width: 60vw;
  }

  .navbar-expand-md .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
    direction: ltr;
    flex-direction: row;
    justify-content: flex-end;
  }
}

@media (min-width: 768px) and (max-width: 1100px) {
  .navbar-light .navbar-nav .nav-link {
    font-size: 10px;
  }
}

@media (max-width: 768px) {
  #nav-collapse {
    transition: ease 1s !important;
  }
}
</style>
