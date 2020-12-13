<template>
    <router-link :to="{name: 'house', params: {id: occasionItem._id}}" class="occasion_card flex-col al-center" href="#">
                  <div class="image_holder" v-bind:style="{ 'background-image': 'url( http://localhost:3000/' + occasionItem.pics[0] + ')' }">
                  <!-- <div class="image_holder" v-bind:style="{ 'background-image': 'url(https://www.kilidstatic.com/photos/small/listing_bd16286d-4032-41c3-acc3-7285ac3b8729.jpg)' }">  -->
                      <div class="save_icon">
                          <svg height="26.6" viewBox="0 0 19.152 26.6" width="19.152" xmlns="http://www.w3.org/2000/svg"><g data-name="Path 3686" id="Path_3686" transform="translate(1189.8 -1065.7)" class="svg_save"><path _ngcontent-c11="" class="cls-2" d="M -1171.298095703125 1092.79541015625 L -1172.447509765625 1091.416137695313 L -1180.223876953125 1082.084350585938 L -1188.000610351563 1091.416137695313 L -1189.150024414063 1092.795288085938 L -1189.150024414063 1091 L -1189.150024414063 1067 L -1189.150024414063 1066.349975585938 L -1188.5 1066.349975585938 L -1171.948120117188 1066.349975585938 L -1171.298095703125 1066.349975585938 L -1171.298095703125 1067 L -1171.298095703125 1091 L -1171.298095703125 1092.79541015625 Z"></path>
                            <path _ngcontent-c11="" style="fill: #fff;" d="M -1188.5 1067 L -1188.5 1091 L -1180.223876953125 1081.068969726563 L -1171.948120117188 1091 L -1171.948120117188 1067 L -1188.5 1067 M -1188.5 1065.699951171875 L -1171.948120117188 1065.699951171875 C -1171.230102539063 1065.699951171875 -1170.648071289063 1066.281982421875 -1170.648071289063 1067 L -1170.648071289063 1091 C -1170.648071289063 1091.54736328125 -1170.990966796875 1092.036010742188 -1171.505615234375 1092.222290039063 C -1171.650268554688 1092.274780273438 -1171.7998046875 1092.300048828125 -1171.947875976563 1092.300048828125 C -1172.326416015625 1092.300048828125 -1172.694946289063 1092.134521484375 -1172.94677734375 1091.832275390625 L -1180.223876953125 1083.099609375 L -1187.501342773438 1091.832275390625 C -1187.753173828125 1092.134521484375 -1188.121826171875 1092.300048828125 -1188.500244140625 1092.300048828125 C -1188.648315429688 1092.300048828125 -1188.7978515625 1092.274780273438 -1188.942504882813 1092.222290039063 C -1189.457153320313 1092.036010742188 -1189.800048828125 1091.54736328125 -1189.800048828125 1091 L -1189.800048828125 1067 C -1189.800048828125 1066.281982421875 -1189.218017578125 1065.699951171875 -1188.5 1065.699951171875 Z"></path></g></svg>
                      </div>
                      <div v-bind:class="{'favorite_icon':occasionItem.star}">
                          <!-- <img src="../../assets/Pics/star.png"/> -->
                      </div>
                      <div class="flex-row image_details">
                          <div class="flex-col title_address">
                              <span class="address">{{occasionItem.location}}</span>
                              <strong class="card_title">{{occasionItem.title}}</strong>
                          </div>
                          <div class="flex-row al-center number_images">
                              <!-- <span>{{length(occasionItem.pics)}}</span> -->
                              <span>0</span>
                              <svg style="width: 17px;height: 14px;margin-right: 5px;fill:#fff;stroke:#fff;stroke-width: .5px;" height="14.19" viewBox="0 0 16.5 14.19" width="16.5" xmlns="http://www.w3.org/2000/svg"><g data-name="Group 3030" id="Group_3030" transform="translate(-1278.063 -229.343)"><path d="M15.07,10H.93a.931.931,0,0,0-.93.93v9.727a.931.931,0,0,0,.93.93H15.07a.931.931,0,0,0,.93-.93V10.93A.931.931,0,0,0,15.07,10Zm.378,10.657a.378.378,0,0,1-.378.378H.93a.378.378,0,0,1-.378-.378V10.93a.378.378,0,0,1,.378-.378H15.07a.378.378,0,0,1,.378.378Z" data-name="Path 3111" id="Path_3111" transform="translate(1278.313 221.696)"></path><path d="M17,14a4,4,0,1,0,4,4A4,4,0,0,0,17,14Zm0,7.525A3.527,3.527,0,1,1,20.525,18,3.531,3.531,0,0,1,17,21.525Z" data-name="Path 3112" id="Path_3112" transform="translate(1269.591 219.492)"></path><path _ngcontent-c11="" class="cls-1" d="M19.276,6.552h5.241a.276.276,0,1,0,0-.552H19.276a.276.276,0,0,0,0,.552Z" data-name="Path 3113" id="Path_3113" transform="translate(1264.554 223.593)"></path></g></svg>
                          </div>
                      </div>
                  </div>
                  <div class="flex-col detail_holder">
                      <div class="flex-row al-center property_info">
                          <div class="base_info flex-row jus-center" style="color:#517cfb">
                              {{this.setDate(occasionItem.created_at)}} روز پیش
                          </div>
                          <div class="base_info flex-row jus-center">
                              {{occasionItem.bedrooms}}خوابه
                          </div>
                          <div class="base_info flex-row jus-center">
                              {{occasionItem.area}} متر
                          </div>
                          <div class="base_info flex-row jus-center">
                              {{occasionItem.houseType}}
                          </div>
                      </div>
                      <div class="flex-row price_wrapper">
                          <div class="flex-col" style="flex:1">
                              <div class="flex-row">
                                  <span>قیمت :‌</span>
                                  <strong>{{occasionItem.price / 10000000000}} میلیارد</strong>
                              </div>
                              <div class="flex-row">
                                  <span>متر مربع :‌</span>
                                  <strong>{{occasionItem.area}}</strong>
                              </div>
                          </div>

                          <div class="flex-col al-center agency_info">
                              <img :src="occasionItem.estate.log">
                              <span >{{occasionItem.estate}}</span>
                          </div>
                      </div>
                  </div>
              </router-link>
