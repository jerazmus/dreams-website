<template>
  <div>
    <div class="progress-box"><p  @click="showRaidCastle = !showRaidCastle" class="raid-name">Castle Nathria</p>
      <div class="progress-bosses row"  v-if="showRaidCastle == true">
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
    </div>

    <div class="progress-box"><p @click="showRaidNy = !showRaidNy" class="raid-name">Ny'alotha</p>
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
      showRaidNy: true,
      bosses: [
          { number: 1, status: 3, name: "Shriekwing", img: "https://cdn.discordapp.com/attachments/234416331536072704/752586661900058684/1_Shriekwing_2.png" },
          { number: 2, status: 3, name: "Altimor the Huntsman", img: "https://cdn.discordapp.com/attachments/234416331536072704/752591450931200011/2_Altimor.png" },
          { number: 3, status: 2, name: "Hungering Destroyer", img: "https://cdn.discordapp.com/attachments/234416331536072704/752601365381120030/3_Hungering_1.png" },
          { number: 4, status: 2, name: "Artificer Xy'Mox", img: "https://cdn.discordapp.com/attachments/234416331536072704/752597412933271592/4_Artificer.png" },
          { number: 5, status: 1, name: "Sun King's Salvation", img: "https://cdn.discordapp.com/attachments/234416331536072704/752614396399714384/5.png" },
          { number: 6, status: 1, name: "Lady Inerva Darkvein", img: "https://cdn.discordapp.com/attachments/234416331536072704/752615437656785006/6.png" },
          { number: 7, status: 0, name: "The Council of Blood", img: "https://cdn.discordapp.com/attachments/234416331536072704/752613162989256784/7.png" },
          { number: 8, status: 0, name: "Sludgefist", img: "https://cdn.discordapp.com/attachments/234416331536072704/752609225766731886/8_Sludgefist.png" },
          { number: 9, status: 0, name: "Stoneborne Generals", img: "https://cdn.discordapp.com/attachments/234416331536072704/752603521932853358/10_SireB.png" },
          { number: 10, status: 0, name: "Sire Denathrius", img: "https://cdn.discordapp.com/attachments/234416331536072704/752604164965793792/10_SireBZ.png" }
      ],
      bossesNy: [
          { number: 1, status: 3, name: "Wrathion", img: "https://cdn.discordapp.com/attachments/234416331536072704/753377047899799612/1_1.png" },
          { number: 2, status: 3, name: "Maut", img: "https://cdn.discordapp.com/attachments/234416331536072704/752591450931200011/2_Altimor.png" },
          { number: 3, status: 3, name: "The Prophet Skitra", img: "https://cdn.discordapp.com/attachments/234416331536072704/752601365381120030/3_Hungering_1.png" },
          { number: 4, status: 3, name: "Dark Inquisitor Xanesh", img: "https://cdn.discordapp.com/attachments/234416331536072704/752597412933271592/4_Artificer.png" },
          { number: 5, status: 2, name: "Vexiona", img: "https://cdn.discordapp.com/attachments/234416331536072704/752614396399714384/5.png" },
          { number: 6, status: 3, name: "The Hivemind", img: "https://cdn.discordapp.com/attachments/234416331536072704/752615437656785006/6.png" },
          { number: 7, status: 2, name: "Ra-den", img: "https://cdn.discordapp.com/attachments/234416331536072704/752613162989256784/7.png" },
          { number: 8, status: 3, name: "Shad'har the Insatiable", img: "https://cdn.discordapp.com/attachments/234416331536072704/752609225766731886/8_Sludgefist.png" },
          { number: 9, status: 2, name: "Drest'agath", img: "https://cdn.discordapp.com/attachments/234416331536072704/752603521932853358/10_SireB.png" },
          { number: 10, status: 2, name: "Il'gynoth", img: "https://cdn.discordapp.com/attachments/234416331536072704/752604164965793792/10_SireBZ.png" },
          { number: 11, status: 2, name: "Carapace of N'Zoth", img: "https://cdn.discordapp.com/attachments/234416331536072704/752604164965793792/10_SireBZ.png" },
          { number: 12, status: 2, name: "N'Zoth", img: "https://cdn.discordapp.com/attachments/234416331536072704/752604164965793792/10_SireBZ.png" }
      ]
    }
  }
}
</script>

<style scoped>

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
  margin-left: 2vw;
}

.progress-bosses {
  margin: auto;
  margin-top:10vw;
}

.progress-boss {
  margin: 1px;
  height: 15vw;
  font-size: 20px;
  padding: 0;
  left: 8vw;
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
}

.progress-boss-hover:hover {
  opacity:1;
}


img {
  height: 100%;
  width: 100%;
  opacity: 1;
  position:absolute;
  left: 0;
  top: -38%;
  -filter: grayscale(0.1);
  filter: drop-shadow(0 0 5px #ff6600);
  transition: .5s ease;
}

.progress-boss:hover img {
  -opacity: 0.2;
  transform: scale(1.1);
  margin-top: -0.21vw;
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
    padding-top:4%;
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
     margin-top:4vw;
     padding: 1vw;
  }

  .progress-boss {
    margin: 1px;
    height: 10vw;
    max-width: 20%;
    flex: 1 0 18%;
    left: 0;
    margin: auto;
    margin-top:1vw;
  }

  .progress-boss:hover img {
    -opacity: 0.2;
    transform: scale(1.1);
    margin-top: -0.15vw;
  } 
  

  .outer-border {
    height: 20.2%;
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