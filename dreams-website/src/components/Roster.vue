<template>
  <div class="roster col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
    <div class="members">
      <div
        class="member col-sm-12 col-md-6 col-lg-6 col-xl-3"
        v-for="member in roster"
        :key="member.nick"
      >
        <img src="../assets/portrait.png" />
        <span class="nickname" v-bind:style="{ color: getColor(member.class) }">
          {{ member.nick }}
          <img
            :src="getRole(member.role)"
            :alt="member.role"
            class="role-img"
          />
          <a :href="getProfile(member.nick)" :target="`_blank`">
            <img src="../assets/home-icons/warcraft.png" class="profile-img" />
          </a>
          <a
            v-if="member.twitch"
            :href="getTwitch(member.twitchName)"
            :target="`_blank`"
          >
            <img src="../assets/home-icons/twitch.png" class="twitch-img" />
          </a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Roster",
  data() {
    return {
      roster: [
        {
          nick: "Pandavani",
          class: "warrior",
          role: "tank",
          twitch: false,
          twitchName: null,
        },
        {
          nick: "Slasch",
          class: "dk",
          role: "tank",
          twitch: false,
          twitchName: null,
        },
        {
          nick: "Meodruid",
          class: "druid",
          role: "healer",
          twitch: true,
          twitchName: "imeo_",
        },
        {
          nick: "Szarlotka",
          class: "priest",
          role: "healer",
          twitch: false,
          twitchName: null,
        },
        {
          nick: "Hebin",
          class: "shaman",
          role: "healer",
          twitch: false,
          twitchName: null,
        },
        {
          nick: "Warflakes",
          class: "monk",
          role: "healer",
          twitch: false,
          twitchName: null,
        },
        {
          nick: "Xariyosu",
          class: "mage",
          role: "dps",
          twitch: false,
          twitchName: null,
        },
        {
          nick: "Arthres",
          class: "rogue",
          role: "dps",
          twitch: true,
          twitchName: "amSubtlety",
        },
        {
          nick: "Trupimek",
          class: "warrior",
          role: "dps",
          twitch: false,
          twitchName: null,
        },
        {
          nick: "Maanffredo",
          class: "dk",
          role: "dps",
          twitch: false,
          twitchName: null,
        },
        {
          nick: "Alarija",
          class: "hunter",
          role: "dps",
          twitch: false,
          twitchName: null,
        },
        {
          nick: "Cinnaeth",
          class: "mage",
          role: "dps",
          twitch: false,
          twitchName: null,
        },
        {
          nick: "Kozuchos",
          class: "paladin",
          role: "dps",
          twitch: false,
          twitchName: null,
        },
        {
          nick: "Frozeny",
          class: "rogue",
          role: "dps",
          twitch: false,
          twitchName: null,
        },
        {
          nick: "Tharkon",
          class: "warrior",
          role: "dps",
          twitch: false,
          twitchName: null,
        },
        {
          nick: "Quetrix",
          class: "mage",
          role: "dps",
          twitch: false,
          twitchName: null,
        },
        {
          nick: "Qatani",
          class: "priest",
          role: "dps",
          twitch: false,
          twitchName: null,
        },
        {
          nick: "Cichy",
          class: "rogue",
          role: "dps",
          twitch: false,
          twitchName: null,
        },
        {
          nick: "Antrack",
          class: "dh",
          role: "dps",
          twitch: false,
          twitchName: null,
        },
        {
          nick: "Daokmin",
          class: "hunter",
          role: "dps",
          twitch: false,
          twitchName: null,
        },
      ],
    };
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
      return `https://worldofwarcraft.com/en-gb/character/eu/burning-legion/${nickname}`;
    },
    getTwitch(nickname) {
      return `https://twitch.tv/${nickname}`;
    },
    getRole(role) {
      return require("@/assets/role/" + role + ".png");
    },
  },
};
</script>

<style scoped>
.title {
  margin-left: 2vw;
}

.roster {
  width: 60vw;
  height: auto;
  margin: 20px auto 0px;
  color: white;
  padding-bottom: 20px;
  padding: 20px;
}

.members {
  display: flex;
  margin: 30px auto 0px;
  align-items: center;
  flex: 1;
  flex-wrap: wrap;
  justify-content: center;
}

.member {
  border: 2px solid #235ebe;
  box-shadow: 0 0 1em #235ebe;
  width: 265px;
  margin: 10px;
  float: left;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 0;
}

.nickname {
  font-size: 120%;
  margin-left: 10px;
  display: inline-block;
  height: auto;
  font-weight: 500;
}

.role-img {
  width: 50px;
  height: 50px;
  position: absolute;
  z-index: 5;
  top: -10px;
  right: -10px;
  border: 2px double #235ebe;
  box-shadow: 0 0 1em #235ebe;
  border-radius: 50%;
}

.profile-img,
.twitch-img {
  width: 22px;
  height: 22px;
  position: absolute;
  z-index: 5;
  filter: grayscale(1);
}

.profile-img {
  bottom: 5px;
  right: 5px;
}

.profile-img:hover,
.twitch-img:hover {
  filter: grayscale(0);
}

.twitch-img {
  bottom: 5px;
  right: 30px;
}

@media (min-width: 576px) {
  .member {
    max-width: 50%;
    flex: 1 0 48%;
  }
}

@media (max-width: 767px) {
  .roster {
    border: none;
    width: 100vw;
    margin-top: 0;
  }
}

@media (min-width: 768px) {
  .member {
    max-width: 25%;
    flex: 1 0 23%;
  }
}

@media (min-width: 768px) and (max-width: 1100px) {
  .roster {
    width: 80vw;
  }
}
</style>
