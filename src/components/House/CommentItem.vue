<template>
  <div class="comment-item">
      {{commentItem.statement}}
  </div>
</template>


<script>
// import CommentItem from './CommentItem.vue'
// import axios from 'axios'

export default {
    name: 'CommentContainer',
    props: ['commentItem'],
    // data() {
    //     return {
    //         c: []
    //     }
    // },
}
</script>


<style scoped>
    
</style>