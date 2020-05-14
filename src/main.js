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
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'
import xssFilter from 'showdown-xss-filter'
import VueShowdown from 'vue-showdown'

Vue.config.productionTip = false;

//Adding axios for http requests
Vue.use(VueAxios, axios);
//Adding VueShowdown to parse markdown
Vue.use(VueShowdown, {
  // set default flavor of showdown
  flavor: 'github',
  // set default options of showdown (will override the flavor options)
  options: {
    emoji: false,
  },
  //set the xssFilter extension
  extensions:[[xssFilter]]
})

//Creating the Vue object
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

//Retrieving data 
axios.get(process.env.BASE_URL+'portfolioData.json')
.then(function(response)
{
  //Storing data in the vuex store
  store.commit('setportfoliodata',response.data)
  store.commit('setprojects',response.data.projects)
},store)
.catch(function(error){
  console.log(error)
})




