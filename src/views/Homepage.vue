<template>
  <div class="homepage">
      <!-- <h1>
          YOU ARE LOGGED IN
      </h1> -->
      <button v-on:click="logout" class="login-submit" >خروج</button>      
      <AddEmail />
      <AddHome />
      <AddPicture />
      <AddBookmark />
      <!-- <router-link to="./occasion" class="button search-button">مشاهده لیست خانه ها</router-link> -->
      <!-- <div class="admin-container flex-col" v-if="this.$store.state.isAdmin"> -->
      <AdminContainer v-if="this.$store.state.isAdmin"/>
      <BookmarkHouses />
      <Myhouses />
      <!-- </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
import AddEmail from '../components/UserHome/addemail.vue'
import AddHome from '../components/UserHome/addhome.vue'
import AdminContainer from '../components/UserHome/adminContainer.vue'
import Myhouses from '../components/UserHome/myHouses.vue'
import BookmarkHouses from '../components/UserHome/bookmarkHouses.vue'
import AddBookmark from '../components/UserHome/addBookmark.vue'
import AddPicture from '../components/UserHome/addPicture.vue'



import axios from 'axios'

export default {
  name: 'homepage',
  components: {
      AddEmail,
      AddHome,
      AdminContainer,
      Myhouses,
      BookmarkHouses,
      AddBookmark,
      AddPicture
  },
  methods: {
      async logout (event) {
          console.log(event);
          try {
                let res = await axios.post('http://localhost:3000/logout', {data: {}}, {
                    headers: {
                        myauth: this.$store.state.token
                    }
                })
                this.$store.commit('removeToken');
                this.$store.commit('unsetAdmin');
                // console.log(this.$store.state.token);
                console.log(res);
                this.$router.push({name: 'register'})
            } catch (error) {
                console.log(error);
            }
      }
  },
  created() {
      console.log(this.$store.state.token);
      console.log(this.$store.state.isAdmin);
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
