<template>
  <div class="comment-container flex-col">
      <div class="submit-container">
            <input class="textarea" v-model="comment" type="textarea">
            <button class="submit-but" v-on:click="submitComment">ثبت نظر</button>
      </div>
      <!-- <div>{{houseid}}</div> -->
      <h3 class="title">نظرات کاربران</h3>
      <div class="comments-container" v-bind:key="commentItem._id" v-for="commentItem in comments">
        <!-- <div class="comment-element" v-bind:key="commentItem._id" v-for="commentItem in comments">   -->
                <div class="comment-notice">کامنت:</div>
                <CommentItem v-bind:commentItem="commentItem"/>
        <!-- </div>             -->
      </div>
  </div>
</template>


<script>
import CommentItem from './CommentItem.vue'
import axios from 'axios'

export default {
    name: 'CommentContainer',
    props: ['houseid'],
    data() {
        return {
            comments: []
        }
    },
    components: {
        CommentItem
    },
    methods: {
        async submitComment () {
            try {
                console.log('houseId: ');
                console.log(this.houseid);
                let res = await axios.post('http://localhost:3000/comment', {
                    data: {
                        statement: this.comment,
                        houseid: this.houseid
                    }
                })
                console.log(res.data);
            } catch (error) {
                console.log(error);
                
            }
            console.log('comment submitted...');
        }
    },

    watch: {
        async houseid() {
            try {
                // console.log(this.houseid);
                console.log('houseId: ');
                console.log(this.houseid);
                let res = await axios.get('http://localhost:3000/getComments', {
                    headers: {
                        houseId: this.houseid
                    }
                })
                console.log(res);
                this.comments = res.data;
            } catch (error) {
                console.log(error);
            }
        },
    }
    // async created() {
        
    // }
}
</script>


<style scoped>

    .comment-container {
            position: relative;
            top: 3rem;
            text-align: center;
    }

    .submit-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .textarea {
        height: 10rem;
        align-items: center;
        width: 20rem;
        text-align: center;
    }

    .submit-but {
        width: 10%;
    }

    .comments-container {
        position: relative;
        text-align: center;
        display: flex;
        flex-direction: column;
        padding: 2rem
        /* top: 4rem; */
    }

    .comment-element {
        display: block;
        padding: 20px;
    }

    .title {
        text-align: center;
        padding-top: 5rem;
    }

    .comment-notice {
        padding: 1rem
    }

</style>