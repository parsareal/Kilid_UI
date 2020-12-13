<template>
  <div class="main-container flex-col">
      <div class="bread-crumb-part flex-row">
          <a href="">تهران</a>
          <span> &gt; </span>
          <a href="">{{houseData.location}}</a>
          <!-- <span> &gt; </span>
          <a href="">{{houseData.breadcrumb[2].name}}</a>
          <span> &gt; </span>
          <a href="">{{houseData.breadcrumb[3].name}}</a> -->
      </div>
      <!-- <ImageGallery v-bind:pic="houseData.pic"/> -->
      <ImageGallery v-bind:pics="houseData.pics"/>
      <div class="additional-buttons flex-row">
          <button class="add-but flex-row">
              <span>گزارش آگهی</span>
              <span class="" style="margin-right: 36px;">
                  <svg _ngcontent-c21="" class="ng-tns-c21-6" height="22.058" id="warning" viewBox="0 0 24.122 22.058" width="24.122" xmlns="http://www.w3.org/2000/svg"><g _ngcontent-c21="" class="ng-tns-c21-6" data-name="Group 3357" id="Group_3357" transform="translate(0 0)"><path _ngcontent-c21="" class="ng-tns-c21-6" d="M139.486,103.1a.672.672,0,0,0-.712.712v5.123a.712.712,0,1,0,1.423,0v-5.123A.672.672,0,0,0,139.486,103.1Z" data-name="Path 5478" fill="#373435" id="Path_5478" transform="translate(-127.425 -95.702)"></path><path _ngcontent-c21="" class="ng-tns-c21-6" d="M139.913,210.333a.688.688,0,0,0-1,0,.856.856,0,0,0-.142.569c0,.285,0,.427.142.569a.856.856,0,0,0,.569.142c.142,0,.427,0,.285-.142a1.079,1.079,0,0,0,.285-.569C140.055,210.618,140.055,210.476,139.913,210.333Z" data-name="Path 5479" fill="#373435" id="Path_5479" transform="translate(-127.425 -193.968)"></path><path _ngcontent-c21="" class="ng-tns-c21-6" d="M23.588,29.125l-8.4-14.658a3.536,3.536,0,0,0-3.131-1.85,3.709,3.709,0,0,0-3.131,1.85L.533,29.125a3.473,3.473,0,0,0,0,3.7,3.536,3.536,0,0,0,3.131,1.85H20.457a3.379,3.379,0,0,0,3.131-1.85A3.473,3.473,0,0,0,23.588,29.125Zm-1.139,3.131a1.907,1.907,0,0,1-1.85,1.139H3.664a2.221,2.221,0,0,1-1.85-1.139,2.184,2.184,0,0,1,0-2.277l8.4-14.658a1.907,1.907,0,0,1,1.85-1.139,2.271,2.271,0,0,1,1.992,1.139l8.4,14.658A2.184,2.184,0,0,1,22.449,32.256Z" data-name="Path 5480" fill="#373435" id="Path_5480" transform="translate(0.001 -12.617)"></path></g></svg>
              </span>
          </button>
          <button class="add-but flex-row">
              <span>اشتراک&zwnj;گذاری</span>
              <span class="" style="margin-right: 36px;">
                  <svg _ngcontent-c21="" class="ng-tns-c21-6" height="18.3" viewBox="0 0 17.081 18.3" width="17.081" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-c21="" class="ng-tns-c21-6" d="M13.57,12.793a3.093,3.093,0,0,0-.416.521l-5.272-3.2a3.017,3.017,0,0,0,0-2.254l5.274-3.176a3.067,3.067,0,1,0-.275-.547L7.6,7.318a3.051,3.051,0,1,0,0,3.339l5.28,3.2a3.049,3.049,0,1,0,.691-1.068ZM15.727.61a2.441,2.441,0,1,1-2.441,2.441A2.444,2.444,0,0,1,15.727.61ZM5.048,11.428A2.441,2.441,0,1,1,7.489,8.987,2.444,2.444,0,0,1,5.048,11.428Zm12.4,5.248a2.441,2.441,0,1,1,.715-1.726A2.444,2.444,0,0,1,17.453,16.676Z" fill="#373435" id="share" stroke="#373435" stroke-width="0.3" transform="translate(-1.847 0.15)"></path></svg>
              </span>
          </button>
          <button class="add-but flex-row">
              <span>ذخیره</span>
              <span class="" style="margin-right: 36px;">
                  <svg _ngcontent-c21="" class="ng-tns-c21-6" height="19.258" viewBox="0 0 15 19.258" width="15" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-c21="" class="ng-tns-c21-6" d="M17,3H7A2,2,0,0,0,5.01,5L5,21l7-3,7,3V5A2.006,2.006,0,0,0,17,3Z" data-name="Path 5525" id="Path_5525" stroke-width="1" transform="translate(-4.5 -2.5)"></path></svg>
              </span>
          </button>
      </div>
      <MapContainer v-bind:location="houseData.location"/>
      <HouseChart />
      <CommentContainer v-bind:houseid="houseData._id"/>

  </div>
</template>

<script>
// @ is an alias to /src
import ImageGallery from './ImageGallery.vue'
import MapContainer from './MapContainer.vue'
import HouseChart from './HouseChart.vue'
import CommentContainer from './CommentContainer.vue'



export default {
  name: 'MainContainer',
  data() {
    return {
        empty: {
            number: 1,
            images: [
                "https://www.kilidstatic.com/photos/large/listing_032d79ec-9dad-4774-ba74-a4faa5fcf495.jpg"
            ]
        }
    }
  },
  components: {
      ImageGallery,
      MapContainer,
      HouseChart,
      CommentContainer
  },
  props: ["houseData"]
}
</script>

<style scoped>

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    .main-container {
        flex: 2 1 auto;
        width: 0;
        color: #373435;
    }

    .bread-crumb-part {
        align-items: center;
        font-size: 15px;
        margin-bottom: 24px;
        color: #aaa;
        width: 100%;
        height: 2rem;
    }
    
    .additional-buttons {
        font-size: 14px;
        margin-bottom: 24px;
        align-items: center;
        justify-content: center
    }

    .add-but {
        width: 154px;
        height: 40px;
        border: none;
        border-radius: 15px;
        background-color: #fff;
        box-shadow: 0 3px 6px rgba(0,0,0,.16);
        margin-left: 16px;
        cursor: pointer;
        align-items: center;
        justify-content: center;
    }
</style>
