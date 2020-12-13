<template>
  <div class="occasion-container">
      <h3>تمام خانه های مربوطه</h3>      
      <div class="grid-layout">
          <div style="display:inline;" v-bind:key="occasionItem._id" v-for="occasionItem in occasionItems">  
            <!-- <span>{{occasionItem.title}}</span> -->
            <OccasionItem v-bind:occasionItem="occasionItem"/>
          </div>
      </div>
      <!-- <button class="more-ocassion" v-on:click="loadMore()">اکازیون های بیشتر کیلید</button> -->
  </div>
</template>

<script>
// @ is an alias to /src
import OccasionItem from './../Occasion/OccasionItem.vue'
import axios from 'axios'

export default {
  name: 'HouseContainer',
  components: {
    OccasionItem
  },
  data() {
      return{
          occasionItems: [],
          anotherUrl: 0,
          loadEnable: true
      }
  },
  methods: {
    loadMore() {
        if (this.loadEnable){
            axios.get(this.anotherUrl)
            .then(res => {
              res.data.items.forEach(element => {
                  this.occasionItems.push(element)  
              });
            })
            .catch(err => console.log(err));
            this.loadEnable = false
        }
    }
  },
  async created(){
      try {
          let res = await axios.get('http://localhost:3000/user/getHouses', {
                    headers: {
                      "myauth": this.$store.state.token
                    }
                })
          this.occasionItems = res.data;
        //   console.log(res.data);
      } catch (error) {
          console.log(error);
      }

    //   axios.get('http://hallows.ir/occasion')
    //   .then(res => {
    //     this.occasionItems = res.data.items;
    //     this.anotherUrl = res.data.action.url;
    //   })
    //   .catch(err => console.log(err));
  }
}
</script>

<style scoped>

    .occasion-container {
        direction: rtl;
        display: flex;
        width: 1400px;
        flex-direction: column;
        position: relative;
        padding: 8px 0 0;
        min-height: calc(100vh - 450px);
        margin-right: auto;
        margin-left: auto;
        flex-wrap: wrap;
        justify-content: flex-start;
        top: 7rem;
    }

    .gird-layout {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        min-height: calc(100vh - 450px);
        margin: 0 -10px;
    }

    .more-ocassion {
        text-decoration: none;
        align-self: center;
        width: 180px;
        height: 45px;
        border-radius: 5px;
        border: 0;
        box-shadow: 0 3px 6px rgba(0,0,0,.16);
        color: #b30753;
        background-color: #fff;
        font-size: 15px;
        display: flex;
        align-items: center;
        position: relative;
        justify-content: center;
        cursor: pointer;
        top: 5%
    }

    .more-ocassion:hover{
        color: white;
        background: #b30753;
    }
    /* .flex-col {
        display: flex;
        flex-direction: column;
    }

    .flex-row {
        display: flex;
        flex-direction: row;
    }

    * {
      direction: rtl
    }

    a {
      text-decoration: none;
      color: inherit;
    } */

</style>
