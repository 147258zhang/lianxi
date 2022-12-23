<template>
  <div>
    <Search></Search>
    <div class="list">
      <List v-for="(value) in into.arr" :key='value.login' :arr="value" v-show="into.arr.length!==0"></List>
      <h1 v-show="into.isFirst">欢迎光临</h1>
      <h1 v-show="into.isLogin">...logining</h1>
      <h1 v-show="into.errMsg">{{into.errMsg}}</h1>
    </div>
  </div>
</template>

<script>
import List from './components/List.vue'
import Search from './components/Search.vue'
export default {
  name: 'App',
  components: {
    List,
    Search
  },
  data() {
    return {
      into:{
        isFirst:true,
        isLogin:false,
        arr:[],
        errMsg:''
      }
    }
  },
  mounted(){
    this.$bus.$on('keyword',(data)=>{
      this.into={...this.into,...data}
    })
  }
}
</script>

<style lang="less" scoped>
  .list{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
</style>
