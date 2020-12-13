<template>
  <div class="house flex-row">
        <Toolbar />
        <HouseContainer v-bind:houseData="houseData"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Toolbar from '../components/Menu/Toolbar.vue'
import HouseContainer from '../components/House/HouseContainer.vue'
import axios from "axios"

export default {
  name: 'house',
  components: {
    Toolbar,
    HouseContainer
  },
  data() {
    return {
        id: 0,
        houseData: []
    }
  },
  async created() {
    this.id = this.$route.params.id;
    console.log(this.id);
    try {
        let res = await axios.get('http://localhost:3000/getHouse', {
            headers: {
                houseId: this.id
            }
        })
        console.log(res);
        this.houseData = res.data
    } catch (error) {
        console.log(error);
    }

    // axios.get('http://hallows.ir/house/' + this.id)
    //   .then(res => this.houseData = res.data)
    //   .catch(err => console.log(err));
    
  },
}
</script>


<style>
    .flex-col {
        display: flex;
        flex-direction: column;
    }

    .flex-row {
        display: flex;
        flex-direction: row;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    .al-center {
        align-items: center;
    }

    .jus-center {
        justify-content: center;
    }

    .body {
        font-family: IRANSans,sans-serif;
        direction: rtl;
    }

    .house {
        padding: 24px 0 142px;
        position: relative;
        margin-right: auto;
        margin-left: auto;
    }   

</style>
