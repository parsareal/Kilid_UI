<template>
    <div class="slidebar-container">
        <div class="info-container">
            <div class="info-header flex-row">
                <div class="home-code">کد ملک: ۸۹۷۰۶</div>
                <div class="home-time">{{this.setDate(houseData.created_at)}} روز پیش</div>
            </div>
            <h1 class="info-title">{{houseData.title}}</h1>
            <div class="info-area-price">
                <div class="info-inner-price-area">
                    <span class="price-area-title">قیمت:</span>
                    <span class="price-area-value">{{houseData.price / 10000000000}} میلیارد تومان</span>
                </div>
                <div class="info-inner-price-area">
                    <span class="price-area-title">قیمت هر متر مربع:</span>
                    <span class="price-area-value">{{(houseData.price / (houseData.area * 10000000)).toFixed(2)}} میلیون تومان</span>
                </div>
            </div>
            <div class="info-details">
                <div class="one-detail flex-row">
                    <span class="detail-icon flex-row">
                        <svg _ngcontent-c21="" style="width: 20px; height: 24px;" viewBox="0 0 21.5 21.279" xmlns="http://www.w3.org/2000/svg"><g _ngcontent-c21="" class="ng-tns-c21-21" id="home" transform="translate(-2.65 -5.05)"><path _ngcontent-c21="" class="ng-tns-c21-21" d="M3.9,12.332,13.575,4.8l9.675,7.532" data-name="Path 3310" fill="none" id="Path_3310" stroke="#b8b8b8" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.613" stroke-width="1.5" transform="translate(-0.175 1)"></path><line _ngcontent-c21="" class="ng-tns-c21-21" data-name="Line 255" fill="none" id="Line_255" stroke="#b8b8b8" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.613" stroke-width="1.5" transform="translate(3.4 25.579)" x1="20"></line><line _ngcontent-c21="" class="ng-tns-c21-21" data-name="Line 256" fill="none" id="Line_256" stroke="#b8b8b8" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.613" stroke-width="1.5" transform="translate(5.932 14.3)" y2="11.279"></line><line _ngcontent-c21="" class="ng-tns-c21-21" data-name="Line 257" fill="none" id="Line_257" stroke="#b8b8b8" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.613" stroke-width="1.5" transform="translate(20.868 14.3)" y2="4.006"></line><line _ngcontent-c21="" class="ng-tns-c21-21" data-name="Line 258" fill="none" id="Line_258" stroke="#b8b8b8" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.613" stroke-width="1.5" transform="translate(20.868 22.722)" y2="2.792"></line><path _ngcontent-c21="" class="ng-tns-c21-21" d="M30.6,29.449a.649.649,0,1,0-.649.649A.651.651,0,0,0,30.6,29.449Z" data-name="Path 3311" fill="#b8b8b8" fill-rule="evenodd" id="Path_3311" transform="translate(-9.082 -8.416)"></path><path _ngcontent-c21="" class="ng-tns-c21-21" d="M15.8,33.008V26.255a.444.444,0,0,1,.455-.455h2.922a.444.444,0,0,1,.455.455v6.688" data-name="Path 3312" fill="none" fill-rule="evenodd" id="Path_3312" stroke="#b8b8b8" stroke-miterlimit="2.613" stroke-width="1.5" transform="translate(-4.348 -7.364)"></path><path _ngcontent-c21="" class="ng-tns-c21-21" d="M16.06,17.6h3.377a.279.279,0,0,1,.26.26v2.013a.279.279,0,0,1-.26.26H16.06a.279.279,0,0,1-.26-.26V17.86A.279.279,0,0,1,16.06,17.6Z" data-name="Path 3313" fill="none" fill-rule="evenodd" id="Path_3313" stroke="#b8b8b8" stroke-miterlimit="2.613" stroke-width="1.5" transform="translate(-4.348 -4.488)"></path></g></svg>
                    </span>
                    <span class="detail-value">آپارتمان {{houseData.houseType}}</span>

                </div>
                <div class="one-detail flex-row">
                    <span class="detail-icon flex-row">
                        <svg _ngcontent-c21="" style="width: 20px; height: 24px;" viewBox="0 0 20.835 21.5" xmlns="http://www.w3.org/2000/svg"><g _ngcontent-c21="" class="ng-tns-c21-6" data-name="Group 3244" id="Group_3244" transform="translate(-268.25 -434.25)"><path _ngcontent-c21="" class="ng-tns-c21-6" d="M20.625,24.183a.391.391,0,1,1-.782,0V17.929l-1.329,1.329a.387.387,0,0,1-.547-.547L20,16.678c.078-.078.156-.078.313-.078a.369.369,0,0,1,.391.391v7.192Z" data-name="Path 3347" fill="#b8b8b8" fill-rule="evenodd" id="Path_3347" stroke="#b8b8b8" stroke-miterlimit="2.613" stroke-width="0.5" transform="translate(259.622 426.576)"></path><line _ngcontent-c21="" class="ng-tns-c21-6" data-name="Line 269" fill="none" id="Line_269" stroke="#b8b8b8" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.613" stroke-width="1.5" transform="translate(277.837 435.93)" x2="1.528"></line><path _ngcontent-c21="" class="ng-tns-c21-6" d="M20.781,5.4h2.193a1.4,1.4,0,0,1,1.4,1.4V9.187L5.1,9.054V6.8A1.4,1.4,0,0,1,6.5,5.4H8.821" data-name="Path 3348" fill="none" fill-rule="evenodd" id="Path_3348" stroke="#b8b8b8" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.613" stroke-width="1.5" transform="translate(263.9 430.53)"></path><line _ngcontent-c21="" class="ng-tns-c21-6" data-name="Line 270" fill="none" id="Line_270" stroke="#b8b8b8" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.613" stroke-width="1.5" transform="translate(288.269 442.176)" y1="2.658"></line><path _ngcontent-c21="" class="ng-tns-c21-6" d="M32.9,23a.8.8,0,1,0,.8-.8A.857.857,0,0,0,32.9,23Z" data-name="Path 3349" fill="#b8b8b8" fill-rule="evenodd" id="Path_3349" transform="translate(254.572 424.893)"></path><g _ngcontent-c21="" class="ng-tns-c21-6" data-name="Group 1973" id="Group_1973" transform="translate(274.781 435)"><line _ngcontent-c21="" class="ng-tns-c21-6" data-name="Line 249" fill="none" id="Line_249" stroke="#b8b8b8" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.613" stroke-width="1.5" y1="1.728"></line><line _ngcontent-c21="" class="ng-tns-c21-6" data-name="Line 250" fill="none" id="Line_250" stroke="#b8b8b8" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.613" stroke-width="1.5" transform="translate(7.708)" y1="1.728"></line></g><path _ngcontent-c21="" class="ng-tns-c21-6" d="M5.1,14.8V26.229a1.4,1.4,0,0,0,1.4,1.4H23.04a1.4,1.4,0,0,0,1.4-1.4V22.641" data-name="Path 3350" fill="none" fill-rule="evenodd" id="Path_3350" stroke="#b8b8b8" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.613" stroke-width="1.5" transform="translate(263.9 427.376)"></path></g></svg>
                    </span>
                    <span class="detail-value">سال ساخت</span>

                </div>
                <div class="one-detail flex-row">
                    <span class="detail-icon flex-row">
                        <svg _ngcontent-c21="" style="width: 20px; height: 24px;" viewBox="0 0 23.224 18.948" xmlns="http://www.w3.org/2000/svg"><g _ngcontent-c21="" class="ng-tns-c21-6" data-name="Group 3245" id="Group_3245" transform="translate(-267.25 -470.802)"><path _ngcontent-c21="" class="ng-tns-c21-6" d="M55.6,351.424V344.6a.855.855,0,0,1,.828-.9H68.152m2.621,2.621v5.1" data-name="Path 3351" fill="none" id="Path_3351" stroke="#b8b8b8" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.613" stroke-width="1.5" transform="translate(215.573 127.852)"></path><path _ngcontent-c21="" class="ng-tns-c21-6" d="M72.238,363.736H70.859c0-.483,0-2.966-.759-3.034-.345,0-4.552-.069-8.414-.069s-7.034,0-7.448.069c-.759.069-.759,2.552-.759,2.965H52.1v-6.828c0-.69,0-1.1.345-1.31,4.552-3.1,14.207-3.172,18.966-.207a1.59,1.59,0,0,1,.759,1.379v7.034Z" data-name="Path 3352" fill="none" fill-rule="evenodd" id="Path_3352" stroke="#b8b8b8" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.613" stroke-width="1.5" transform="translate(216.659 124.919)"></path><line _ngcontent-c21="" class="ng-tns-c21-6" data-name="Line 271" fill="none" id="Line_271" stroke="#b8b8b8" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.613" stroke-width="1.5" transform="translate(286.621 489)" x1="3.103"></line><line _ngcontent-c21="" class="ng-tns-c21-6" data-name="Line 272" fill="none" id="Line_272" stroke="#b8b8b8" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.613" stroke-width="1.5" transform="translate(268 489)" x1="3.172"></line><path _ngcontent-c21="" class="ng-tns-c21-6" d="M59.7,352.055V350.4c0-1.1,1.172-2,2.621-2H66.8c1.448,0,2.621.9,2.621,2v1.655" data-name="Path 3353" fill="none" fill-rule="evenodd" id="Path_3353" stroke="#b8b8b8" stroke-miterlimit="2.613" stroke-width="1.5" transform="translate(214.3 126.393)"></path><path _ngcontent-c21="" class="ng-tns-c21-6" d="M78.017,343.659a.759.759,0,1,0-.759.759A.765.765,0,0,0,78.017,343.659Z" data-name="Path 3354" fill="#b8b8b8" fill-rule="evenodd" id="Path_3354" transform="translate(209.086 128.1)"></path></g></svg>
                    </span>
                    <span class="detail-value">{{houseData.bedrooms}} خوابه</span>
                </div>
                <div class="one-detail flex-row">
                    <span class="detail-icon flex-row">
                        <svg _ngcontent-c21="" style="width: 20px; height: 24px;" viewBox="0 0 22.5 22.317" xmlns="http://www.w3.org/2000/svg"><g _ngcontent-c21="" class="ng-tns-c21-6" data-name="Group 3246" id="Group_3246" transform="translate(-268.25 -503.25)"><path _ngcontent-c21="" class="ng-tns-c21-6" d="M25.517,10.108V8.247A1.518,1.518,0,0,0,23.954,6.8H9.363A1.516,1.516,0,0,0,7.8,8.247v14.54a1.518,1.518,0,0,0,1.563,1.447H23.954a1.516,1.516,0,0,0,1.563-1.447V16.708" data-name="Path 3343" fill="none" id="Path_3343" stroke="#b8b8b8" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.613" stroke-width="1.5" transform="translate(262.899 498.567)"></path><ellipse _ngcontent-c21="" class="ng-tns-c21-6" cx="0.864" cy="0.864" data-name="Ellipse 86" fill="#b8b8b8" id="Ellipse_86" rx="0.864" ry="0.864" transform="translate(287.625 511.845)"></ellipse><path _ngcontent-c21="" class="ng-tns-c21-6" d="M8.015,8.931a2.015,2.015,0,0,0,0-4.031A2.06,2.06,0,0,0,6,6.915,2.012,2.012,0,0,0,8.015,8.931Z" data-name="Path 3344" fill="#fff" fill-rule="evenodd" id="Path_3344" stroke="#b8b8b8" stroke-miterlimit="2.613" stroke-width="1.5" transform="translate(263 499.1)"></path><path _ngcontent-c21="" class="ng-tns-c21-6" d="M8.015,33.631A2.015,2.015,0,1,0,6,31.615,2.06,2.06,0,0,0,8.015,33.631Z" data-name="Path 3345" fill="#fff" fill-rule="evenodd" id="Path_3345" stroke="#b8b8b8" stroke-miterlimit="2.613" stroke-width="1.5" transform="translate(263 491.186)"></path><path _ngcontent-c21="" class="ng-tns-c21-6" d="M30.215,33.631A2.015,2.015,0,1,0,28.2,31.615,2.06,2.06,0,0,0,30.215,33.631Z" data-name="Path 3346" fill="#fff" fill-rule="evenodd" id="Path_3346" stroke="#b8b8b8" stroke-miterlimit="2.613" stroke-width="1.5" transform="translate(257.769 491.186)"></path></g></svg>
                    </span>
                    <span class="detail-value">{{houseData.area}} متر</span>
                </div>
                
            </div>
        </div>
        <div class="contact-container flex-col">
            <div class="contact-logo-container flex-col">
                <a href="" class="contact-logo" v-bind:style="{ 'background-image': 'url(' + houseData.estate.logo + ')' }"></a>
                <span style="text-align: center;">{{houseData.estate}}</span>
            </div>
            <span class="agent-name">
                آقای صمدی
            </span>
            <a class="agent-phone flex-row" v-on:click="doChange()">{{phoneNumber}}</a>
        </div>
    </div>
