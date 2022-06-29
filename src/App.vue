<template>
  <div class="header">
    <ul class="header-button-left">
      <li v-on:click="step=0">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step==1" v-on:click="step++">Next</li>
      <li v-if="step==2" v-on:click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <!-- <p>{{$store.state.more}}</p>
  <button v-on:click="$store.dispatch('getData')">더보기 버튼</button> -->

  <ContainerVue @write="writePost = $event" :postData="postData" :imageURL="imageURL" :step="step" :selectFilter="selectFilter"/>
  <!-- <button v-on:click="more">더보기</button> -->

  <div class="footer">
    <ul class="footer-button-plus">
      <input v-on:change="upload" accept="image/*" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
 </div>



</template>

<script>
import ContainerVue from './components/ContainerVue.vue'
import postData from './assets/PostData.js'
import axios from 'axios'
import { mapMutations, mapState } from 'vuex'


export default {
  name: 'App',
  data(){
    return {
      postData : postData,
      moreNum : 0,
      step : 3,
      imageURL : '',
      writePost : '',
      selectFilter : '',
    }
  },
  components: {
    ContainerVue,
  },
  mounted(){
      this.emitter.on('selectFilter', e =>{
        this.selectFilter = e;
        console.log(this.selectFilter);
      });
    },

  methods:{
    more(){ 
      axios.get(`https://codingapple1.github.io/vue/more${this.moreNum}.json`)
      .then( result =>{
        this.postData.push(result.data);
        this.moreNum++;
      })
      .catch(err => {
        console.log(err)
      })
    },
    upload(e){
      let file = e.target.files;
      this.imageURL = URL.createObjectURL(file[0]);
      console.log(this.imageURL)
      this.step = 1;
    },
    publish(){
      var myPost = {name: "Kim Hyun",
      userImage: "https://placeimg.com/100/100/arch",
      postImage: this.imageURL,
      likes: 36,
      date: "May 15",
      liked: false,
      content: this.writePost,
      filter: this.selectFilter,
      };
      console.log('zzzzzzzz '+ this.selectFilter);
      this.postData.unshift(myPost);
      this.step=0;
    },
    ...mapMutations(['setMore','feelSend'])
  },
  computed:{
    getName(){
      return this.$store.state.name;
    },
    ...mapState(['name','likes']),
    ...mapState({ 내이름 :'name',}),
  },
}
</script>

<style>
@import './style.css';
</style>
