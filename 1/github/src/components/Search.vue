<template>
<div class="jumbotron center">
  <h1>Hello, world!</h1>
  <div class="input-group group">
      <input type="text" class="form-control" placeholder="Search for..." v-model='keyword'>
      <span class="input-group-btn">
        <button class="btn btn-default" type="button" @click="btn">Go!</button>
      </span>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name:'Search',
    data() {
        return {
            keyword:''
        }
    },
    methods:{
        btn(){
            this.$bus.$emit('keyword',{isFirst:false,isLogin:true,arr:[],errMsg:''})
            axios({
                method:'GET',
                url:'https://api.github.com/search/users',
                params:{q:this.keyword}
            }).then(response=>{
                console.log(response);
                this.$bus.$emit('keyword',{isLogin:false,arr:response.data.items,errMsg:''})
            },error=>{
                console.log(error);
                this.$bus.$emit('keyword',{isLogin:false,arr:[],errMsg:error.msg})
            })
        }
    }
}
</script>

<style lang="less" scoped>
    .center{
        display: flex; 
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .group{
            width: 300px;
            height: 40px;
            .form-control{
                height: 100%;
            }
        }

        .btn{
            width: 60px;
            height: 40px;
        }
    }
</style>