</template>


<script>

// import round from 'vue-round-filter';

export default {
    name: "HouseSlidebar",
    props: ["houseData"],
    filters: {
        round: function (value, decimals) {
             if(!value) {
                value = 0;
            }

            if(!decimals) {
                decimals = 0;
            }

            value = Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
            return value;
        }
    },
    data() {
        return {
            phoneNumber: 0
        }
    },
    methods: {
        replaceAt(st, index, replacement) {
            return st.substr(0, index) + replacement + st.substr(index + replacement.length);
        },
        doChange() {
            this.phoneNumber = this.houseData.phone;
        },
        setDate(created_at) {
            let now = new Date()
            let pass = new Date(created_at)
            const diffTime = Math.abs(now - pass);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
            console.log(diffDays);
            return diffDays
        }
    },
    watch: {
        houseData() {
            console.log(this.houseData.phone);
            this.phoneNumber = this.houseData.phone;      
            this.phoneNumber = this.replaceAt(this.phoneNumber, 4, "****")
        },
    }
    // created() {
    //         this.phoneNumber = this.houseData.estate.phone;
    // }
}

</script>


<style scoped>
    /* * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    } */

    .slidebar-container {
        flex: 1 1 0;
        /* width: 33%; */
        margin-left: 16px;
        position: -webkit-sticky;
        position: sticky;
        align-self: flex-start;
        top: 98px;
    }

    .info-container {
        background-color: #fff;
        box-shadow: 0 3px 6px rgba(0,0,0,.16);
        padding: 15px 24px;
        border-radius: 10px;
        margin-bottom: 12px;
        font-size: 12px;
        color: #373435;
    }

    .info-header {
        border-bottom: 1px solid #eee;
        padding-bottom: 12px;
        margin-bottom: 10px;
        align-items: center;
        justify-content: space-between;
    }

    .home-code {
        font-size: 12px;
        color: #373435;
    }

    .home-time {
        color: #517cfb
    }

    .info-title {
        color: #373435;
        font-size: 16px;
        line-height: 25px;
        margin-bottom: 16px;
        /* position: relative; */
        /* left: 3rem; */
    }

    .info-area-price {
        border-bottom: 1px solid #eee;
        color: #173a63;
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 20px;
        padding-bottom: 15px;
    }

    .info-inner-price-area {
        color: #173a63;
        font-size: 16px;
        font-weight: 600;
        padding-bottom: 3px;
    }

    .price-area-title {
        color: rgba(85,85,85,.7);
        font-size: 16px;
        font-weight: 500;
        
    }

    .price-area-value {
        color: #173a63;
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 20px;
    }


    .info-details {
        background-color: #fff;
        /* padding: 15px 24px; */
        margin-bottom: 12px;
        font-size: 12px;
        color: #373435;
    }

    .one-detail {
        margin-bottom: 16px;
        align-items: center;
    }

    .detail-icon {
        margin-left: 16px;
    }

    .detail-value {
        font-size: 12px;
        color: #373435;
    }

    .contact-container {
        box-shadow: 0 3px 6px rgba(0,0,0,.16);
        border-radius: 15px;
        padding-bottom: 24px;
        text-align: center;
    }

    .contact-logo-container {
        background-color: #f9f7f8;
        border-radius: 15px 15px 0 0;
        padding: 16px;
        margin-bottom: 12px;
        align-items: center
    }

    .contact-logo {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        margin-bottom: 8px;
        box-shadow: 0 0 6px rgba(0,0,0,.16);
        background-size: cover;
        background-position: center;
    }

    .agent-name {
        align-self: center;
        font-size: 12px;
        margin-bottom: 8px;
    }

    .agent-phone {
        direction: ltr;
        position: relative;
        width: 155px;
        height: 36px;
        align-self: center;
        border: none;
        border-radius: 10px;
        background-color: #b30753;
        color: #fff;
        font-size: 14px;
        box-shadow: 0 3px 6px rgba(0,0,0,.16);
        cursor: pointer;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
</style>