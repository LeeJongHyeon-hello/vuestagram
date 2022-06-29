<template>
  <div>
    <Post :postData="postData[i]" v-for="(item,i) in postData" :key="i"></Post>
  </div>
</template>

<script>
import Post from './Post.vue'

export default {
    name : 'Container',
    components : {
      Post,
    },
    props :{
    postData : Array,
  },
};
</script>

<style>
</style>