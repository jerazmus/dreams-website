<template>
  <div class="recruitment">
    <h2>REKRUTACJA</h2>
    <div class="classes">
      <img
        :src="getClass(className.class)"
        v-for="className in classes"
        :id="className.class"
        :key="className.class"
        :class="{ 'class-nreq': !className.status }"
      />

      <b-tooltip
        placement="top"
        v-for="className in requiredClasses"
        :key="className.class"
        :target="className.class"
      >
        <img
          :src="getSpec(className.class, specName)"
          v-for="specName in className.spec"
          :key="specName"
          :alt="specName"
          class="spec-img"
        />
      </b-tooltip>
    </div>
    <div class="apply">
      Jesteś zainteresowany/a dołączeniem do nas?
      <div class="apply-button-box">
        <button class="apply-button" @click="openApplyBox">Aplikuj!</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recruitment",
  data() {
    return {
      classes: [
        { status: true,
          class: "dk", 
          spec: ["frost", "unholy", "blood"] 
        },
        { status: false, 
          class: "dh",
          spec: ["havoc", "vengeance"] },
        {
          status: true,
          class: "druid",
          spec: ["balance", "feral", "restoration", "guardian"],
        },
        { status: false,
          class: "mage",
          spec: ["arcane", "frost", "fire"] },
        {
          status: true,
          class: "rogue",
          spec: ["subtlety", "assassination", "outlaw"],
        },
        {
          status: false,
          class: "paladin",
          spec: ["holy", "retribution", "protection"],
        },
        {
          status: true,
          class: "shaman",
          spec: ["enhancement", "restoration", "elemental"],
        },
        {
          status: false,
          class: "priest",
          spec: ["discipline", "holy", "shadow"],
        },
        {
          status: true,
          class: "hunter",
          spec: ["marksman", "survival", "beastmastery"],
        },
        {
          status: false,
          class: "warrior",
          spec: ["arms", "fury", "protection"],
        },
        {
          status: true,
          class: "monk",
          spec: ["mistweaver", "windwalker", "brewmaster"],
        },
        {
          status: false,
          class: "warlock",
          spec: ["affliction", "demonology", "destruction"],
        },
      ],
      requiredClasses: [],
    };
  },
  methods: {
    getClass(className) {
      return require("@/assets/class/" + className + ".png");
    },
    getSpec(className, specName) {
      return require("@/assets/spec/" + className + "/" + specName + ".png");
    },
    filterClasses() {
      let temp = [];
      this.classes.forEach((element) => {
        if (element.status) {
          temp.push(element);
        }
      });
      return temp;
    },
    openApplyBox() {
      this.$store.state.cover = true;
      window.scrollTo({ top: 0, behavior: "smooth" });
      document.body.style.position = "fixed";
      document.body.style.width = "100vw";
    },
  },
  mounted() {
    this.requiredClasses = this.filterClasses();
  },
};
</script>

<style scoped>
h2 {
  font-weight: 300;
  color: white;
  margin-top: 5px;
  text-shadow: black 1px 0 10px;
}

.recruitment {
  text-align: center;
  width: 56.75vw;
  height: auto;
  margin: 20px auto 0px;
  color: white;
  padding-bottom: 20px;
}

.classes {
  padding: 0;
}

img {
  height: 70px;
  width: 70px;
  border-radius: 50%;
  border: 2px solid #235ebe;
  margin: auto 2px 5px 2px;
  padding: 2px;
}

.spec-img {
  padding: 0px;
  height: 60px;
  width: 60px;
  float: left;
  margin: 2px;
}

.class-nreq {
  filter: grayscale(1);
}

.tooltip.b-tooltip {
  opacity: 1;
  background-color: transparent;
  overflow: hidden;
}

.tooltip.b-tooltip >>> .tooltip-inner {
  background-color: transparent !important;
  max-width: 400px;
}

.tooltip.b-tooltip >>> .arrow {
  display: none;
}

.apply {
  font-weight: 300;
  color: white;
  margin-top: 5px;
  text-shadow: black 1px 0 10px;
}

.apply-button-box {
  margin-top: 10px;
}

.apply-button {
  background-color: transparent;
  border: none;
  color: white;
  display: inline-block;
  font-weight: 300;
  font-size: 20px;
  transition-duration: 0.5s;
}

button:hover {
  color: #478dff;
  transition: 0.5s ease;
}

button:focus {
  outline: none;
}

@media (max-width: 767px) {
  .recruitment {
    border: none;
    width: 100vw;
    margin-top: 0;
    background: transparent;
  }

  h2 {
    margin-top: 0;
    padding-top: 10px;
  }

  .tooltip.b-tooltip {
    background-color: rgb(0, 0, 0, 0.7) !important;
    border-radius: 45%;
  }
}
</style>
