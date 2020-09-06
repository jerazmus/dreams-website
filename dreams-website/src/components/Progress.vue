<template>
    <div class="progress-box">{{ raid_name }}: {{ progress_value }}/10
    </div>
</template>

<script>
export default {
  name: 'Progress',
  data() {
    return {
      progress_value: "10",
      raid_name: "Castle Nathria"
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.progress-box {
    font-size: 21px;
    text-align: center;
    color: #b3d9ff;
    font-family: Algerian;
    background-color: #003366;
    border: 5px solid #001a33;
    margin:5%;
    padding: 5%;
}

@media (max-width: 315px) { 
  .progress-box {
     font-size: 18px;
     background-color: violet;
  }
 }

 @media (min-width: 400px) { 
  .progress-box {
     font-size: 26.5px;
     background-color: violet;
  }
 }

@media (min-width: 576px) { 
  .progress-box {
     font-size: 39px;
     background-color: black;
  }
 }

@media (min-width: 768px) { 
  .progress-box {
     font-size: 50px;
       background-color: green;
  }
}

@media (min-width: 992px) { 
  .progress-box {
     font-size: 68px;
       background-color: blue;
  }
 }
</style>
