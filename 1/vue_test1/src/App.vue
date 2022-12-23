<template>
  <div class="app">
    <div class="content">
      <Header @receive="receive"></Header>
      <List :todos="todos" ></List>
      <Footer :todos="todos" @check1="check1" @delete1="delete1"></Footer>
    </div>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
import Header from './components/MyHeader.vue'
import List from './components/MyList.vue'
import Footer from './components/MyFooter.vue'

export default {
  name: 'App',
  components: {
    Header,
    List,
    Footer
  },
  data() {
    return {
      todos:JSON.parse(localStorage.getItem('todos')) || [
        {id:'001',name:'吃饭',done:true}
      ]
    }
  },
  methods:{
    // 添加
    receive(x){
      // console.log(x);
      this.todos.unshift(x)
    },
    // 单选
    check(x){
      this.todos.forEach(value=>{
        if(value.id===x){
          value.done=!value.done
        }
      })
    },
    // 多选
    check1(x){
      this.todos.forEach(value=>{
        value.done=x
      })
    },
    // 编辑
    edit(x){
      this.todos.forEach((value)=>{
        if(value.id===x){
          value.isEdit=!value.isEdit
          console.log(value.isEdit);
        }
      })
    },
    addEdit(x,y){
      this.todos.forEach((value)=>{
        if(value.id===x){
          value.name=y
          // console.log(value.isEdit);
        }
      })
    },
    // 全部删除
    delete1(_,x){
      this.todos=this.todos.filter(value=>{
        return value.id!==x
      })
    },
    // 单独删除
    delete2(x){
      this.todos=this.todos.filter(value=>{
        return value.id!==x
      })
    }
  },
  watch:{
    todos:{
      deep:true,
      handler(val){
        console.log(val);
        localStorage.setItem('todos',JSON.stringify(val))

      }
    }
  },
  mounted(){
    this.$bus.$on('delete2',this.delete2)
    this.$bus.$on('check',this.check)
    this.$bus.$on('edit',this.edit)
    this.$bus.$on('addEdit',this.addEdit)
    this.pid=pubsub.subscribe('delete1',this.delete1)
  },
  beforeDestroy() {
    this.$bus.$off('check')
    pubsub.unsubscribe(this.pid)
  },
}
</script>

<style scoped lang="less">
  .app{
    width: 600px;
    height: 400px;
    border: 1px solid #C0C0C0;
    border-radius: 5px;
    .content{
      width: 550px;
      margin: 0 auto;
    }
  }
</style>
