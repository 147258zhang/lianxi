<template>
    <div class="item">
        <div class="text">
            <input type="checkbox" :checked='todos.done' @click="handlerCheck(todos.id)">
            <span v-show="!todos.isEdit">{{todos.name}}</span>
            <input type="text" v-show="todos.isEdit" v-model='todos.name' @blur='handleBlur' ref="input">
        </div>
        <div class="btn">
            <button class="btn_edit" @click="handleEdit(todos)" v-show="!todos.isEdit">编辑</button>
            <button @click='delete2' class="btn_del">删除</button>
        </div>
    </div>
</template>

<script>

export default {
    name:'Item',
    props:['todos','item'],
    methods:{
        handlerCheck(x){
            this.$bus.$emit('check',x)
        },
        delete2(){
            this.$bus.$emit('delete2',this.todos.id)
        },
        handleEdit(todos){
            if(todos.hasOwnProperty('isEdit')){
                todos.isEdit=true
            }else{
                this.$set(todos,'isEdit',true)
            }
            // this.$bus.$emit('edit',this.todos.id)
            this.$nextTick(()=>{
                this.$refs.input.focus()
            })
            
        },
        handleBlur(){
            if(this.todos.name==='')return alert('修改不能为空')
            this.$bus.$emit('addEdit',this.todos.id,this.todos.name)
            this.$bus.$emit('edit',this.todos.id)
        }
    }
}
</script>

<style lang="less">
    .item{
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #C0C0C0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .text{
            span{
                display: inline-block;
                margin: 0 0 0 10px;
            }
            input{
                margin-left: 10px;
            }
        }
        .btn{
            display: flex;
            justify-content:flex-start;
            button{
                display: none;
                width: 70px;
                height: 30px;
                margin-right: 5px;
            }
        }
        &:hover{
            background: #C0C0C0;
            .btn_edit{
                display: block;
                border: none;
                background: skyblue;
                border-radius: 3px;
            }
            .btn_del{
                display: block;
                border: none;
                background: #ff6700;
                border-radius: 3px;
            }
        }
        &:last-child{
            border: none;
        }
    }
</style>