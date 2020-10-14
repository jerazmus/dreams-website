<template>
  <div class="home">
    <img src="../assets/logo/final-solo.png" class="logo non-selectable" />
    <h1 class="guild">Dreams</h1>
    <h1>Dołącz do gildii i razem z nami wejdź w Shadowlands</h1>
    <h2>
      Gildia dla osób zarówno do progresowania contentu jak i casualowego grania
    </h2>
    <a :target="`_blank`" :href="raiderio"
      ><img
        src="@/assets/home-icons/raiderio.png"
        class="wow-icon non-selectable"
    /></a>
    <a :target="`_blank`" :href="wowprogress"
      ><img
        src="@/assets/home-icons/wowprogress.png"
        class="wow-icon non-selectable"
    /></a>
    <a :target="`_blank`" :href="warcraftlogs"
      ><img
        src="@/assets/home-icons/warcraftlogs.png"
        class="wow-icon non-selectable"
    /></a>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      raiderio: "https://raider.io/guilds/eu/burning-legion/Dreams",
      wowprogress: "https://www.wowprogress.com/guild/eu/burning-legion/Dreams",
      warcraftlogs: "https://www.warcraftlogs.com/guild/id/564669",
    };
  },
};
</script>

<style scoped>
h1,
h2 {
  font-weight: 300;
  color: white;
  margin-top: 5px;
  text-shadow: black 1px 0 10px;
}

h1 {
  font-size: 2vw;
}

h2 {
  font-size: 1vw;
}

.guild {
  font-size: 5vw;
}

.home {
  text-align: center;
  width: 60vw;
  height: auto;
  margin: 7.5vh auto 0px;
  color: white;
  padding-bottom: 20px;
  font-weight: 300;
  padding: 20px;
}

.wow-icon {
  margin: 2.5vh 5px 0px 5px;
  width: 40px;
  height: 40px;
  margin-right: 2px;
  border: 2px solid transparent;
  border-radius: 50%;
  transition: 0.5s;
  bottom: 5%;
}

.wow-icon:hover {
  border: 2px solid rgba(255, 255, 255, 0.5);
}

.logo {
  height: 400px;
  width: 400px;
  margin: 0 auto;
}

.non-selectable {
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

@media (max-width: 767px) {
  .guild {
    font-size: 15vw;
    margin-bottom: 5vh;
  }

  h1 {
    margin: 0;
    font-size: 7vw;
    margin-bottom: 5vh;
  }

  h2 {
    font-size: 5vw;
  }

  .home {
    margin: auto;
  }

  .logo {
    height: 200px;
    width: 200px;
  }
}

@media (min-height: 1000px) {
  .home {
    margin-top: 10vh;
  }

  .wow-icon {
    margin-top: 5vh;
  }
}
</style>
