<template>
    <div class="progress-box">{{ raidName }}
      <div class="progress-bosses row">
        <div class="progress-boss col-5 col-sm-5 col-md-2 col-lg-2 col-xl-2"  
        @mouseover="showNumber=boss.number" 
        @mouseleave="showNumber=null" 
        :style= "[boss.status > 0 ? boss.status > 1 ? boss.status > 2 ? {border: '1px solid orange' } : {border: '1px solid blue'} : {border: '1px solid green'}  : {border: '1px solid grey'} ]"
        v-for="boss in bosses" 
        :key="boss.number"  >
        <img v-if="boss.status !== 0" :src="boss.img" />
        <img class="image" style="filter: grayscale(1);" v-else :src="boss.img" />
        
          <div  class="progress-boss-hover" v-if="showNumber===boss.number">
           
            {{boss.name}}
            <p>
            <span style="color:green;" class="progress-boss-hover-status" v-if="boss.status === 1">Normal</span>
            <span style="color:blue" class="progress-boss-hover-status" v-if="boss.status === 2">Heroic</span> 
            <span style="color:orange" class="progress-boss-hover-status" v-if="boss.status === 3">Mythic</span>
            </p>
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
          { number: 1, status: 3, name: "Shriekwing", img: "https://cdn.mos.cms.futurecdn.net/p4cVpmhD26SrebJnWFB8RQ.jpg" },
          { number: 2, status: 3, name: "Altimor the Huntsman", img: "https://cdn.mos.cms.futurecdn.net/p4cVpmhD26SrebJnWFB8RQ.jpg" },
          { number: 3, status: 2, name: "Hungering Destroyer", img: "https://cdn.mos.cms.futurecdn.net/p4cVpmhD26SrebJnWFB8RQ.jpg" },
          { number: 4, status: 2, name: "Artificer Xy'Mox", img: "https://cdn.mos.cms.futurecdn.net/p4cVpmhD26SrebJnWFB8RQ.jpg" },
          { number: 5, status: 2, name: "Sun King's Salvation", img: "https://cdn.mos.cms.futurecdn.net/p4cVpmhD26SrebJnWFB8RQ.jpg" },
          { number: 6, status: 1, name: "Lady Inerva Darkvein", img: "https://cdn.mos.cms.futurecdn.net/p4cVpmhD26SrebJnWFB8RQ.jpg" },
          { number: 7, status: 1, name: "The Council of Blood", img: "https://cdn.mos.cms.futurecdn.net/p4cVpmhD26SrebJnWFB8RQ.jpg" },
          { number: 8, status: 1, name: "Sludgefist", img: "https://cdn.mos.cms.futurecdn.net/p4cVpmhD26SrebJnWFB8RQ.jpg" },
          { number: 9, status: 0, name: "Stoneborne Generals", img: "https://cdn.mos.cms.futurecdn.net/p4cVpmhD26SrebJnWFB8RQ.jpg" },
          { number: 10, status: 0, name: "Sire Denathrius", img: "https://d2skuhm0vrry40.cloudfront.net/2020/articles/2020-06-07-16-40/-1591544415043.jpg/EG11/thumbnail/750x422/format/jpg/quality/60" }
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
  cursor:default;
}

.progress-bosses {
  margin: auto;
}

.progress-boss {
  margin: 1px;
  height: 20vw;
  left: 10vw;
  font-size: 20px;
  padding:0;
}


.progress-boss-hover {
  position: absolute;
  font-size: 2vw;
  text-align: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  padding-top:20%;
  z-index: 1;
  opacity: 0;
  transition: .5s ease;
}

.progress-boss-hover:hover {
  opacity:1;
}


img {
  height: 100%;
  width: 100%;
  opacity:1;
  transition: .5s ease;
}

.progress-boss:hover img {
  opacity: 0.2;
}


@media (min-width: 576px) { 
 }

 @media (max-width: 767px) { 
   .progress-boss {
    height: 25vw;
    
  }
  .progress-boss-hover {
    font-size: 5vw;
    padding-top:5%;
  }
 }

@media (min-width: 768px) { 
  .progress-box, .progress-bosses {
     width: 70vw;
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
