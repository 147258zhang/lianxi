<template>
  <div class="content">
    <!-- banner -->
    <div
      class="ul"
      ref="ul"
      @click="moveR"
      style="left: 0px"
      @mousemove="stopAutoPlay"
      @mouseleave="stateAutoPlay"
    >
      <div
        class="card"
        v-for="value in image"
        :key="value.id"
        ref="li"
      >
        <img :src="value.first" alt="" class="cover1" />
        <img :src="value.second" alt="" class="title1" />
        <img :src="value.third" alt="" class="hero1" />
      </div>
    </div>
    <!-- 上一张，下一张 -->
    <div class="btn_prev_left" @click="prevBanner">
      <i class="iconfont">&#xe660;</i>
    </div>
    <div class="btn_next_right" @click="nextBanner">
      <i class="iconfont">&#xe65f;</i>
    </div>
    <!-- 指示器 -->
    <div class="button">
      <button
        v-for="(value, index) in image"
        :key="index"
        ref="btn"
        @click="changeBanner(index)"
      >
        {{ index + 1 }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      // 图片数据
      image: [
        {
          id: 1,
          first: require("../assets/2.jpg"),
          second: require("../assets/222.png"),
          third: require("../assets/22.png"),
        },
        {
          id: 2,
          first: require("../assets/1.jpg"),
          second: require("../assets/111.png"),
          third: require("../assets/11.png"),
        },
        {
          id: 3,
          first: require("../assets/2.jpg"),
          second: require("../assets/222.png"),
          third: require("../assets/22.png"),
        },
        {
          id: 4,
          first: require("../assets/1.jpg"),
          second: require("../assets/111.png"),
          third: require("../assets/11.png"),
        },
        {
          id: 5,
          first: require("../assets/2.jpg"),
          second: require("../assets/222.png"),
          third: require("../assets/22.png"),
        },
      ],
      timer: null,
      arrIndex: 0,
      arrClass: [],
    };
  },
  methods: {
    // 停止
    stopAutoPlay(index) {
      if (this.timer) {
        clearInterval(this.timer);
      }
    },
    // 开始
    stateAutoPlay() {
      this.timer = setInterval(() => {
        this.moving(); // 默认向左整体移动ul  即将当前li缩小，下一个li放大
      }, 2400);
    },
    // 移动
    moving() {
      if (this.arrIndex < 5) {
        this.moveR();
        this.arrIndex++
      } else {
        //一个循环之后恢复初始化，即只有下标为 1 的li处于放大状态
        this.arrIndex = 0;
        this.adjust(this.arrIndex, 4, 0);
      }
    },
    // 右移
    moveR() {
      let index = this.arrIndex;
      let element = this.$refs.ul;
      let elementL = this.$refs.li;
      let btn = this.$refs.btn;
      let t = 0;
      if (index < 4) {
        elementL[index + 1].style.zIndex = "15";
        btn[index + 1].style.backgroundColor = "#FF6900";
      }
      elementL[index].style.zIndex = "0";
      elementL[index].style.transform = `scale(0.75)`;
      btn[index].style.backgroundColor = "#F0F0F0";
      //切换图片 t为变换次数 共60次，每隔40毫秒变换一次，依照宽度来改变
      let moveLeft = setInterval(() => {
        element.style.left = Number.parseInt(element.style.left) - 3.55 + "px";
        index < 4
          ? (elementL[index + 1].style.transform = `scale(${
              0.75 + (0.25 / 60) * t
            })`)
          : "";
        elementL[index].style.transform = `scale(${1 - (0.25 / 60) * t})`;
        t++;
        if (t >= 60) {
          clearInterval(moveLeft);
        }
        console.log(1);
      }, 40);
    },
    // 左移
    moveL() {
      let index = this.arrIndex;
      let element = this.$refs.ul;
      let elementL = this.$refs.li;
      let btn = this.$refs.btn;
      let t = 0;
      if (index >1) {
        elementL[index-1].style.zIndex = "15";
        btn[index-1].style.backgroundColor = "#FF6900";
      }
      elementL[index].style.zIndex = "0";
      elementL[index].style.transform = `scale(0.75)`;
      btn[index].style.backgroundColor = "#F0F0F0";
      //切换图片 t为变换次数 共60次，每隔40毫秒变换一次，依照宽度来改变
      let moveLeft = setInterval(() => {
        element.style.left = Number.parseInt(element.style.left) + 3.55 + "px";
        index > 1
          ? (elementL[index-1].style.transform = `scale(${
              0.75 + (0.25 / 60) * t
            })`)
          : "";
        elementL[index].style.transform = `scale(${1 - (0.25 / 60) * t})`;
        t++;
        // 卡帧
        if (t >= 60) {
          clearInterval(moveLeft);
        }
        console.log(1);
      }, 40);
    },
    // 下一张图片
    nextBanner(){
      this.stopAutoPlay()
      this.arrIndex++
      if(this.arrIndex>4){
        this.arrIndex=1
      }
      this.stateAutoPlay()
    },
    // 上一张图片
    prevBanner(){
      this.stopAutoPlay()
      this.arrIndex--
      if(this.arrIndex<0){
        this.arrIndex=4
      }
      this.stateAutoPlay()
    },
    // 更改下标
    changeBanner(index){
      this.stopAutoPlay()
      this.arrIndex=index
      this.stateAutoPlay()
    },
    // 初始化
    adjust(largeIndex, smallIndex, left) {
      let element = this.$refs.li;
      let btn = this.$refs.btn;
      element[largeIndex].style.transform = "scale(1)";
      element[largeIndex].style.zIndex = "10";
      btn[largeIndex].style.backgroundColor = "#FF6900";
      element[smallIndex].style.transform = `scale(0.75)`;
      element[smallIndex].style.zIndex = "0";
      btn[smallIndex].style.backgroundColor = "#F0F0F0";
      this.$refs.ul.style.left = left + "px";
    },
  },
  mounted() {
    this.stateAutoPlay();
    this.adjust(this.arrIndex, 4, 0);
  },
};
</script>

