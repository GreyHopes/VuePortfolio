<!--
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
-->

<!-- Projects component -->
<template>
  <div class="projects">
    <v-container>
      
      <v-row class="title-row">
        <h1>Check out my projects</h1>
      </v-row>

      <v-row>
        <v-col lg="3" md="4" sm="12" v-for="(project,index) in projects" :key="project.title">
          <router-link :to="{path: '/project/'+index}">
            <v-card height="100%">

              <v-img
                :src="getImageURL(project.imageUrl)"
                height="200px"
              ></v-img>

              <v-card-title>
                {{project.title}}
              </v-card-title>
          
              <v-card-subtitle>
                {{project.subtitle}}
              </v-card-subtitle>

              <v-card-text>
              </v-card-text>
            </v-card>
          </router-link>
        </v-col>
      </v-row>

    </v-container>
  </div>
</template>

<script>
import {getImageURL} from '../plugins/utils'

export default {
  name: 'Projects',
  data: () => ({
    projects:[],
  }),
  methods:
  {
    retrieveDataFromState: function (state)
    {
      this.projects = state.portfolio.projects;
    },
    getImageURL
  },
  mounted:function () {
    if(this.$store.state.portfolio)
    {
      this.retrieveDataFromState(this.$store.state);
    }
    else
    {
      this.$store.subscribe((mutation,state) => {
        if(mutation.type === "setportfoliodata")
        {
          this.retrieveDataFromState(state);
        }
      },this);
    }
  },
}
</script>


<style lang="scss">
.projects
{
  .title-row
  {
    margin:0;
  }

  a{
    text-decoration: none;
    color:white
  }
  margin-bottom: 1rem;
}
</style>
