<template>
  <div class="userItem">
      <div style="display:inline">
          <div>{{userItem.username}}</div>
          <button v-on:click="upgradeHandler">upgrade</button>
          <button v-on:click="deleteHandler">delete</button>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'userItem',
  props: ['userItem'],
  methods: {
    async upgradeHandler () {
        try {
          let res = await axios.post('http://localhost:3000/admin/upgradeUser', {
                  data: {
                      username: this.userItem.username
                  }
              }, {
                  headers: {
                    myauth: this.$store.state.token
                  }
              })
          console.log(res);
        } catch (error) {
          console.log(error);
        }
    }, 
    async deleteHandler () {
        try {
          let res = await axios.post('http://localhost:3000/admin/deleteUser', {
                  data: {
                      username: this.userItem.username
                  }
              }, {
                  headers: {
                    myauth: this.$store.state.token
                  }
              })
          console.log(res);
        } catch (error) {
          console.log(error);
        }
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

    * {
      direction: rtl
    }

    a {
      text-decoration: none;
      color: inherit;
    }

</style>
