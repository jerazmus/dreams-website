<template>
  <div class="recruitment">
    <h2>Rekrutacja</h2>
    <div class="classes"> 
        <img :src="getClass(className.class)"
        v-for="className in classes" 
        :id="className.class"
        :key="className.class"
        :class="{ 'class-nreq': !className.status }" 
        />

        <b-tooltip
        v-for="className in classes"
        :key="className.class"
        :target="className.class">
            <img :src="getClass(className.class)"
            v-for="className in classes"
            :key="className.class" />
        </b-tooltip>
    </div> 
  </div>
</template>

<script>
export default {
    name: 'Recruitment',
    data() {
        return {
            classes: [
                { status: true, class: "dk", desc: "Frost Unholy" },
                { status: false, class: "dh", desc: "Aktualnie nie poszukujemy" },
                { status: true, class: "druid", desc: "Balance Feral" },
                { status: true, class: "mage", desc: "Arcane Frost" },
                { status: false, class: "rogue", desc: "Aktualnie nie poszukujemy" },
                { status: true, class: "paladin", desc: "Holy" },
                { status: false, class: "shaman", desc: "Aktualnie nie poszukujemy" },
                { status: true, class: "priest", desc: "Discipline Holy" },
                { status: false, class: "hunter", desc: "Aktualnie nie poszukujemy" },
                { status: true, class: "warrior", desc: "Arms Fury" },
                { status: false, class: "monk", desc: "Aktualnie nie poszukujemy" },
                { status: false, class: "warlock", desc: "Aktualnie nie poszukujemy" },
            ],
            requiredClasses: []
        }
    },
    methods: {
        getClass(className) {
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

.grey-test {
    color: red;
}
</style>
