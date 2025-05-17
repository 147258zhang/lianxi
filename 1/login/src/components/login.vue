<template>
  <div class="login">
    <h1>欢迎-登录</h1>
    <div class="msg" :class="userClass" ref="ulogin">{{ message }}</div>
    <form  ref="myForm" >
      <div class="account">
      <span>账号名</span>
      <input type="text" name="username"/>
    </div>
    <div class="password">
      <span>密码</span>
      <input type="password" name="password"/>
    </div>
    <button @click="login" type="button">登录</button>
    </form>
    
    
  </div>
</template>

<script>
import serialize from 'form-serialize'
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      message: "",
      userClass:'error'
    };
  },
  methods: {
    concealE(data) {
      this.message = data;
      this.$refs.ulogin.style.visibility='visible'
      this.userClass='error'
      setTimeout(() => {
        this.$refs.ulogin.style.visibility = "hidden";
      }, 3000);
    },
    concealS(data){
      this.message = data;
      this.$refs.ulogin.style.visibility='visible'
      this.userClass='success'
      setTimeout(() => {
        this.$refs.ulogin.style.visibility = "hidden";
      }, 3000);
    },
    login() {
      const data=serialize(this.$refs.myForm,{hash:true,empty:true})
      console.log(data)
      const {username='zhangsanfeng',password=123456}=data
      console.log(data)
      if (username.length < 8) {
        
        this.concealE('用户名需大于等于8位')
        
      } else {
        if (password.length < 6) {
          this.concealE('密码需大于等于6位');
          console.log(2)
        } else {
          axios
            .post("https://hmajax.itheima.net/api/login", 
              data
            )
            .then((res) => {
              console.log(res);
              this.concealS(res.data.message)
            })
            .catch((err) => {
            
              this.concealE('用户名或密码错误')
            });
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  width: 600px;
  height: 800px;
  margin: 0 auto;
  .account {
    margin: 50px 0 30px;
  }
  .msg {
    width: 450px;
    height: 50px;
    line-height: 50px;
    font-size: 17px;
    padding: 0 10px;
    visibility: hidden;
    border-radius: 4px;
  }
  .success{
    visibility: visible;
    background-color: #00ff80;
    color: #008040;
  }
  .error {
    background-color: #ff8040;
    color: #804000;
  }
  span {
    margin: 10px 0;
    display: block;
    color: #c0c0c0;
  }
  input {
    width: 450px;
    height: 35px;
    border: 1px solid #c0c0c0;
    outline: none;
    border-radius: 4px;
    padding: 0 10px;
    &:hover {
      box-shadow: 0 0 7px #00ffff;
    }
  }
  button {
    width: 80px;
    height: 40px;
    margin-top: 15px;
    border-radius: 4px;
    background-color: #0080ff;
    color: white;
    border: none;
  }
}
</style>