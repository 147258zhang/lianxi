<template>
  <!-- 插槽实例 -->
  <div id="app">
    <Cate title="美食">
      <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F1114%2F121R0113012%2F20121Q13012-9-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672997215&t=de79150ea16944bb0ffe3680f49173e5" alt="">
      <a href="" slot="footer">更多美食</a>
    </Cate>
    <Cate title="游戏">
      <ul>
        <li v-for="val in games" :key="val">{{val}}</li>
      </ul>
      <div class="footer">
        <a href="">单机游戏</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="">网络游戏</a>
      </div>
    </Cate>
    <Cate title="电影">
      <video controls src="./assets/shi.mp4"></video>
      <div class="footer">
        <a href="">经典</a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="">热门</a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="">推荐</a>
      </div>
    </Cate>
  </div>
  <!-- 求和vuex -->
</template>

<script>
// 插槽
import Cate from './components/Cate.vue'
export default {
  name: 'App',
  components: {
    Cate
  },
  data() {
    return {
      // 插槽
      foods:['火锅','烧烤','小龙虾','牛排'],
      games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
      films:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》'],
    }
  },
  
}
</script>

<style lang="less" scoped>
  #app{
    display: flex;
    justify-content: flex-start;
    img{
      width: 100%;
    }
    video{
      width: 100%;
      height: 250px;
    }
    .footer{
      display: flex;
      justify-content: center;
    }
  }

</style>
