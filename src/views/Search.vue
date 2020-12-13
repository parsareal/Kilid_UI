<template>
  <div class="search">
      <Toolbar />
      <h4 class="search-title">نتایج جست و جو</h4>
      <SearchResultsContainer v-bind:houses="houses"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Toolbar from '../components/Menu/Toolbar.vue'
import SearchResultsContainer from '../components/Search/SearchResultsContainer.vue'
import axios from 'axios'

export default {
  name: 'search',
  components: {
    Toolbar,
    SearchResultsContainer
  },
  data() {
    return {
        houses: [],
        location: ""
    }
  },
  async created() {
    this.location = this.$route.params.location;
    console.log('location:');
    console.log(typeof this.location);
    try {
        let res = await axios.post('http://localhost:3000/search', {
            data: {
                locationentered: this.location
            }
        })
        console.log(res);
        this.houses = res.data
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
        direction: rtl
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

    .search-title {
        position: relative;
        top: 5rem;
        font-size: larger;
        text-align: center;
    }


</style>
