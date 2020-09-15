<template>
  <div>
    <div class="progress-box"><p  @click="showRaidCastle = !showRaidCastle" class="raid-name">Castle Nathria</p>
      <transition name="progressBosses">
        <div  class="progress-bosses row" v-if="showRaidCastle == true">
          <div class="progress-boss col-5 col-sm-5 col-md-2 col-lg-2 col-xl-2"  
            v-for="boss in bosses" 
            :key="boss.number"  >
              <div 
              :style= "[boss.status > 0 ? boss.status > 1 ? boss.status > 2 ? {'border-color': 'orange' } : {'border-color': 'blue'} : {'border-color': 'green'}  : {'border-color': 'grey'} ]"
              class="outer-border">
                <img
                :style= "[boss.status > 0 ? boss.status > 1 ? boss.status > 2 ? {filter: 'drop-shadow(0 0 5px #a335ee)' } : {filter: 'drop-shadow(0 0 5px #0070dd)'} : {filter: 'drop-shadow(0 0 5px #1eff00)'}  : {filter: 'drop-shadow(0 0 5px grey)'} ]"
                class="bossKilled" v-if="boss.status !== 0" :src="boss.img" />
                <img 
                class="bossNotKilled"
                style="filter: grayscale(1);" v-else :src="boss.img" />
              </div>
              <div 
                :style= "[boss.status > 0 ? boss.status > 1 ? boss.status > 2 ? {color: '#a335ee' } : {color: '#0070dd'} : {color: '#1eff00'}  : {color: 'grey'} ]"
                class="progress-boss-hover">
                {{boss.name | dropShadow}}
                <!--
                <p>
                <span style="color:green;" class="progress-boss-hover-status" v-if="boss.status === 1">Normal</span>
                <span style="color:blue" class="progress-boss-hover-status" v-if="boss.status === 2">Heroic</span> 
                <span style="color:orange" class="progress-boss-hover-status" v-if="boss.status === 3">Mythic</span>
                </p>
                -->
              </div>
            
          </div>
        </div>
      </transition>
    </div>

    <div class="progress-box"><p @click="showRaidNy = !showRaidNy" class="raid-name">Ny'alotha, the Waking City</p>
      <transition name="progressBosses">
        <div class="progress-bosses row" v-if="showRaidNy == true">
          <div class="progress-boss col-5 col-sm-5 col-md-2 col-lg-2 col-xl-2"  
            v-for="boss in bossesNy" 
            :key="boss.number"  >
              <div 
              :style= "[boss.status > 0 ? boss.status > 1 ? boss.status > 2 ? {'border-color': 'orange' } : {'border-color': 'blue'} : {'border-color': 'green'}  : {'border-color': 'grey'} ]"
              class="outer-border">
                <img
                class="bossKilled"
                :style= "[boss.status > 0 ? boss.status > 1 ? boss.status > 2 ? {filter: 'drop-shadow(0 0 5px #a335ee)' } : {filter: 'drop-shadow(0 0 5px #0070dd)'} : {filter: 'drop-shadow(0 0 5px #1eff00)'}  : {filter: 'drop-shadow(0 0 5px grey)'} ]"
                v-if="boss.status !== 0" :src="boss.img" />
                <img 
                class="bossNotKilled"
                style="filter: grayscale(1);" v-else :src="boss.img" />
                
              </div>
              <div 
                :style= "[boss.status > 0 ? boss.status > 1 ? boss.status > 2 ? {color: '#a335ee' } : {color: '#0070dd'} : {color: '#1eff00'}  : {color: 'grey'} ]"
                class="progress-boss-hover">
                {{boss.name}}
                <!--
                <p>
                <span style="color:green;" class="progress-boss-hover-status" v-if="boss.status === 1">Normal</span>
                <span style="color:blue" class="progress-boss-hover-status" v-if="boss.status === 2">Heroic</span> 
                <span style="color:orange" class="progress-boss-hover-status" v-if="boss.status === 3">Mythic</span>
                </p>
                -->
              </div>
            
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Progress',
  methods: {
		mouseEnter: function(){
      this.toShowOnHover = !this.toShowOnHover;   
    },
    mouseLeave: function(){
      this.toShowOnHover = false;   
    }
  },
  data() {
    return {
      progressValue: "1",
      showNumber: null,
      showRaidCastle: true,
      showRaidNy: false,
      bosses: [
          { number: 1, status: 3, name: "Shriekwing", img: require('@/assets/bosses/CastleNathria/1.png') },
          { number: 2, status: 3, name: "Altimor the Huntsman", img: require('@/assets/bosses/CastleNathria/2.png') },
          { number: 3, status: 2, name: "Hungering Destroyer", img: require('@/assets/bosses/CastleNathria/3.png') },
          { number: 4, status: 2, name: "Artificer Xy'Mox", img: require('@/assets/bosses/CastleNathria/4.png') },
          { number: 5, status: 1, name: "Sun King's Salvation", img: require('@/assets/bosses/CastleNathria/5.png') },
          { number: 6, status: 1, name: "Lady Inerva Darkvein", img: require('@/assets/bosses/CastleNathria/6.png') },
          { number: 7, status: 0, name: "The Council of Blood", img: require('@/assets/bosses/CastleNathria/7.png') },
          { number: 8, status: 0, name: "Sludgefist", img: require('@/assets/bosses/CastleNathria/8.png') },
          { number: 9, status: 0, name: "Stoneborne Generals", img: require('@/assets/bosses/CastleNathria/10.png') },
          { number: 10, status: 0, name: "Sire Denathrius", img: require('@/assets/bosses/CastleNathria/10.png') }
      ],
      bossesNy: [
          { number: 1, status: 3, name: "Wrathion", img: require('@/assets/bosses/Ny\'alotha/1.png') },
          { number: 2, status: 3, name: "Maut", img: require('@/assets/bosses/Ny\'alotha/2.png') },
          { number: 3, status: 3, name: "The Prophet Skitra", img: require('@/assets/bosses/Ny\'alotha/3.png') },
          { number: 4, status: 3, name: "Dark Inquisitor Xanesh", img: require('@/assets/bosses/Ny\'alotha/4.png') },
          { number: 5, status: 2, name: "Vexiona", img: require('@/assets/bosses/Ny\'alotha/5.png') },
          { number: 6, status: 3, name: "The Hivemind", img: require('@/assets/bosses/Ny\'alotha/6.png') },
          { number: 7, status: 2, name: "Ra-den", img: require('@/assets/bosses/Ny\'alotha/7.png') },
          { number: 8, status: 3, name: "Shad'har the Insatiable", img: require('@/assets/bosses/Ny\'alotha/8.png') },
          { number: 9, status: 2, name: "Drest'agath", img: require('@/assets/bosses/Ny\'alotha/9.png') },
          { number: 10, status: 2, name: "Il'gynoth", img: require('@/assets/bosses/Ny\'alotha/10.png') },
          { number: 11, status: 2, name: "Carapace of N'Zoth", img: require('@/assets/bosses/Ny\'alotha/11.png') },
          { number: 12, status: 2, name: "N'Zoth", img: require('@/assets/bosses/Ny\'alotha/12.png') }
      ]
    }
  }
}
</script>

