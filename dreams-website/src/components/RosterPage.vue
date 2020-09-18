<template>
  <div class="roster">
    <div id="cover" />
    <Roster />
    <Recruitment />
    <div id="apply">
      <p>Aktualnie nie prowadzimy rekrutacji poprzez Google Forms czy inny rodzaj formularzy. 
      <p>Jeśli jesteś zainteresowany/a graniem razem z nami, zaaplikuj poprzez guild finder lub odezwij się do jednej z osób:</p>

      <p>
            <span class="officer">Meo</span> (którakolwiek z postaci),
            <span class="officer" style="color: #FFF569;">Arthres</span>,
            <span class="officer" style="color: #A9D271;">Alarija</span>.
      </p>

      <div class="apply-button-box">
            <button class="apply-button" @click="close">Zamknij</button>
      </div>

    </div>
  </div>
</template>

<script>
import Roster from './Roster'
import Recruitment from './Recruitment'

export default {
  name: 'RosterPage',
  data() {
    return {
    }
  },
  components: {
      Roster,
      Recruitment
  },
  methods: {
    close() {
      document.getElementById("apply").style.display = "none";
    }
  }
}
</script>

<style scoped>

.roster {
  margin-top: 0;
}

#cover {
  display: none;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.8);
  z-index: 8;
  position: fixed;
  margin: 0;
  padding: 0;
}

#apply {
  display: none;
  margin: auto;
  position: absolute;
  border: 1px solid #ff6600;
  background-color: rgba(0,0,0,0.9);
  z-index: 9;
  color: white;
  top: 30%;
  left: 21.1%;
  width: 57.75vw;
  text-align: center;
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  align-self: center;
  padding: 20px;
}

.officer {
  font-weight: 500;
}

.apply-button-box {
    margin-top: 10px;
}

.apply-button {
    background-color: transparent;
    border: 1px solid #ff6600;
    color: white;
    display: inline-block;
    font-weight: 300;
    font-size: 20px;
    transition-duration: 0.5s;
}

button:hover {
    border: 1px solid transparent;
    color: #ff6600;
    transition: 0.5s ease;
}

button:focus {
    outline: none;
}

</style>
