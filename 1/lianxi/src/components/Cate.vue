<template>
  <div class="list">
    <h1>{{title}}分类</h1>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
    name:'Cate',
    props:['title']
}
</script>

<style lang="less" scoped>
    .list{
        width: 300px;
        height: 400px;
        background: #00FFFF;
        margin: 20px 50px;
        h1{
            width: 100%;
            height: 50px;
            background-color: orange;
            text-align: center;
        }
    }
</style>