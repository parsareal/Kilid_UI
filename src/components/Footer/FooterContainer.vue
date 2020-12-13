<template>
    <footer class="final-footer">
        <div class="footer-container flex-col">
            <div class="footer-top-container flex-row">
                <a href="" class="footer-top-icon flex-row"> <img src="../../assets/Pics/telegram.png" alt=""></a>
                <a href="" class="footer-top-icon flex-row"> <img src="../../assets/Pics/instagram.png" alt=""></a>
                <a href="" class="footer-top-icon flex-row"> <img src="../../assets/Pics/twitter.png" alt=""></a>
                <a href="" class="footer-top-icon flex-row"> <img src="../../assets/Pics/linkedin.png" alt=""></a>

            </div>
            <ul class="footer-toolbar flex-row">
                <a href="" class="footer-toolbar-link">خرید</a>
                <a href="" class="footer-toolbar-link">رهن و اجاره</a>
                <a href="" class="footer-toolbar-link">جستجو روی نقشه</a>
                <a href="" class="footer-toolbar-link">قیمت خانه شما</a>
                <a href="" class="footer-toolbar-link">اطلاعات بازار مسکن</a>
                <a href="" class="footer-toolbar-link">ثبت رایگان آگهی</a>
                <a href="" class="footer-toolbar-link">آژانس های املاک</a>
                <a href="" class="footer-toolbar-link">سامانه مشاورین</a>
            </ul>
            <div class="footer-certificate flex-row">
                <img src="../../assets/Pics/logo2.png" alt="" class="footer-certificate-img">
                <img src="https://www.kilidstatic.com/icons/eanjoman.jpg" alt="" class="footer-certificate-img">
                <img src="../../assets/Pics/thirdCert.png" alt="" class="footer-certificate-img">
                <img src="https://www.kilidstatic.com/icons/ecunion-logo.png" alt="" class="footer-certificate-img">
            </div>
            <ul class="footer-toolbar2 flex-row">
                <a href="" class="footer-toolbar2-link">درباره کیلید</a>
                <a href="" class="footer-toolbar2-link">تماس با ما</a>
                <a href="" class="footer-toolbar2-link">بلاگ</a>
                <a href="" class="footer-toolbar2-link">اپلیکیشن موبایل</a>
                <a href="" class="footer-toolbar2-link">نقشه سایت</a>
            </ul>
            
            <a href="" class="footer-kilid-icon flex-row">
                <img src="../../assets/Pics/logo3.png" alt="">
            </a>

            <div class="footer-address flex-col">
                <p>تهران، خیابان وزرا، کوچه نهم، پلاک 26</p>
                <a href="">021-75071000</a>
            </div>

            <div class="footer-agencies-container flex-row">
                <div class="flex-row" style="margin-left: 100px;">
                    <span class="footer-span">خرید</span>
                    <div class="footer-agencies flex-col">
                        <a href="" class="footer-agency">تهرانپارس</a>
                        <a href="" class="footer-agency">پاسداران</a>
                        <a href="" class="footer-agency">پونک</a>
                        <a href="" class="footer-agency">شهرک غرب</a>
                        <a href="" class="footer-agency">باغ فردوس</a>
                    </div>
                    <div class="footer-agencies flex-col">
                        <a href="" class="footer-agency">ستارخان</a>
                        <a href="" class="footer-agency">سعادت آباد</a>
                        <a href="" class="footer-agency">ونک</a>
                        <a href="" class="footer-agency">نواب</a>
                        <a href="" class="footer-agency">مرزداران</a>
                    </div>
                </div>
                <div class="flex-row">
                    <span class="footer-span">اجاره</span>
                    <div class="footer-agencies flex-col">
                        <a href="" class="footer-agency">تهرانپارس</a>
                        <a href="" class="footer-agency">پاسداران</a>
                        <a href="" class="footer-agency">پونک</a>
                        <a href="" class="footer-agency">شهرک غرب</a>
                        <a href="" class="footer-agency">باغ فردوس</a>
                    </div>
                    <div class="footer-agencies flex-col">
                        <a href="" class="footer-agency">ستارخان</a>
                        <a href="" class="footer-agency">سعادت آباد</a>
                        <a href="" class="footer-agency">ونک</a>
                        <a href="" class="footer-agency">نواب</a>
                        <a href="" class="footer-agency">مرزداران</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-last flex-row">
            <p class="footer-last-parag">کلیه حقوق این سایت متعلق به شرکت کلان داده شهر فناوران می‌باشد</p>
            <a href="" class="footer-last-a">حریم شخصی</a>
            <a href="" class="footer-last-a">شرایط استفاده</a>
        </div>
    </footer>
</template>


<script>
export default {
    name: "FooterContainer"    
}
</script>


<style scoped>
    
    .final-footer {
        padding-bottom: 0;
        margin-bottom: 0;
        padding: 0;
        margin: 0 auto;
        color: #838383;
        position: relative;
        top: 17rem;
    }

    .footer-container {
        background-color: #2c2c2c;
    }

    .footer-top-container {
        position: relative;
        top: -30px;
        margin-bottom: 0;
        align-items: center;
        justify-content: center;
    }


    .footer-top-icon {
        width: 60px;
        height: 60px;
        background-color: #464545;
        border-radius: 50%;
        margin-left: 15px;
        align-items: center;
        justify-content: center;
    }

    .footer-toolbar {
        color: #f9fafc;
        font-size: 16px;
        margin-bottom: 20px;
        flex-wrap: wrap;
        justify-content: center;
    }

    .footer-toolbar-link {
        cursor: pointer;
        margin-left: 30px;
    }

    .footer-toolbar-link:hover {
        color: gray;
        transition: all .3s ease;
    }

    .footer-certificate {
        margin-bottom: 20px;
        justify-content: center;
    }

    .footer-certificate-img {
        width: 75px;
        height: 75px;
        background-color: #fff;
        border: 1px solid #707070;
        border-radius: 10px;
        margin-left: 10px;
        overflow: hidden;
        cursor: pointer;
    }

    .footer-toolbar2 {
        color: #aaa;
        font-size: 14px;
        margin-bottom: 20px;
        flex-wrap: wrap;
        justify-content: center;
    }

    .footer-toolbar2-link {
        margin-left: 20px;
        cursor: pointer;
    }

    .footer-toolbar2-link:hover {
        color: white;
        transition: all .3s ease;
    }

    .footer-kilid-icon {
        margin-bottom: 20px;
        justify-content: center;
    }

    .footer-address {
        color: #aaa;
        font-size: 12px;
        margin-bottom: 10px;
        align-items: center;
    }

    .footer-agencies-container {
        background-color: #1e1e1e;
        padding: 23px 8px 15px;
        font-size: 11px;
        justify-content: center;
    }

    .footer-span {
        color: #aaa;
        margin-left: 16px;
    }

    .footer-agencies {
        width: 5rem;
        flex-wrap: wrap;
    }

    .footer-agency {
        color: #fff;
        width: 100%;
        padding-left: 8px;
    }

    .footer-last {
        background-color: #131313;
        font-size: 11px;
        height: 30px;
        justify-content: center;
        align-items: center;
    }

    .footer-last-parag {
        color: #ccc;
        opacity: .4;
        margin-left: 20px;
    }

    .footer-last-a {
        color: #f1f1f1;
        margin-left: 20px;
    }


</style>