<template>
    <div style="padding: 50px 40px 0;">
        <div class="login-text-reglog flex-row">
            <a @click="$emit('change-pres', 'login')" class="login-deactive-but">ورود</a>
            <a class="login-deactive-but login-register-but login-active-but">ثبت نام</a>
        </div>
        <form class="login-form flex-col" v-on:submit.prevent="registerHandler">
            <div class="login-input-container flex-col">
                <input v-model="username" type="text" class="login-text-input" placeholder="نام کاربری" required>
            </div>
            <!-- <div class="login-input-container flex-col">
                <input class="login-text-input" placeholder="نام خانوادگی" required>
            </div> -->
            <div class="login-input-container flex-col">
                <input v-model="phone" class="login-text-input" placeholder="شماره همراه یا ایمیل" required>
            </div>
            <div class="login-input-container flex-col">
                <input v-model="password" class="login-text-input" formcontrolname="password" placeholder="رمزعبور" type="password" required>
            </div>
            <div class="login-last-container flex-row">
                <div class="flex-row login-last-container-box">
                    <input type="checkbox" name="recieve-magazine" class="login-recieve-checkbox">
                    <span style="font-size: 11px;">دریافت خبرنامه</span>
                </div>
                <span class="login-forget flex-row">
                        ثبت به معنی قبول
                    <a href="#forger" style="border-bottom: 1px solid #517cfb;" class="login-forget-but"> قوانین و مقررات </a>
                    &nbsp; است 
                </span>
            </div>
            <button type="submit" class="login-submit">ارسال</button>
        </form>
    </div>
</template>



<script>
import axios from 'axios'

export default {
    name: "registerContainer",
    methods: {
        async registerHandler() {
            try {
                let res = await axios.post('http://localhost:3000/register', {
                    data: {
                        username: this.username,
                        password: this.password,
                        phone: this.phone
                    }
                })
                let token = res.headers.myauth;
                this.$store.commit('setToken', token);
                // console.log(token);
                // console.log(this.$store.state.token);
                this.$router.push({name: 'homepage'})
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>


<style scoped>
    .login-text-reglog {
        padding: 0 25px;
    }

    .login-deactive-but {
        font-size: 16px;
        color: rgba(170,170,170,.7);
        border-right: 1px solid rgba(170,170,170,.7);
        padding-right: 7px;
        margin-left: 15px;
        cursor: pointer;
    }

    .login-active-but {
        color: #b30753;
        border-color: #b30753;
        font-weight: 600;
    }

    .login-register-but {
        margin-left: 0;
    }


    .login-form {
        padding: 0 25px;
        margin-top: 15px;
        margin-bottom: 20px;
    }

    .login-input-container {
        margin-bottom: 7px;
    }

    .login-text-input{
        height: 35px;
        border: 1px solid rgba(170,170,170,.7);
        border-radius: 5px;
        background-color: #fff;
        padding: 0 10px;
        color: rgba(28,28,28,.4);
    }

    .login-forget {
        color: rgba(28,28,28,.8);
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 11px;
        align-items: center;
        justify-content: center;
        font-size: 12px;
    }

    .login-forget-but {
        color: #517cfb;
        cursor: pointer;
        right: 3px;
        left: 3px;
        position: relative;
    }

    .login-submit {
        width: 120px;
        height: 35px;
        border: none;
        border-radius: 5px;
        background-color: #b30753;
        box-shadow: 0 3px 6px rgba(0,0,0,.16);
        align-self: center;
        color: #fff;
        cursor: pointer;
        font-weight: 600;
    }

    .login-last-container {
        color: rgba(28,28,28,.6);
        margin-bottom: 10px;
        justify-content: space-between;
    }

    .login-last-container-box {
        font-size: 11px;
        align-items: center;
    }

    /* .login-recieve-checkbox {
        font-size: 11px;
    } */

    .login-recieve-checkbox {
        margin: 2px;
        width: 20px;
        height: 20px;
        background: 0 0;
        border: 1px solid rgba(170,170,170,.7);
        border-radius: 4px;
    }
</style>