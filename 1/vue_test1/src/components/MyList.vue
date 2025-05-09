<template>
  <div :class="todos.length?'list':'list_reverse'">
    <transition-group
    name="animate__animated animate__bounce" 
    enter-active-class="animate__backInRight"
    leave-active-class="animate__backOutUp"
    appear
    >
      <Item v-for="(value,item) in todos" :key="value.id" :todos="value" :item="item"></Item>
    </transition-group>
  </div>
</template>

<script>
import 'animate.css'
import Item from '../components/MyItem.vue'
export default {
    name:'List',
    components:{
      Item
    },
    props:['todos']
}
</script>

<style lang="less">
  .list{
    width: 550px;
    margin: 30px 0;
    border: 1px solid #C0C0C0;
    border-radius: 5px;
    box-sizing: border-box;
  }
  .list_reverse{
    width: 550px;
    margin: 30px 0;
    border: none;
    border-radius: 5px;
    box-sizing: border-box;
  }
</style>