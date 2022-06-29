<template>
  <div v-if="step == 0">
    <PostVue :postData="postData[i]" v-for="(item, i) in postData" :key="i"></PostVue>
  </div>

  <!-- 필터선택페이지 -->
  <div v-if="step == 1">
    <div :class="selectFilter" class="upload-image" :style="`background-image:url(${imageURL})`"></div>
    <div class="filters">
      <FilterBox :filter="filter" :imageURL="imageURL"
       v-for="(filter, index) in filters" :key="index" >
       {{filter}}
      </FilterBox>
    </div>
  </div>

  <!-- 글작성페이지 -->
  <div v-if="step == 2">
    <div :class="selectFilter" class="upload-image" :style="`background-image:url(${imageURL})`"></div>
    <div class="write">
      <textarea class="write-box" v-on:input="$emit('write',$event.target.value)">write!</textarea>
    </div>
  </div>

  <div v-if="step == 3">
    <MypageVue/>
  </div>
</template>

<script>
import PostVue from "./PostVue.vue";
import FilterBox from "./FilterBox.vue"
import MypageVue from "./MypageVue.vue"
export default {
  name: "ContainerVue",
  data(){
    return {
      filters : [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
"inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
"reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
    }
  },
  components: {
    PostVue,
    FilterBox,
    MypageVue,
  },
  props: {
    postData: Array,
    step: Number,
    imageURL : String,
    selectFilter : String,
  },
  
};

</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>