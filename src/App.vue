<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li>Next</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container :postData="postData"/>
  <button v-on:click="more">더보기</button>


  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
 </div>
</template>

<script>
import Container from './components/Container.vue'
import postData from './assets/PostData.js'
import axios from 'axios'

export default {
  name: 'App',
  data(){
    return {
      postData : postData,
      moreNum : 0,
    }
  },
  components: {
    Container,
  },
  methods:{
    more(){ 
      axios.get(`https://codingapple1.github.io/vue/more${this.moreNum}.json`)
      .then( result =>{
        this.postData.push(result.data);
        this.moreNum++;
      })
      .catch(err => {
        console.log(errrrrrrrrrrrrrrrrr)
      })
    }
  },
}
</script>

<style>
@import './style.css';
</style>
