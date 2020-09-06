<template>
    <div class="progress-box">{{ raidName }}
      <div class="progress-bosses row">
        <div class="progress-boss col-5 col-sm-5 col-md-2 col-lg-2 col-xl-2"  
        @mouseover="showNumber=boss.number" 
        @mouseleave="showNumber=null" 
        v-for="boss in bosses" 
        :key="boss.number" 
        v-bind:title="boss.name" >
        <img :src="boss.img" />
          <div  class="progress-boss-hover" v-if="showNumber===boss.number">
              {{boss.name}}<br>
              <span style="color:green" class="progress-boss-hover-status" v-if="boss.status === 1">Normal</span>
              <span style="color:blue" class="progress-boss-hover-status" v-if="boss.status === 2">Heroic</span>
              <span style="color:orange" class="progress-boss-hover-status" v-if="boss.status === 3">Mythic</span>
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
      raidName: "Castle Nathria",
      showNumber: null,
      bosses: [
          { number: 1, status: 2, name: "Shriekwing", img: "https://cdn.mos.cms.futurecdn.net/p4cVpmhD26SrebJnWFB8RQ.jpg" },
          { number: 2, status: 2, name: "Altimor the Huntsman", img: "https://cdn.mos.cms.futurecdn.net/p4cVpmhD26SrebJnWFB8RQ.jpg" },
          { number: 3, status: 2, name: "Hungering Destroyer", img: "https://cdn.mos.cms.futurecdn.net/p4cVpmhD26SrebJnWFB8RQ.jpg" },
          { number: 4, status: 2, name: "Artificer Xy'Mox", img: "https://cdn.mos.cms.futurecdn.net/p4cVpmhD26SrebJnWFB8RQ.jpg" },
          { number: 5, status: 2, name: "Sun King's Salvation", img: "https://cdn.mos.cms.futurecdn.net/p4cVpmhD26SrebJnWFB8RQ.jpg" },
          { number: 6, status: 1, name: "Lady Inerva Darkvein", img: "https://cdn.mos.cms.futurecdn.net/p4cVpmhD26SrebJnWFB8RQ.jpg" },
          { number: 7, status: 1, name: "The Council of Blood", img: "https://cdn.mos.cms.futurecdn.net/p4cVpmhD26SrebJnWFB8RQ.jpg" },
          { number: 8, status: 1, name: "Sludgefist", img: "https://cdn.mos.cms.futurecdn.net/p4cVpmhD26SrebJnWFB8RQ.jpg" },
          { number: 9, status: 1, name: "Stoneborne Generals", img: "https://cdn.mos.cms.futurecdn.net/p4cVpmhD26SrebJnWFB8RQ.jpg" },
          { number: 10, status: 0, name: "Sire Denathrius", img: "https://cdn.mos.cms.futurecdn.net/p4cVpmhD26SrebJnWFB8RQ.jpg" }
      ]
    }
  }
  
}
</script>

<style scoped>

.progress-box {
  width: 100vw;
  font-size: 8vw;
  text-align: center;
  color: white;
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  margin: auto;
}

.progress-bosses {
  margin: auto;
}

.progress-boss {
  margin: 1px;
  height: 20vw;
  left: 10vw;
  font-size: 20px;
  background-color: tomato;
}


.progress-boss-hover {
  padding-top:5%;
  font-size: 1.5vw;
  text-align: center;
  margin:0;
}

img {
  height: 100%;
  width: 100%;
}


@media (min-width: 576px) { 
 }

 @media (max-width: 767px) { 
   .progress-boss {
    height: 25vw;
    
  }
  .progress-boss-hover {
    font-size: 5vw;
  }
 }

@media (min-width: 768px) { 
  .progress-box, .progress-bosses {
     width: 60vw;
     font-size: 5vw;
     margin: auto;
  }

  .progress-boss {
    margin: 1px;
    left: 5vw;
    height: 15vw;
    
  }

}

@media (min-width: 992px) { 
 }

</style>
