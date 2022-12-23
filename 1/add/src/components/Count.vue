<template>
  <div class="app">
    <h1>当前求和为：{{$store.state.num}}</h1>
    <select name="" id="" v-model="n">
      <option :value="1">1</option>
      <option :value="2" selected>2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前和为奇数再加</button>
    <button @click="incrementWait">等一等加</button>
  </div>
</template>

<script>
export default {
  name: 'Count',
  data() {
    return {
      n: 1,
    };
  },
  methods: {
    increment() {
      console.log(this);
      this.$store.dispatch('jia',this.n)
    },
    decrement() {
      this.$store.dispatch('jian',this.n)
    },
    incrementOdd() {
      console.log(this);
      if((this.$store.state.num + this.n) % 2) {
        this.$store.dispatch('jia',this.n)
      }
    },
    incrementWait() {
      setTimeout(() => {
        this.$store.dispatch('jia',this.n)
      }, 1000);
    },
  },
};
</script>

<style>
</style>