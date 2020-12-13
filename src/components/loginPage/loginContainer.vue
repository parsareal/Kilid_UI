<template>
    <div style="padding: 50px 40px 0;">
        <div class="login-text-reglog flex-row">
            <a class="login-active-but login-deactive-but">ورود</a>
            <a @click="$emit('change-pres', 'register')" class="login-register-but login-deactive-but">ثبت نام</a>
        </div>
        <form class="login-form flex-col" v-on:submit.prevent="loginHandler">
            <div class="login-input-container flex-col">
                <input v-model="username" type="text" class="login-text-input" placeholder="شماره همراه یا ایمیل">
            </div>
            <div class="login-input-container flex-col">
                <input v-model="password" class="login-text-input" formcontrolname="password" placeholder="رمزعبور" type="password">
            </div>
            <span class="login-forget flex-row">
                    رمز خود را
                <a href="#forger" class="login-forget-but">فراموش کرده اید؟ </a>
            </span>
            <button type="submit" class="login-submit">ارسال</button>
        </form>
    </div>
</template>


<script>
import axios from 'axios'

export default {
    name: "loginContainer",
    methods: {
        async loginHandler() {
            console.log(this.username);
            try {
                let res = await axios.post('http://localhost:3000/login', {
                    data: {
                        username: this.username,
                        password: this.password
                    }
                })
                let token = res.headers.myauth;
                this.$store.commit('setToken', token);
                if (res.data == "admin") {
                    this.$store.commit('setAdmin');
                }
                this.$router.push({name: 'homepage'})
                // console.log();
                // console.log(this.$store.state.token);
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