</template>


<script>
export default {
    name: 'OccasionItem',
    props: ["occasionItem"],
    methods: {
        setDate(created_at) {
            let now = new Date()
            let pass = new Date(created_at)
            const diffTime = Math.abs(now - pass);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
            console.log(diffDays);
            return diffDays
        }
    }, 
    created () {
        console.log('ssss');
    }
}
</script>


<style scoped>

    .occasion_card {
        height: 250px;
        width: 20%;
        background-color:#fff;
        box-shadow: 0 3px 6px rgba(0,0,0,.16);
        border-radius: 5px;
        margin-bottom: 20px;
        margin-left: 10px;
        margin-right: 10px;
        transition: all .3s ease;
        display: inline-block;
    }

    .image_holder {
        position: relative;
        width: 100%;
        height: 154px;
        background-color: yellow;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        background: center center/cover no-repeat;
        /* background-image:url({{occasionItem.pic.image}}); */
    }

    .detail_holder {
        flex: 1;
        width: 100%;
        padding: 2px;
    }

    .save_icon {
        position: absolute;
        top: 7px;
        left: 8px;
        transition: all .3s ease;
        width: 20px;
        height: 28px;
    }

    .svg_save {
        fill:rgba(51,51,51,.4);
        stroke-linecap: round;
        stroke-linejoin: round;
    }

    .svg_save:hover {
        fill:rgba(214, 79, 79, 0.4);
    }

    .image_details {
        position: absolute;
        width: 100%;
        align-items: flex-end;
        justify-content: space-between;
        height: 50px;
        background: linear-gradient(to top,
        rgba(0,0,0,.5) 0,
        rgba(0,0,0,.001) 100%);
        font-size: 10px;
        color:
            #fff;
            bottom: 0;
            right: 0;
    }

    .address {
        font-size: 10px;
        color: #fffbfb;
        margin-bottom: 8px;
    }

    .card_title {
        font-size: 12px;
        font-weight: 500;
        color: #fff;
    }

    .number_images {
        padding: 8px
    }

    .title_address {
        margin-right:10px;
        margin-bottom:8px
    }

    .property_info {
        padding: 2px 0;
        border-bottom: 1px solid #e1e4e9;
    }

    .base_info {
        flex: 1;
        color: #666;
        font-size: 11px;
        border-left: 1px solid #e1e4e9;
        white-space: nowrap;
    }

    .price_wrapper {
        flex: 1;
        padding: 10px;
        justify-content: space-between;
        margin-top: 10px;
    }

    .price_wrapper  span {
        width: 50px;
        margin-left: 0;
        font-size: 11px;
    }

    .price_wrapper strong {
        font-size: 16px;
        color:#173a63;
    }

    .agency_info {
        justify-content: space-around;
    }

    .agency_info > img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        object-fit: cover;
    }

    .agency_info > span {
        font-size: 9px;
        color: #666;
        width: 55px;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
        white-space: nowrap;
    }

    .favorite_icon {
        position: absolute;
        top: 5px;
        margin-right: 4px;
        width: 33px;
        height: 30px;
        display: flex;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        justify-content: center;
        align-items: center;
        color:#fff;
        background-image: url("../../assets/Pics/star.png");
    }

</style>