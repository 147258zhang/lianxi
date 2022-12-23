<template>
  <div class="student">
    <h2>学生年龄{{age}}</h2>
    <h2>学生姓名{{name}}</h2>
    <button @click="send">把学生名给app</button>
  </div>
</template>

<script>
export default {
    name:'Student',
    data() {
        return {
            age:18,
            name:'zhang'
        }
    },
    methods:{
        send(){
            this.$emit('atguigu1',this.name)
        }
    }
}
</script>

<style>

</style>