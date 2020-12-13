<template>
  <div class="addpicture">
    <form action="" v-on:submit.prevent="addpictureHandler">
        <input v-model="title" class="email-tab" type="text" placeholder="اسم خانه" required>
        <input type="file" id="file" ref="file" v-on:change="handleFileUpload()" required/>
        <!-- <v-file-inpu -->
        <button type="submit" class="login-submit">اضافه</button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'addpicture',
  data() {
      return{
          file: ''
      }
  },
  methods: {
      handleFileUpload(){
          this.file = this.$refs.file.files[0];
      },
      async addpictureHandler() {
          console.log(this.file);
          
          console.log(this.title);
          try {
                // console.log(this.$store.state.token);
                let res1 = await axios.post('http://localhost:3000/user/getSpecialHouse', {
                    data: {
                        housetitle: this.title
                    }
                }, {
                    headers: {
                        myauth: this.$store.state.token
                    }
                })
            
                console.log(res1);
                
                let formData = new FormData()
                formData.append('houseImage', this.file);
                let res = await axios({
                                    method: 'post',
                                    url: 'http://localhost:3000/user/upload',
                                    data: formData,
                                    headers: {'myauth': this.$store.state.token,
                                            'houseid': res1.data
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
    
    .addpicture {
      position: relative;
      top: 3rem;
    }

    .email-tab {
      display: block;
    }

    * {
      direction: rtl
    }

    a {
      text-decoration: none;
      color: inherit;
    }

</style>
