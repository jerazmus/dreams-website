<template>
  <div class="home">
    <h1 class="guild">Dreams</h1>
    <h1>Dołącz do gildii i razem z nami wejdź w Shadowlands</h1>
    <h2>Poszukujemy osób zarówno do progresowania contentu jak i do casualowego grania</h2>
    <img src="@/assets/raiderio.png">
    <img src="@/assets/wowprogress.png">
    <img src="@/assets/warcraftlogs.png">
  </div>
</template>

<script>
export default {
    name: 'About',
    data() {
        return {
            
        }
    }
}
</script>

<style scoped>

h1 {
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    color: white;
    margin-top: 5px;
    text-shadow: black 1px 0 10px;
    font-size: 2vw;
}

h2 {
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    color: white;
    margin-top: 5px;
    text-shadow: black 1px 0 10px;
    font-size: 1vw;
}

.guild {
    font-size: 5vw;
}

.home {
    text-align: center;
    width: 60vw;
    height: auto;
    margin: 40vh auto 0px;
    color: white;
    padding-bottom: 20px;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    padding: 20px;
}

img {
    margin: 10vh 5px 0px 5px;
    width: 40px;
    height: 40px;
    margin-right: 2px;
    border: 2px solid transparent;
    border-radius: 50%;
    transition: 0.5s;
}

img:hover {
    border: 2px solid rgba(255,255,255,0.5);
}

</style>