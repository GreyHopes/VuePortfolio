import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//Vuex Store
export default new Vuex.Store({
  state: {
    portfolio:null,
    projects:null
  },
  mutations: {
    setportfoliodata(state,data) //Called when the portfolio data is loaded 
    {
      state.portfolio = data;
    },
    setprojects(state,data){ //Called when the projects data is loaded 
      state.projects = data;
    }
  },
  actions: {
  },
  modules: {
  }
})
