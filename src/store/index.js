/**
Copyright (C) <2020>  <Cellard Fabien>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

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