<style scoped>

.progressBosses-enter-active, .progressBosses-leave-active {
  max-height: 150vw;
  opacity: 1;
  overflow: hidden;
  transition: all 2s;
}
.progressBosses-enter, .progressBosses-leave-to
{
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
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  margin: auto;
  cursor: default;
  background-color: rgba(13, 13, 13, 0.7);
  border: 1px solid #ff6600;
}

.raid-name {
  padding-top: 1vw;
  margin-left: 2vw;
}

.progress-bosses {
  margin: auto;
}

.progress-boss {
  margin: 1px;
  height: 15vw;
  font-size: 20px;
  padding: 0;
  left: 8vw;
  margin-top:5vw;
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
  transition: .5s ease;
  z-index: 5;
  padding-top: 15%;
}

.progress-boss-hover:hover {
  opacity:1;
}


img {
  height: 100%;
  width: 80%;
  opacity: 1;
  position:absolute;
  left: 10%;
  top: -15%;
  -filter: grayscale(0.1);
  filter: drop-shadow(0 0 5px #ff6600);
  transition: .3s linear;
}

.progress-boss:hover img {
  -opacity: 0.2;
  height: 110%;
  width: 90%;
  margin-left: -2vw;
  margin-top: -1vw;
}

.outer-border {
  -border-bottom: 3px solid #666666;
  border-radius: 10%;
  margin-top: 8.5%;
  height: 18%;
  z-index:0;
}


.bossNotKilled:hover {
  filter: drop-shadow(0 0 5px #ff6600) !important;
}

.bossKilled:hover {
  -filter: drop-shadow(0 0 5px #ff3300) !important;
}
@media (min-width: 576px) { 
 }

 @media (max-width: 767px) { 
   .progress-boss {
    height: 25vw;
  }
  .progress-boss-hover {
    font-size: 4vw;
    padding-top:20%;
    height: 30%;
    z-index: 5;
  }
 }

@media (min-width: 768px) { 
  .progress-box, .progress-bosses {
     width: 60vw;
     font-size: 3vw;
     margin: auto;
     text-align: left;
  }

  .progress-box {
    margin-top: 5vw;
  }

  .progress-bosses {
    -margin-top:4vw;
    padding-left: 1vw;
    padding-right: 1vw;
  }

  .progress-boss {
    margin: 1px;
    height: 10vw;
    max-width: 20%;
    flex: 1 0 18%;
    left: 0;
    margin: auto;
    margin-top:3vw;
    padding: 1vw;
  }

  .progress-boss:hover img {
    -opacity: 0.2;
    height: 110%;
    width: 110%;
    margin-left: -0.5vw;
    margin-top: -0.4vw;
  } 
  

  .outer-border {
    height: 20.2%;
  }

  img {
    width: 100%;
    left: 0%;
    top: -25%;
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