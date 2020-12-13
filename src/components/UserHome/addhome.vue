<template>
  <div class="addhome">
    <form action="" v-on:submit.prevent="addhomeHandler">
        <input v-model="title" class="email-tab" type="text" placeholder="اسم خانه" required>
        <input v-model="price" class="email-tab" type="text" placeholder="قیمت">
        <input v-model="area" class="email-tab" type="text" placeholder="مساحت">
        <input v-model="bedrooms" class="email-tab" type="text" placeholder="اتاق خواب">
        <input v-model="parkings" class="email-tab" type="text" placeholder="پارکینگ">
        <input v-model="location" class="email-tab" type="text" placeholder="محله">
        <input v-model="phone" class="email-tab" type="text" placeholder="شماره تماس">
        <input v-model="houseType" class="email-tab" type="text" placeholder="نوع خانه">
        <!-- <input class="email-tab" type="file"> -->
        <input type="file" id="file" ref="file" v-on:change="handleFileUpload()" required/>
        <!-- <v-file-inpu -->
        <button type="submit" class="login-submit">ارسال</button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'addhome',
  data() {
      return{
          file: ''
      }
  },
  methods: {
      handleFileUpload(){
          this.file = this.$refs.file.files[0];
      },
      async addhomeHandler() {
          try {
              // console.log(this.$store.state.token);
              let res1 = await axios.post('http://localhost:3000/user/addHouse', {
                  data: {
                      title: this.title,
                      price: this.price,
                      bedrooms: this.bedrooms,
                      area: this.area,
                      location: this.location,
                      houseType: this.houseType,
                      parkings: this.parkings,
                      phone: this.phone
                  }
              }, {
                headers: {
                    myauth: this.$store.state.token
                  }
              })


              let formData = new FormData()
              formData.append('houseImage', this.file);
              let res = await axios({
                                method: 'post',
                                url: 'http://localhost:3000/user/upload',
                                data: formData,
                                headers: {'myauth': this.$store.state.token,
                                          'houseid': res1.data._id
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
    
    .addhome {
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
