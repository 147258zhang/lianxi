<template>
  <div class="login">
    <h1>欢迎-登录</h1>
    <div class="success" ref="ulogin">{{ message }}</div>
    <div class="account">
      <span>账号名</span>
      <input type="text" v-model="username" />
    </div>
    <div class="password">
      <span>密码</span>
      <input type="password" v-model="password" />
    </div>
    <button @click="login">登录</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      username: "zhangsanfeng",
      password: "123456",
      message: "",
      passStr: "",
    };
  },
  methods: {
    conceal(data) {
      this.message = data;
      this.$refs.ulogin.style.visibility='visible'
      this.$refs.ulogin.classList.add("error");
      setTimeout(() => {
        this.$refs.ulogin.style.visibility = "hidden";
      }, 3000);
    },
    login() {
      if (this.username.length < 8) {
        
        this.conceal("用户名需大于等于8位")
        
      } else {
        if (this.password.length < 6) {
          this.conceal("密码需大于等于6位");
          console.log(2)
        } else {
          axios
            .post("https://hmajax.itheima.net/api/login", {
              username: this.username,
              password: this.password,
            })
            .then((res) => {
              console.log(res);
              this.message = res.data.message;
              this.$refs.ulogin.style.visibility = "visible";
              setTimeout(() => {
                this.$refs.ulogin.style.visibility = "hidden";
              }, 3000);
            })
            .catch((err) => {
            
              this.conceal('用户名或密码错误')
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
  .success {
    width: 450px;
    height: 50px;
    line-height: 50px;
    font-size: 17px;
    padding: 0 10px;
    visibility: hidden;
    background-color: #00ff80;
    color: #008040;
    border-radius: 4px;
  }
  .error {
    visibility: visible;
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