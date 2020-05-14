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
