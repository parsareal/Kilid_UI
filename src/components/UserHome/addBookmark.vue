<template>
  <div style="position:relative; top:5rem;" class="addBookmark">
    <form action="" v-on:submit.prevent="addBookmarkHandler">
        <input v-model="title" class="email-tab" type="text" placeholder="عنوان خانه">
        <button type="submit" class="login-submit">ارسال</button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'addBookmark',
  methods: {
      async addBookmarkHandler() {
          try {
            //   console.log(this.$store.state.token);
              let res = await axios.post('http://localhost:3000/user/addBookmark', {
                  data: {
                      title: this.title
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
