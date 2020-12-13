<template>
  <div class="house-container flex-row">
        <HouseSlidebar v-bind:houseData="houseData"/> 
        <MainContainer v-bind:houseData="houseData"/>        
  </div>
</template>

<script>
// @ is an alias to /src
import HouseSlidebar from './HouseSlidebar.vue'
import MainContainer from './MainContainer.vue'


export default {
  name: 'HouseContainer',
  components: {
    HouseSlidebar,
    MainContainer
  },
  props: ["houseData"]
}
</script>

<style scoped>

    .house-container {
        direction: rtl;
        width: 1400px;
        position: relative;
        padding: 24px 0 142px;
        margin-right: auto;
        margin-left: auto;
        top: 4rem;
    }
    

</style>
