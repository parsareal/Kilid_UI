<template>
  <div class="addemail">
    <form action="" v-on:submit.prevent="addemailHandler">
        <input v-model="email" class="email-tab" type="text" placeholder="ایمیل">
        <button type="submit" class="login-submit">ارسال</button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'addemail',
  methods: {
      async addemailHandler() {
          try {
              console.log(this.$store.state.token);
              let res = await axios.post('http://localhost:3000/user/addEmail', {
                  data: {
                      email: this.email
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
