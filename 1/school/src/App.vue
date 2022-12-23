<template>
  <div id="app">
    <School @atguigu="sch"></School>
    <Student ref="stu"></Student>
  </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'
export default {
  name: 'App',
  components: {
    School,
    Student
  },
  mounted(){
    this.$refs.stu.$on('atguigu1',data=>{
      console.log(data);
    })
  },
  methods: {
    sch(data){
      console.log(data);
    }
  },
}
</script>

<style>

</style>
