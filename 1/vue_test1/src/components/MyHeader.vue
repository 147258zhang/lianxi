<template>
  <div class="header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model='add' @keydown.enter='addName'>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name:'Header',
    data() {
        return {
            add:''
        }
    },
    methods:{
        addName(){
            if(!this.add) return alert('输入不能为空')
            this.add={id:nanoid(),name:this.add,done:false}
            this.$emit('receive',this.add)
            this.add=''
        }
    }
}
</script>

<style lang='less' scoped>
    .header{
        margin-top: 10px;
        input{
            width: 100%;
            height: 45px;
            box-sizing: border-box;
            border: 1px solid #C0C0C0;
            border-radius: 4px;
            &:focus{
                outline: 1px solid #80FFFF;
                border: none;
                border-radius: 4px;
            }
        }
    }
</style>