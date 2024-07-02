<template>
  <div class="content">
    <div class="chart" @mouseenter="enterMove" @mouseleave="leaveMove">
      <img :src="val.name" alt="" v-for="val in image" :key="val.id" />
    </div>
    <div class="list">
      <button
        v-for="(val, index) in image"
        :key="val.id"
        @click="listBTN(index)"
      >
        {{ index + 1 }}
      </button>
    </div>
    <div class="btn_prev" @click="nextBanner">
      <i class="iconfont">&#xe65f;</i>
    </div>
    <div class="btn_next" @click="prevBanner">
      <i class="iconfont">&#xe8b5;</i>
    </div>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "juming",
  data() {
    return {
      image: [
        { id: nanoid(), name: require("../assets/1.webp") },
        { id: nanoid(), name: require("../assets/2.webp") },
        { id: nanoid(), name: require("../assets/3.png") },
        { id: nanoid(), name: require("../assets/4.webp") },
        { id: nanoid(), name: require("../assets/5.webp") },
        { id: nanoid(), name: require("../assets/6.webp") },
      ],
      image1: [
        { id: nanoid(), name: require("../assets/1.webp") },
        { id: nanoid(), name: require("../assets/2.webp") },
        { id: nanoid(), name: require("../assets/3.png") },
        { id: nanoid(), name: require("../assets/4.webp") },
        { id: nanoid(), name: require("../assets/5.webp") },
        { id: nanoid(), name: require("../assets/6.webp") },
      ],
      image2: [],
      image3: [],
      arrIndex:0,
      timer:null
    };
  },
  methods: {
    changeLink(subscript){
      this.image2 = this.image1.filter((val, index) => {
        if (index >= subscript) {
          return val;
        }
      });
      this.image3 = this.image1.filter((val, index) => {
        if (index < subscript) {
          return val;
        }
      });
      this.image = [...this.image2, ...this.image3];
    },
    listBTN(subscript) {
      this.changeLink(subscript)
      this.arrIndex=subscript
    },
    prevBanner(){
      if(this.arrIndex<=0){
        this.arrIndex=5
      }else{
        this.arrIndex--
      }
      this.changeLink(this.arrIndex)
    },
    nextBanner(){
      if(this.arrIndex>=5){
        this.arrIndex=0
      }else{
        this.arrIndex++
      }
      this.changeLink(this.arrIndex)
    },
    enterMove(){
      clearInterval(this.timer)    
    },
    leaveMove(){
      this.timer=setInterval(() => {
        this.nextBanner()
      }, 3000);
    }
  },
  mounted(){
    this.timer=setInterval(() => {
      this.nextBanner()
    }, 3000);
  }
};
</script>

<style lang="less" scoped>
.content {
  position: relative;
  .chart {
    width: 300px;
    height: 300px;
    display: flex;
    overflow: hidden;
    margin: 0 auto;
    img {
      width: 300px;
      height: 300px;
      background-size: 100%;
      flex: none;
    }
  }
  .list {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    button {
      width: 40px;
      height: 40px;
      margin-left: 5px;
    }
  }
  .btn_prev {
    position: absolute;
    right: calc(50% - 150px);
    top: 140px;
    color: #F5F5F5;
    // left: calc(50% - 150px);
    &:hover{
      background: #A1BFDB;
    }
  }
  .btn_next {
    position: absolute;
    left: calc(50% - 150px);
    top: 140px;
    color: #F5F5F5;
    // left: calc(50% - 150px);
    &:hover{
      background: #A1BFDB;
    }
  }
}
</style>