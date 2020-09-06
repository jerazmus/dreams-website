<template>
    <div class="progress-box">{{ raidName }}
      <div class="progress-bosses row">
        <div class="progress-boss col-5 col-sm-5 col-md-2 col-lg-2 col-xl-2
" v-for="boss in bosses" :key="boss.name" v-bind:title="boss.name">
        </div>  
      </div>
    </div>
</template>

<script>
export default {
  name: 'Progress',
  data() {
    return {
      progressValue: "1",
      raidName: "Castle Nathria",
      bosses: [
          { name: '1', status: 'Tak' },
          { name: '2', status: 'Tak' },
          { name: '3', status: 'Tak' },
          { name: '4', status: 'Tak' },
          { name: '5', status: 'Tak' },
          { name: '6', status: 'Tak' },
          { name: '7', status: 'Tak' },
          { name: '8', status: 'Tak' },
          { name: '9', status: 'Tak' },
          { name: '10', status: 'Tak' }
      ]
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

@media (min-width: 576px) { 
 }

 @media (max-width: 767px) { 
   .progress-boss {
    height: 25vw;
    
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
