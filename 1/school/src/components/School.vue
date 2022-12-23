<template>
  <div>
    <transition
    name="animate__animated animate__bounce"
    enter-active-class="animate__backInLeft"
    leave-active-class="animate__backOutDown"
    appear
    >
        <h2>学校地址{{address}}</h2>
    </transition>
    <h2>学校姓名{{name}}</h2>
    <button @click="send">把学校名给app</button>
  </div>
</template>

<script>
import 'animate.css'
export default {
    name:'School',
    data() {
        return {
            address:'北京',
            name:'尚硅谷'
        }
    },
    methods:{
        send(){
            this.$emit('atguigu',this.name)
        }
    }
}
</script>

<style>
    /* .v-enter-active{
        animation: atguigu 2s linear;
    }
    .v-leave-active{
        animation: atguigu 2s linear reserve;
    }
    @keyframes atguigu{
        0%{}
        100%{transform: translateX(-1000px);}
    } */
</style>