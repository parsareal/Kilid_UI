<template>
  <div class="home">
      <Toolbar />
      <SearchContainer />
      <BazaarContainer />
      <MagazineContainer />
      <FooterContainer />

  </div>
</template>

<script>
// @ is an alias to /src
import Toolbar from '../components/Menu/Toolbar.vue'
import SearchContainer from '../components/SearchPart/SearchContainer.vue'
import MagazineContainer from '../components/Magazines/MagazineContainer.vue'
import FooterContainer from '../components/Footer/FooterContainer.vue'
import BazaarContainer from '../components/Bazaar/BazaarContainer.vue'


export default {
  name: 'home',
  components: {
    Toolbar,
    SearchContainer,
    MagazineContainer,
    FooterContainer,
    BazaarContainer
  }
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

</style>
