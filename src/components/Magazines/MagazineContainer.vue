<template>
    <section class="container-magazine">
        <h2 class="magazine-header"> مجله کلید بخوانید</h2>
        <p class="magazine-parag">کارشناسان کیلید، در مجله "کیلید" شما را با مهم ترین مسائل بازار مسکن آشنا می کنند. این مجله، مبتنی بر بررسی های علمی و آماری، اخبار و تحلیل های آینده بازار مسکن را در اختیارتان قرار می دهد.</p>
        <div class="magazine-imgs-container">
            <div class="blog-wrapper" v-bind:key="item.id" v-for="item in items">
                <MagazineItem v-bind:item="item"/>
            </div>
        </div>
        <a href="#but" class="magazin-button flex-row">مطالب بیشتر</a>
    </section>
</template>


<script>
import MagazineItem from './MagazineItem.vue'
import axios from 'axios'

export default {
    name: "MagazineContainer",
    components: {
        MagazineItem
    },
    data() {
        return {
            items: []
        }
    },
    created() {
        // console.log('asdfasf');
        
        axios.get('http://hallows.ir/mags')
        .then(res => this.items = res.data.items)
        .catch(e => console.log(e));
    }    
}
</script>


<style scoped>
    .container-magazine {
        display: flex;
        flex-direction: column;
        position: relative;
        align-items: center;
        top: 13rem;
    }

    .magazine-header {
        margin-bottom: 20px;
        font-weight: 500;
        font-size: 22px;
        text-align: center;
        line-height: normal;
        color: #b30753;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
        width: 1180px;
    }

    .magazine-parag {
        font-size: 15px;
        text-align: center;
        font-size: 18px;
        margin-bottom: 20px;
        line-height: 32px;
        color: #939598;
        width: 50%;
        min-width: 50%;
    }

    .magazine-imgs-container {
        margin: 20px 0;
        padding-right: 15px;
        padding-left: 15px;
        flex-wrap: wrap;
        justify-content: center;
        display: flex;
        flex-direction: row;
        width: 1180px;
        min-width: 85%
    }

    .blog-wrapper {
        padding: 0 20px;
        display: block;
    }


    .magazin-button {
        background-color: #fff;
        color: #b30753;
        transition: all .3s ease;
        height: 45px;
        width: 135px;
        font-size: 15px;
        border-radius: 5px;
        box-shadow: 0 3px 6px rgba(0,0,0,.16);
        align-items: center;
        justify-content: center;
    }

    .magazin-button:hover {
        color: white;
        background: #b30753;
    }

</style>