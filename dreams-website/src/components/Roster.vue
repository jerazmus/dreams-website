<template>
  <div class="roster col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
    <div class="members">
      <div class="member" 
      v-for="member in roster"
      :key="member">
        <img src="../assets/portrait.png" />
        <span class="nickname"
        v-bind:style="{ color: getColor(member.class) }">
          {{ member.nick }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Roster',
  data() {
    return {
      msg: "ROSTER",
      roster: [
        { nick: "Pandavani", class: "warrior", role: "tank" },
        { nick: "Slasch", class: "dk", role: "tank" },
        { nick: "Meodruid", class: "druid", role: "healer" },
        { nick: "Szarlotka", class: "priest", role: "healer" },
        { nick: "Hebin", class: "shaman", role: "healer" },
        { nick: "Warflakes", class: "monk", role: "healer" },
        { nick: "Xariyosu", class: "mage", role: "dps" },
        { nick: "Arthres", class: "rogue", role: "dps" },
        { nick: "Trupimek", class: "warrior", role: "dps" },
        { nick: "Maanffredo", class: "dk", role: "dps" },
        { nick: "Alarija", class: "hunter", role: "dps" },
        { nick: "Cinnaeth", class: "mage", role: "dps" },
        { nick: "Kozuchos", class: "paladin", role: "dps" },
        { nick: "Frozeny", class: "rogue", role: "dps" },
        { nick: "Tharkon", class: "warrior", role: "dps" },
        { nick: "Quetrix", class: "mage", role: "dps" },
        { nick: "Qatani", class: "priest", role: "dps" },
        { nick: "Cichy", class: "rogue", role: "dps" },
        { nick: "Antrack", class: "dh", role: "dps" },
        { nick: "Daokmin", class: "hunter", role: "dps" },
      ]
    }
  },
  methods: {
    getColor(className) {
      switch (className) {
        case "monk":
          return "#00FF96";
        case "dk":
          return "#C41F3B";
        case "dh":
          return "#A330C9";
        case "druid":
          return "#FF7D0A";
        case "priest":
          return "#FFFFFF";
        case "shaman":
          return "#0070DE";
        case "mage":
          return "#40C7EB	";
        case "warlock":
          return "#8787ED";
        case "hunter":
          return "#A9D271";
        case "rogue":
          return "#FFF569";
        case "paladin":
          return "#F58CBA";
        case "warrior":
          return "#C79C6E";
      }
    },
    getProfile(nickname) {
      return `https://raider.io/characters/eu/burning-legion/${nickname}`
    }
  },
  components: {
  }
  
}
</script>

<style scoped>

.title {
  margin-left: 2vw;
}

.roster {
  -border: 1px solid #ff6600;
  width: 60vw;
  height: auto;
  margin: 20px auto 0px;
  color: white;
  -background-color: rgba(0,0,0,0.3);
  padding-bottom: 20px;
  font-family: 'Raleway', sans-serif;
  padding: 20px;
}

.members {
  display: flex;
  margin: auto;
  align-items: center;
  flex: 1;
  flex-wrap: wrap;
  justify-content: center;
}

.member {
  border: 1px solid #ff6600;
  width: 265px;
  margin: 5px;
  float: left;
  background-color: rgba(0,0,0,0.7);
}

.nickname {
  font-size: 26px;
  margin-left: 10px;
  display: inline-block;
  height: auto;
}

@media (max-width: 767px) { 
  .roster {
    border: none;
    width: 100vw;
  }
}

</style>
