import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
// 用于相应组件中的动作
const actions={
    jia(context,value){
        context.commit('JIA',value)
    },
    jian(context,value){
        context.commit('JIAN',value)
    }
}
// 用于操控数据
const mutations={
    JIA(state,value){
        state.num+=value
   },
   JIAN(state,value){
        state.num-=value
   }
}
// 用于存储数据
const state={
    num:0
}
export default new Vuex.Store({
    actions,
    mutations,
    state
})
