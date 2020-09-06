<template>
  <div class="hello">
    <h2>{{ msg2 }}</h2>
    <h1 class="first">{{ msg }}</h1> 
  </div>
</template>

<script>
export default {
  name: 'Progress',
  data() {
    return {
      msg: "wszystko zabite",
      msg2: "zamek natria"
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.first {
    font-size: 50px;
}
</style>
