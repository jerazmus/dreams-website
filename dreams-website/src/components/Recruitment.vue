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
        :target="className.class"
        delay="50">
            <img :src="getSpec(className.class, specName)"
            v-for="specName in className.spec"
            :key="specName" :alt="specName"
            class="spec-img"/>
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
                { status: true, class: "dk", spec: ["frost", "unholy", "blood"] },
                { status: false, class: "dh", spec: null },
                { status: true, class: "druid", spec: ["balance", "feral", "restoration", "guardian"] },
                { status: true, class: "mage", spec: ["arcane", "frost", "fire"] },
                { status: true, class: "rogue", spec: ["subtlety", "assassination", "combat"] },
                { status: true, class: "paladin", spec: ["holy", "retribution", "protection"] },
                { status: true, class: "shaman", spec: ["enhancement", "restoration", "elemental"] },
                { status: true, class: "priest", spec: ["discipline", "holy", "shadow"] },
                { status: true, class: "hunter", spec: ["marksman", "survival", "beastmastery"] },
                { status: true, class: "warrior", spec: ["arms", "fury", "protection"] },
                { status: true, class: "monk", spec: ["mistweaver", "windwalker", "brewmaster"] },
                { status: true, class: "warlock", spec: ["affliction", "demonology", "destruction"] },
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
    border: 1px solid #ff6600;
    width: 60vw;
    height: auto;
    margin: 20px auto 0px;
    -background-color: #000d1a;
    color: white;
    background-color: rgba(0,0,0,0.3);
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
    border: 2px solid #ff6600;
    margin: 10px 2px 0px 2px;
    padding: 2px;
}

.spec-img {
    padding: 0px;
    height: 60px;
    width: 60px;
}

.class-nreq {
    filter: grayscale(1);
}

.tooltip.b-tooltip {
    opacity: 1;
    background-color: transparent;
    overflow: hidden;
    -transition: 1s;
}

.tooltip.b-tooltip >>> .tooltip-inner {
    background-color: transparent !important;
    max-width: 400px;
}

.tooltip.b-tooltip >>> .arrow {
    display: none;
}

</style>
