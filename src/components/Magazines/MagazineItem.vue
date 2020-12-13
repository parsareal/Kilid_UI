<template>
    <a href="#some" class="home-block flex-col">
        <img :src="item.image" alt="" class="home-img img-struct">
        <div class="home-cap">{{item.title}}</div>
    </a>
</template>


<script>
export default {
    name: "MagazineItem",
    props: ["item"]
}
</script>


<style scoped>
    .home-block {
        font-size: 12px;
        border-radius: 5px;
        overflow: hidden;
        height: 330px;
        width: 255px;
        margin-bottom: 20px;
        cursor: pointer;
        box-shadow: 0 1px 8px 0 rgba(209,211,213,.77);
        background-color: #fff;
        transition: all .5s ease;
        min-width: 100%;
    }

    .img-struct {
        height: 100%;
        width: 100%;
        -o-object-fit: cover;
        object-fit: cover;
    }

    .home-img {
        flex: 1;
        overflow: hidden;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
    }

    .home-cap {
        margin: 15px 10px;
        display: flex;
        flex-direction: column;
        color: #363535;
        width: 100%;
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>