<template>
  <div id="apply" v-if="this.$store.state.cover">
    <transition name="fade" mode="out-in">
      <div class="apply">
        <p>
          Aktualnie nie prowadzimy rekrutacji poprzez Google Forms czy inny
          rodzaj formularzy.
        </p>
        <p>
          Jeśli jesteś zainteresowany/a graniem razem z nami, zaaplikuj poprzez
          guild finder lub odezwij się do jednej z osób:
        </p>

        <p>
          <span class="officer">Meo</span> (którakolwiek z postaci),
          <span class="officer" style="color: #FFF569;">Arthres</span>,
          <span class="officer" style="color: #A9D271;">Alarija</span>.
        </p>

        <div class="apply-button-box">
          <button class="apply-button" @click="closeApplyBox">
            Zamknij
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Apply",
  data() {
    return {};
  },
  methods: {
    closeApplyBox() {
      this.$store.state.cover = false;
      document.body.style.position = "static";
    },
  },
};
</script>

<style scoped>
.apply {
  margin: auto;
  position: absolute;
  border: 1px solid #478dff;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 10;
  color: white;
  top: 30%;
  left: 21.1%;
  width: 57.75vw;
  text-align: center;
  font-weight: 300;
  align-self: center;
  padding: 20px;
  box-shadow: 0 0 1em #235ebe;
}

.officer {
  font-weight: 500;
}

.apply-button-box {
  margin-top: 10px;
}

.apply-button {
  background-color: transparent;
  border: 1px solid #478dff;
  color: white;
  display: inline-block;
  font-weight: 300;
  font-size: 20px;
  transition-duration: 0.5s;
}

button:hover {
  border: 1px solid transparent;
  color: #478dff;
  transition: 0.5s ease;
}

button:focus {
  outline: none;
}

@media (max-width: 767px) {
  .apply {
    margin: auto;
    border: none;
    background-color: transparent;
    z-index: 9;
    color: white;
    bottom: 0;
    top: 10%;
    left: 11%;
    width: 80vw;
    text-align: center;
    font-weight: 300;
    padding: 20px;
  }
}
</style>
