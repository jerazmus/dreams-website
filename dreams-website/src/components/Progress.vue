<template>
  <div>
    <div class="progress-box castleNathria-box">
      <p class="raid-name">
        Castle Nathria
      </p>
      <transition name="progressBosses">
        <div class="progress-bosses row" v-if="showRaidCastle == true">
          <div
            class="progress-boss col-1 col-sm-1 col-md-2 col-lg-2 col-xl-2"
            v-for="boss in bosses"
            :key="boss.number"
          >
            <div
              :style="[
                boss.status > 0
                  ? { 'border-color': '#570505' }
                  : { 'border-color': 'grey', filter: 'grayscale(1)' },
              ]"
              class="outer-border"
            >
              <img
                class="bossKilled"
                v-if="boss.status !== 0"
                :src="boss.img"
              />
              <img class="bossNotKilledNathria" v-else :src="boss.img" />
            </div>
            <!--
              <div 
                :style= "[boss.status > 0 ? boss.status > 1 ? boss.status > 2 ? {color: '#a335ee' } : {color: '#0070dd'} : {color: '#1eff00'}  : {color: 'grey'} ]"
                class="progress-boss-hover">
                {{boss.name | dropShadow}}
                <p>
                <span style="color:green;" class="progress-boss-hover-status" v-if="boss.status === 1">Normal</span>
                <span style="color:blue" class="progress-boss-hover-status" v-if="boss.status === 2">Heroic</span> 
                <span style="color:orange" class="progress-boss-hover-status" v-if="boss.status === 3">Mythic</span>
                </p>
              </div>
              -->
          </div>
        </div>
      </transition>
      <div class="progress">
        <div class="progress-bar-count">
          {{ progressCount(bosses) }} / {{ bosses.length }}
        </div>
        <div
          class="progress-bar"
          role="progressbar"
          :style="{ width: progressPercent(bosses) + '%' }"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>

    <div class="progress-box no-border">
      <p @click="showRaidNy = !showRaidNy" class="raid-name">
        Poprzednie raidy
        <span
          :style="[
            showRaidNy == 1
              ? { transform: 'rotate(-90deg)' }
              : { transform: 'rotate(0deg)' },
          ]"
          class="raid-name-icon bi bi-chevron-double-left"
        >
          <svg
            width="2vw"
            height="1em"
            viewBox="0 4 16 16"
            class="bi bi-chevron-double-left"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
            <path
              fill-rule="evenodd"
              d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </span>
      </p>
      <transition name="progressBosses">
        <div class="progress-bosses NyAlotha-box row" v-if="showRaidNy == true">
          <div class="old-raid-name">Ny'alotha, the Waking City</div>
          <div
            class="old-progress-boss col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1"
            v-for="boss in bossesNy"
            :key="boss.number"
          >
            <div
              :style="[
                boss.status > 0
                  ? { 'border-color': '#360536' }
                  : { 'border-color': 'grey', filter: 'grayscale(1)' },
              ]"
              class="old-outer-border"
            >
              <img
                class="bossKilled"
                v-if="boss.status !== 0"
                :src="boss.img"
              />
              <img class="bossNotKilled" v-else :src="boss.img" />
            </div>
            <!--
              <div 
                :style= "[boss.status > 0 ? boss.status > 1 ? boss.status > 2 ? {color: '#a335ee' } : {color: '#0070dd'} : {color: '#1eff00'}  : {color: 'grey'} ]"
                class="progress-boss-hover">
                {{boss.name}}
                <p>
                <span style="color:green;" class="progress-boss-hover-status" v-if="boss.status === 1">Normal</span>
                <span style="color:blue" class="progress-boss-hover-status" v-if="boss.status === 2">Heroic</span> 
                <span style="color:orange" class="progress-boss-hover-status" v-if="boss.status === 3">Mythic</span>
                </p>
               
              </div>
              -->
          </div>
          <div class="progress progressNyAlotha">
            <div class="progress-bar-count">
              {{ progressCount(bossesNy) }} / {{ bossesNy.length }}
            </div>
            <div
              class="progress-bar-NyAlotha"
              role="progressbar"
              :style="{ width: progressPercent(bossesNy) + '%' }"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Progress",
  created() {
    window.addEventListener("resize", this.widthUpdate);
    this.widthUpdate();
  },
  destroyed() {
    window.removeEventListener("resize", this.widthUpdate);
  },
  methods: {
    widthUpdate() {
      this.userWidth = window.innerWidth;
    },
    progressCount(bosses) {
      let bossesCount = 0;
      bosses.forEach((boss) => {
        if (boss.status != 0) bossesCount++;
      });
      return bossesCount;
    },
    progressPercent(bosses) {
      let bossesCount = 0;
      bosses.forEach((boss) => {
        if (boss.status != 0) bossesCount++;
      });
      return (bossesCount / bosses.length) * 100;
    },
  },
  data() {
    return {
      userWidth: 0,
      showRaidCastle: true,
      showRaidNy: false,
      bosses: [
        {
          number: 1,
          status: 1,
          name: "Shriekwing",
          img: require("@/assets/bosses/CastleNathria/1.png"),
        },
        {
          number: 2,
          status: 0,
          name: "Altimor the Huntsman",
          img: require("@/assets/bosses/CastleNathria/2.png"),
        },
        {
          number: 3,
          status: 0,
          name: "Hungering Destroyer",
          img: require("@/assets/bosses/CastleNathria/3.png"),
        },
        {
          number: 4,
          status: 0,
          name: "Artificer Xy'Mox",
          img: require("@/assets/bosses/CastleNathria/4.png"),
        },
        {
          number: 5,
          status: 0,
          name: "Sun King's Salvation",
          img: require("@/assets/bosses/CastleNathria/5.png"),
        },
        {
          number: 6,
          status: 1,
          name: "Lady Inerva Darkvein",
          img: require("@/assets/bosses/CastleNathria/6.png"),
        },
        {
          number: 7,
          status: 0,
          name: "The Council of Blood",
          img: require("@/assets/bosses/CastleNathria/7.png"),
        },
        {
          number: 8,
          status: 3,
          name: "Sludgefist",
          img: require("@/assets/bosses/CastleNathria/8.png"),
        },
        {
          number: 9,
          status: 0,
          name: "Stoneborne Generals",
          img: require("@/assets/bosses/CastleNathria/10.png"),
        },
        {
          number: 10,
          status: 5,
          name: "Sire Denathrius",
          img: require("@/assets/bosses/CastleNathria/10.png"),
        },
      ],
      bossesNy: [
        {
          number: 1,
          status: 3,
          name: "Wrathion",
          img: require("@/assets/bosses/Ny'alotha/1.png"),
        },
        {
          number: 2,
          status: 3,
          name: "Maut",
          img: require("@/assets/bosses/Ny'alotha/2.png"),
        },
        {
          number: 3,
          status: 3,
          name: "The Prophet Skitra",
          img: require("@/assets/bosses/Ny'alotha/3.png"),
        },
        {
          number: 4,
          status: 3,
          name: "Dark Inquisitor Xanesh",
          img: require("@/assets/bosses/Ny'alotha/4.png"),
        },
        {
          number: 5,
          status: 0,
          name: "Vexiona",
          img: require("@/assets/bosses/Ny'alotha/5.png"),
        },
        {
          number: 6,
          status: 3,
          name: "The Hivemind",
          img: require("@/assets/bosses/Ny'alotha/6.png"),
        },
        {
          number: 7,
          status: 0,
          name: "Ra-den",
          img: require("@/assets/bosses/Ny'alotha/7.png"),
        },
        {
          number: 8,
          status: 3,
          name: "Shad'har the Insatiable",
          img: require("@/assets/bosses/Ny'alotha/8.png"),
        },
        {
          number: 9,
          status: 0,
          name: "Drest'agath",
          img: require("@/assets/bosses/Ny'alotha/9.png"),
        },
        {
          number: 10,
          status: 0,
          name: "Il'gynoth",
          img: require("@/assets/bosses/Ny'alotha/10.png"),
        },
        {
          number: 11,
          status: 0,
          name: "Carapace of N'Zoth",
          img: require("@/assets/bosses/Ny'alotha/11.png"),
        },
        {
          number: 12,
          status: 0,
          name: "N'Zoth",
          img: require("@/assets/bosses/Ny'alotha/12.png"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.col-1,
.col-md-1,
.col-sm-1,
.col-lg-1,
.col-xl-1 {
  padding-left: 1vw;
  padding-right: 1vw;
}

.text shadow {
  text-shadow: black 2px 0 10px;
}

.progress {
  width: 80vw;
  height: 8vw;
  margin: auto;
  margin-bottom: 4vw;
  border: 2px solid #570505;
  background-color: #5e050541;
}

.progressNyAlotha {
  border: 2px solid #360536;
  background-color: #4b064b41;
}

.progress-bar {
  background-color: #5e0505b2;
}

.progress-bar-NyAlotha {
  background-color: #570757b2;
}

.progress-bar-count {
  position: absolute;
  right: 45vw;
  padding-top: 3.5vw;
  font-size: 3vw;
  font-weight: bold;
  color: #ffffff;
  text-shadow: black 2px 0 10px;
}

.progressBosses-enter-active,
.progressBosses-leave-active {
  max-height: 150vw;
  opacity: 1;
  overflow: hidden;
  transition: all 1s;
}
.progressBosses-enter,
.progressBosses-leave-to {
  opacity: 0;
  max-height: 0vw;
  transition: all 1s;
}

.progress-box {
  user-select: none;
  width: 100vw;
  font-size: 8vw;
  text-align: center;
  color: white;
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  margin: auto;
  cursor: default;
  -background-color: rgba(13, 13, 13, 0.7);
  border: 1px solid #57050570;
  margin-top: 1vw;
  overflow: hidden;
}

.no-border {
  border: none !important;
}

.castleNathria-box {
  background-image: url("../assets/backgrounds/Nathria.jpg");
  background-repeat: no-repeat;
  background-position: 100%;
  background-size: 100%;
}

.NyAlotha-box {
  background-image: url("../assets/backgrounds/nyalotha.jpg");
  background-repeat: no-repeat;
  background-position: 100%;
  background-size: 100%;
}

p.raid-name {
  margin: auto;
  margin-left: 2vw;
  text-shadow: black 2px 0 10px;
}

.old-raid-name {
  width: 100%;
  margin-bottom: 1vw;
  color: #ffffff;
  text-shadow: black 2px 0 10px;
}

.raid-name-icon {
  position: absolute;
  right: 22%;
  transition: all 1s;
}

.progress-bosses {
  margin: auto;
}

.progress-boss {
  max-width: 20%;
  flex: 1 0 20%;
  font-size: 20px;
  padding: 0;
  left: 3vw;
  margin-bottom: 3vw;
}

.old-progress-boss {
  height: 6vw;
  max-width: 16.6%;
  flex: 1 0 16.6%;
  left: 1vw;
  margin-bottom: 10vw;
}

.progress-boss-hover {
  font-size: 1.3vw;
  text-align: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  opacity: 1;
  transition: 0.5s ease;
  z-index: 5;
  padding-top: 15%;
}

.progress-boss-hover:hover {
  opacity: 1;
}

img {
  height: 100%;
  width: 100%;
  opacity: 1;
  -position: absolute;
  -left: 10%;
  -top: -15%;
  -filter: grayscale(0.1);
  -filter: drop-shadow(0 0 5px #478dff);
  transition: 0.3s linear;
  vertical-align: top;
}

.progress-boss:hover img {
  -opacity: 0.2;
  -height: 110%;
  -width: 90%;
  -margin-left: -2vw;
  -margin-top: -1vw;
}

.outer-border {
  height: 14vw;
  width: 14vw;
  border: 2px solid;
  background-color: #57050570;
}

.old-outer-border {
  height: 13vw;
  width: 13vw;
  border: 2px solid;
  background-color: #57050570;
}

.bossNotKilled {
  -filter: grayscale(1);
}

.bossNotKilledNathria {
  -filter: grayscale(1);
}

.bossNotKilledNathria:hover {
  -filter: drop-shadow(0 0 3px #570505) !important;
}

.bossNotKilled:hover {
  -filter: drop-shadow(0 0 3px #570357) !important;
}

.bossKilled:hover {
  -filter: drop-shadow(0 0 5px #ff3300) !important;
}

@media (min-width: 576px) {
}

@media (max-width: 767px) {
  .progress-boss {
    -height: 15vw;
  }

  .raid-name-icon {
    display: none;
  }

  .raid-name {
    text-align: center;
  }

  .progress-boss-hover {
    font-size: 4vw;
    padding-top: 20%;
    height: 30%;
    z-index: 5;
  }

  .progress-box {
    border: none;
    margin-top: 0;
  }
}

@media (min-width: 768px) {
  .NyAlotha-box {
    border: 1px solid #570357;
  }

  .progress {
    width: 50vw;
    height: 3.5vw;
    margin: auto;
    margin-bottom: 2.5vw;
    border: 2px solid #570505;
    background-color: #5e050541;
  }

  .progressNyAlotha {
    border: 2px solid #360536;
    background-color: #4b064b41;
  }

  .progress-bar {
    background-color: #5e0505b2;
  }

  .progress-bar-NyAlotha {
    background-color: #570757b2;
  }

  .progress-bar-count {
    position: absolute;
    right: 46.5vw;
    padding-top: 1.5vw;
    font-size: 2vw;
    font-weight: bold;
    color: #ffffff;
  }

  .progressBosses-enter-active,
  .progressBosses-leave-active {
    max-height: 150vw;
    opacity: 1;
    overflow: hidden;
    transition: all 3s;
  }
  .progressBosses-enter,
  .progressBosses-leave-to {
    opacity: 0;
    max-height: 0vw;
    transition: all 1s;
  }

  .progress-box,
  .progress-bosses {
    width: 60vw;
    font-size: 3vw;
    margin: auto;
    text-align: center;
  }

  .progress-box {
    margin-top: 2vw;
  }

  .progress-bosses {
    padding-left: 1vw;
    padding-right: 1vw;
  }

  .progress-boss {
    height: 7vw;
    max-width: 10%;
    flex: 1 0 10%;
    left: 0;
    margin: auto;
    padding: 1vw;
  }

  .old-progress-boss {
    height: 6vw;
    max-width: 8.3%;
    flex: 1 0 8.3%;
    left: 0;
    margin-bottom: 0vw;
  }

  .progress-boss:hover img {
    -opacity: 0.2;
    -height: 110%;
    -width: 110%;
    -margin-left: -0.5vw;
    -margin-top: -0.4vw;
    height: 100%;
    width: 100%;
    margin-left: 0vw;
    margin-top: 0vw;
  }

  .outer-border {
    height: 4.2vw;
    width: 4.2vw;
    border: 2px solid;
    background-color: #57050570;
  }

  .old-outer-border {
    height: 4vw;
    width: 4vw;
    border: 2px solid;
    background-color: #743074a1;
  }

  img {
    width: 100%;
    height: 100%;
    -left: 0%;
    -top: -25%;
  }

  .raid-name-icon.bi.bi-chevron-double-left:hover {
    color: #478dff;
  }
}

@media (min-width: 992px) {
}

/*
///class=progress-boss////
//border 1px solid color
:style= "[boss.status > 0 ? boss.status > 1 ? boss.status > 2 ? {border: '1px solid orange' } : {border: '1px solid blue'} : {border: '1px solid green'}  : {border: '1px solid grey'} ]"
//border color
:style= "[boss.status > 0 ? boss.status > 1 ? boss.status > 2 ? {'border-color': 'orange' } : {'border-color': 'blue'} : {'border-color': 'green'}  : {'border-color': 'grey'} ]"
//filter drop-shadow
:style= "[boss.status > 0 ? boss.status > 1 ? boss.status > 2 ? {filter: 'drop-shadow(0 0 5px orange)' } : {filter: 'drop-shadow(0 0 5px blue)'} : {filter: 'drop-shadow(0 0 5px green)'}  : {filter: 'drop-shadow(0 0 5px grey)'} ]"
//color
:style= "[boss.status > 0 ? boss.status > 1 ? boss.status > 2 ? {color: 'orange' } : {color: 'blue'} : {color: 'green'}  : {color: 'grey'} ]"

  
  filter: drop-shadow(0 0 5px green);          
*/
</style>
