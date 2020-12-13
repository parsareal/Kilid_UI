<template>
  <div style="position:relative; top:5rem;" class="adminContainer">
      <h1>
          ADMIN PANEL
      </h1>

      <div v-bind:key="userItem._id" v-for="userItem in userItems">  
            <UserItem v-bind:userItem="userItem"/>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import UserItem from './userItem.vue'
import axios from 'axios'

export default {
  name: 'adminContainer',
  components: {
    UserItem
  },
  data() {
      return {
          userItems: []
      }
  },
  async created() {
      try {
          let res = await axios.get('http://localhost:3000/admin/getUsers', {
                    headers: {
                      "myauth": this.$store.state.token
                    }
                })
          this.userItems = res.data;
          console.log(res.data);
      } catch (error) {
          console.log(error);
      }
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

    .adminContainer {
      position: relative;
      top: 5rem;
    }

    * {
      direction: rtl
    }

    a {
      text-decoration: none;
      color: inherit;
    }

</style>
