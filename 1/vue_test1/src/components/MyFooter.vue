<template>
  <div class="footer" v-show="todos.length">
    <div class="text">
        <input type="checkbox" v-model='add'>
        <span>已完成{{done}}/全部{{todos.length}}</span>
    </div> 
    <button @click="delete3" :style="{display:dis}">清除已完成任务</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'Footer',
    props:['todos'],
    data() {
        return {
            display:''
        }
    },
    methods:{
        delete3(){
            this.todos.forEach(value=>{
                if(value.done===true){
                    pubsub.publish('delete1',value.id)
                }
            })
        }
    },
    computed:{
        add:{
            get(){
                if(Object.keys(this.todos).length===0) return
                // console.log(Object.keys(this.todos));
                return this.todos.every(value=>{
                    return value.done===true
                })
            },
            set(val){
                this.$emit('check1',val)
            }
        },
        done:{
            get(){
                let num=0
                return this.todos.reduce((sum,value)=>{
                    if(value.done===true){
                        console.log(num++);
                        sum++
                    }
                    return sum
                },0)
            }
        },
        dis(){
            if(this.todos.some(value=>{
                return value.done===true
            })){
                return 'block'
            }
        }
    }
}
</script>

<style lang='less'>
    .footer{
        display: flex;
        justify-content: space-between;
        div{
            input{
                margin-left: 10px;
            }
            span{
                margin-left: 25px;
            }
        }
        button{
            display: none;
        }
    }
</style>