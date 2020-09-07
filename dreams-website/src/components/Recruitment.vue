<template>
  <div class="recruitment">
    <h2>Rekrutacja</h2>
    <div class="classes"> 
        <img :src="getRequired(className.class)"
        v-for="className in classes" 
        :key="className.class"
        :class="{ 'class-nreq': className.status }" />
    </div> 
  </div>
</template>

<script>
export default {
    name: 'Recruitment',
    data() {
        return {
            classes: [
                { status: true, class: "dk",        path: "../assets/dk.png"},
                { status: false, class: "dh",        path: "../assets/dh.png"},
                { status: true, class: "druid",     path: "../assets/druid.png"},
                { status: true, class: "mage",      path: "../assets/mage.png"},
                { status: false, class: "rogue",     path: "../assets/rogue.png"},
                { status: true, class: "paladin",   path: "../assets/paladin.png"},
                { status: false, class: "shaman",    path: "../assets/shaman.png"},
                { status: true, class: "priest",    path: "../assets/priest.png"},
                { status: false, class: "hunter",    path: "../assets/hunter.png"},
                { status: true, class: "warrior",   path: "../assets/warrior.png"},
                { status: true, class: "monk",      path: "../assets/monk.png"},
                { status: false, class: "warlock",   path: "../assets/warlock.png"},
            ]
        }
    },
    methods: {
        getRequired(className) {
            return require('@/assets/'+className+'.png')
        }
    }
}
</script>

<style scoped>

h2 {
    font-family: 'Raleway', sans-serif;
    color: white;
    margin-top: 5px;
}

.recruitment {
    text-align: center;
    border: 1px solid #b3d9ff;
    width: 60vw;
    height: auto;
    margin: 20px auto 0px;
    background-color: #000d1a;
    padding-bottom: 20px;
}

.classes {
    padding: 0;
}

img {
    height: 80px;
    width: 80px;
    border-radius: 50%;
    border: 1px solid #003366;
    margin: 10px 2px 0px 2px;
}

.class-nreq {
    filter: grayscale(1);
}
</style>
