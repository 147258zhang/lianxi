<template>
  <div class="list">
    <a :href="arr.html_url" target="_blank">
      <img :src="arr.avatar_url" alt="">
    </a>
    <div>{{arr.login}}</div>
  </div>
</template>

<script>
export default {
    name:'List',
    props:['arr']
}
</script>

<style lang="less" scoped>
    .list{
        width: 200px;
        height: 200px;
        margin: 20px 50px;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img{
          display: block;
          width: 150px;
          height: 150px;

        }
    }
</style>