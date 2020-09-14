<template>
  <div id="footer">
    <p> Made by <span class="author">Meo</span> & <span class="author">Xariyosu</span></p> 
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
    }
  }
}
  
</script>

<style scoped>

#footer {
  background-color: rgb(13, 13, 13, 0.8);
  font-family: 'Raleway', sans-serif;
  text-align: center;
  border-top: 1px solid #ff6600;
  height: 5vh;
  width: 100vw;
  color: white;
  font-size: 12px;
  bottom: 0;
  position: absolute;
}

.author {
    color: #ff6600;
    font-weight: 700;
}

p {
    margin: 0 auto;
    top: 25%;
    position: relative;
}
</style>