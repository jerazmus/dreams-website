<template>
  <div class="recruitment">
    <h2>REKRUTACJA</h2>
    <div class="classes"> 
        <img :src="getClass(className.class)"
        v-for="className in classes" 
        :id="className.class"
        :key="className.class"
        :class="{ 'class-nreq': !className.status }" />

        <b-tooltip
        v-for="className in requiredClasses"
        :key="className.class"
        :target="className.class">
            <img :src="getSpec(className.class, specName)"
            v-for="specName in className.spec"
            :key="specName" :alt="specName"/>
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
                { status: true, class: "dk", spec: ["frost", "unholy"] },
                { status: false, class: "dh", spec: null },
                { status: true, class: "druid", spec: ["balance", "feral"] },
                { status: true, class: "mage", spec: ["arcane", "frost"] },
                { status: false, class: "rogue", spec: null },
                { status: true, class: "paladin", spec: ["holy", "retribution"] },
                { status: false, class: "shaman", spec: null },
                { status: true, class: "priest", spec: ["discipline", "holy"] },
                { status: false, class: "hunter", spec: null },
                { status: true, class: "warrior", spec: ["arms", "fury"] },
                { status: false, class: "monk", spec: null },
                { status: false, class: "warlock", spec: null },
            ],
            requiredClasses: []
        }
    },
    methods: {
        getClass(className) {
            return require('@/assets/role/'+className+'.png')
        },
        getSpec(className, specName) {
            return require('@/assets/spec/'+className+'/'+specName+'.png')
        },
        filterClasses() {
            let temp = []
            this.classes.forEach(element => {
                if(element.status) {
                temp.push(element)
                }
            });
            return temp
        }
    },
    mounted() {
        this.requiredClasses = this.filterClasses()
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
    -border: 1px solid #b3d9ff;
    border: 1px solid orange;
    width: 60vw;
    height: auto;
    margin: 20px auto 0px;
    -background-color: #000d1a;
    background-color: rgba(0,0,0,0.1);
    padding-bottom: 20px;
}

.classes {
    padding: 0;
}

img {
    height: 80px;
    width: 80px;
    border-radius: 50%;
    -border: 2px solid #003366;
    border: 2px solid orange;
    margin: 10px 2px 0px 2px;
    padding: 2px;
}

.class-nreq {
    filter: grayscale(1);
}

.tooltip.b-tooltip {
    opacity: 1;
    background-color: transparent;
}

.tooltip-inner {
    background-color: white;
    border: 5%;
}

</style>
