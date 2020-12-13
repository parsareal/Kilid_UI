<template>
    <section class="main_center container-section">
         <div class="search_center">
            <h1 class="main-header">کیلید سامانه هوشمند مسکن</h1>
            <div class="search-container">
                <div>
                    <!-- <input type="radio" name="gender" value="buy" class="main-section-button"> خرید<br>
                    <input type="radio" name="gender" value="rent" class="main-section-button"> رهن و اجاره<br>
                    <input type="radio" name="gender" value="price" class="main-section-button"> قیمت خانه شما؟<br>  -->
                    <!-- <a href="#" class="main-section-button">رهن و اجاره</a> -->                    
                    <div class="three-but-container">
                        <!-- <a href="#" class="main-section-button">خرید</a> -->
                    
                        <input type="radio" id="buy" name="3_but" checked>
                        <label for="buy" class="main-section-button"> خرید</label>
                    
                        <input type="radio" id="rent" name="3_but">
                        <label for="rent" class="main-section-button"> رهن و اجاره</label>
                    
                        <input type="radio" id="price" name="3_but">
                        <label for="price" class="main-section-button">قیمت خانه شما؟</label>
                    </div>
                </div>
                <div class="search-toolbar">
                    <div class="search-toolbar-container">
                        <div class="search-input-group">
                            <div class="search-city-select-container">
                                <div class="location-select-pointer">
                                    <svg class="location-select-pointer-icon">
                                        <path d="M12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm8.94,3A8.994,8.994,0,0,0,13,3.06V1H11V3.06A8.994,8.994,0,0,0,3.06,11H1v2H3.06A8.994,8.994,0,0,0,11,20.94V23h2V20.94A8.994,8.994,0,0,0,20.94,13H23V11H20.94ZM12,19a7,7,0,1,1,7-7A6.995,6.995,0,0,1,12,19Z" fill="#373435" transform="translate(-1 -1)"></path>
                                    </svg>
                                </div>
                                <input class="search-city-select" value="تهران" type="text">
                                <!-- <i class="fal fa-angle-down"></i>                                 -->
                            </div>
                            <div class="search-address-input-container">
                                <input v-model="enteredlocation" class="search-address-input" type="text" placeholder="نام محله، منطقه و یا ایستگاه مترو">
                            </div>
                        </div>

                        <!-- <router-link :to="{name: 'search', params: {location: this.enteredlocation}}" class="button search-button">
                            <img src="../../assets/Pics/search.png" alt="" style="position: relative; top: 10px;">                        
                        </router-link> -->
                        <button v-on:click="doSearch" class="button search-button">
                            <img src="../../assets/Pics/search.png" alt="" style="position: relative; top: 5px;">                        
                        </button>
                        <!-- <a href="./kilid_occasion.html" class="button search-button">
                            <img src="../../assets/Pics/search.png" alt="" style="position: relative; top: 10px;">
                        </a> -->
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
export default {
    name: "SearchContainer",
    methods: {
        doSearch () {
            this.$router.push({name: 'search', params: { location: this.enteredlocation }})
        }
    }
}
</script>


<style scoped>
    .main_center{
        position: relative;
        top: 4rem;
        overflow-y: hidden;
        overflow-x: hidden;
        position: relative;
        width: 100%;
        height: calc(100vh - 65px);
        background-size: cover !important;
        text-align: center;
        background: url(https://www.kilidstatic.com/kilid-portal-web/landing-images/home-page-landing-background-min.jpg) bottom no-repeat;
    }

    .main_header{
        color: #373435;
        font-size: 26px;
        margin-bottom: 20px;
        margin-top: 0;
        padding: 0 7px;
        z-index: 1;
        font-weight: 400;
        transition: all .3s ease;
    }

    .search_center{
        display: inline-block;
        position: relative;
        padding-right: 15px;
        padding-left: 15px;
        top: 8cm;
    }


    .search_container1 {
        position: relative;
    }

    .three-button {
        flex-direction: row;
        /* display: flex; */
    }

    .header-logo {
        height: 4rem;
    }

    body {
        margin: 0px
    }


    .three-but-container {
        display: inline-block;
        position: relative;
        left: 1rem;
    }

    .three-but-container input[type="radio"]{
        opacity: 0.01;
        z-index: 100;
    }

    .three-but-container input[type="radio"]:checked+label,
    .Checked+label {
        border: 1px solid rgba(249,250,252,.8);
        background-color: #b30753;
    }

    .main-section-button {
        display: inline-block;
        padding: 0.5rem 1.5rem;
        color: white;
        background: rgba(44,44,44,.6);
        text-decoration: none;
        border-radius: 1rem;
        border: 1px solid rgba(249,250,252,.8);
        width: 8rem;
        margin: 0px 0.25rem;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .main-section-button:focus {
        border: 1px solid rgba(249,250,252,.8);
        background-color: #b30753;
    }

    .main-section-button:hover {
        border: 1px solid rgba(249,250,252,.8);
        background-color:rgba(12, 12, 12, 0.63);
    }

    /* .buy-button {
        border-color: #b30753;
        background: #b30753;
    }

    .rent-button {
        border-color: rgba(44,44,44,.6);
        background: rgba(44,44,44,.6);
    }

    .rent-button:focus {
        border-color: #b30753;
        background: #b30753;
    } */

    .search-toolbar {
        margin-top: 1.25rem;
        border-radius: 4rem;
        background: linear-gradient(to bottom,rgba(28,28,28,.3) 0,#2c2c2c 130%);
        padding: 0.75rem

    }

    .main-header {
        font-size: 26px;
        font-weight: 100;
    }

    .button {
        text-decoration: none;
        display: inline-block;
    }

    .search-button {
        width: 7rem;
        height: 3rem;
        border-radius: 25px;
        background-color: #b30753;
        color: white;
        position: relative;
        margin-right: 0.75rem;
        cursor: pointer;
    }

    .search_button:link.Kachel {
        display: block;
        text-align: center;
    }

    .search-input-group {
        display: flex ;
        height: 3rem;
        border-radius: 3rem;
        flex: 1;
        background: white;
    }

    .search-city-select {
        width: 6rem;
        height: 100%;
        box-sizing: border-box;
        border: 0px;
        color: #b30753;
        outline-width: 0px;
        padding-right: 0.75rem;
        font-size: 16px;
    }

    .search-address-input {
        height: 100%;
        box-sizing: border-box;
        padding: 1rem;
        border: 0px;
        outline-width: 0px;
        width: 15rem;
    }

    .search-toolbar-container {
        display: flex;
        flex-direction: row;
    }

    .search-address-input-container {
        
    }

    .search-city-select-container {
        position: relative;
        display: flex;
        padding: 0px 1rem;
        margin: 0.25rem 0px;
        border-left: 2px solid rgba(94,94,94,.4);
    }

    .location-select-pointer {
        display: flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
    }

    .location-select-pointer-icon {
        width: 22px;
        height: 22px;
    }
</style>