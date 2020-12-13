<template>
  <div class="occasion">
      <Toolbar />
      <OccasionContainer />
  </div>
</template>

<script>
// @ is an alias to /src
import Toolbar from '../components/Menu/Toolbar.vue'
import OccasionContainer from '../components/Occasion/OccasionContainer.vue'


export default {
  name: 'occasion',
  components: {
    Toolbar,
    OccasionContainer
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

    .al-center {
        align-items: center;
    }

    .jus-center {
        justify-content: center;
    }


</style>