<style lang="less" scoped>
.content {
  position: relative;
  padding-top: 100px;
  width: 400px;
  height: 400px;
  margin: 0 auto;
  overflow: hidden;
  .ul {
    position: relative;
    display: flex;
    .card {
      width: 220px;
      height: 300px;
      position: relative;
      flex: none;
      transform: scale(0.75);
      z-index: 0;
      img {
        width: 220px;
        height: 300px;
        position: absolute;
        transition: 0.5s;
      }
      .cover1 {
        z-index: 1;
      }
      .hero1 {
        z-index: 2;
        opacity: 0;
      }
      .title1 {
        z-index: 3;
      }
      // 3D卡片
      &:hover > .cover1 {
        box-shadow: 0 35px 35px -8px rgba(0, 0, 0, 0.75);
        transform: perspective(500px) rotateX(25deg);
      }
      &:hover > .title1 {
        transform: perspective(500px) translate3d(0, -30px, 70px);
      }
      &:hover > .hero1 {
        opacity: 1;
        transform: perspective(500px) translate3d(0, -70px, 75px);
      }
    }
  }
}
.btn_prev_left{
  position: absolute;
  width: 34px;
  height: 50px;
  line-height: 50px;
  left: 0px;
  top: calc(50% - 20px);
  z-index: 20;
  &:hover{
    color: white;
    background-color: #3F2E23;
  }
  i{
    color: #E4E4E4;
    font-size: 35px;
    margin: 0 auto;
  }
}
.btn_next_right{
  position: absolute;
  width: 34px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  right: 0px;
  top: calc(50% - 20px);
  z-index: 20;
  &:hover{
    color: white;
    background-color: #3F2E23;
  }
  i{
    color: #E4E4E4;
    font-size: 35px;
  }
}
.button {
  margin-top: 50px;
  width: 225px;
  height: 40px;
  position: relative;
  left: calc(50% - 112.5px);
  button {
    width: 40px;
    height: 40px;
    margin-right: 5px;
    border: 0px;
  }
}
</style>