<!-- Overlay component with the header, the nav drawer and the footer-->
<template>
  <v-app id="inspire">
    <!-- The nav drawer -->
    <v-navigation-drawer
      :value="isLargeViewport || drawer"
      clipped
      app 
      bottom
      :mini-variant="mini"
      :expand-on-hover="mini"
      @input="onTransitioned()"
    >
      <v-list dense>
        <v-list-item :class="!drawer && 'px-0'">
          <v-list-item-avatar :class="mini && 'miniAvatar'">
            <img :src="getImageURL(profilePic)">
          </v-list-item-avatar>
          <v-list-item-content :class="mini && 'miniAvatarText'">
            <v-list-item-title class="">{{name}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link :to="{path: '/'}">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link :to="{path: '/about'}">
          <v-list-item-action>
            <v-icon>mdi-face</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link :to="{path: '/projects'}">
          <v-list-item-action>
            <v-icon>mdi-book</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Projects</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link :to="{path: '/resume'}">
          <v-list-item-action>
            <v-icon>mdi-archive</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Resume</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-row justify="center">
              <v-btn v-for="(item,index) in socials" :key="index" :href="item.url" icon large>
                <v-icon class="social-icon">mdi-{{item.name}}</v-icon>
              </v-btn>
            </v-row>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <!-- The header -->
    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="onClick()" />
      <router-link :to="{path: '/'}">
        <v-toolbar-title>{{title}}</v-toolbar-title>
      </router-link>
    </v-app-bar>

    <v-content>
      <!-- The route component will be injected here -->
      <router-view></router-view>
    </v-content>

    <v-footer app>
      <v-row justify="center"><span>{{footer}}</span></v-row>
    </v-footer>
    
  </v-app>
</template>

<script>
import {getImageURL} from './plugins/utils'
  export default {
    props: {
      source: String,
      test:String
    },
    data: () => ({
      drawer: false,
      isOpening: false,
      title: "",
      footer:"© 2020 Cellard Fabien",
      name:"",
      socials:[],
      profilePic:""
    }),
    methods:{
      getImageURL,
      onClick()
      {
        this.drawer = !this.drawer;
        this.isOpening = true;
      },
      onTransitioned()
      {
        if(!this.isLargeViewport)
        {
          if(this.isOpening)
          {
            this.isOpening = false;
          }
          else
          {
            this.drawer = false;
          }
        }
      },
      retrieveDataFromState: function (state)
      {
        this.title = state.portfolio.title;
        this.footer = state.portfolio.footer;
        this.name = state.portfolio.name;
        this.socials = state.portfolio.socials;
        this.profilePic = state.portfolio.profilePic;
      }
    },  
    computed:
    {
      isLargeViewport() {
        return this.$vuetify.breakpoint.name == 'lg' || this.$vuetify.breakpoint.name == 'xl';
      },
      mini()
      {
        return this.isLargeViewport && !this.drawer
      }
    },
    created () {
      this.$vuetify.theme.dark = true;
      this.drawer = false;

      //If the data is in the store retrieves it 
      if(this.$store.state.portfolio)
      {
        this.retrieveDataFromState(this.$store.state);
      }
      else //else we'll wait for it to pop in the store (Happens when the page is reloaded)
      {
        //We'll wait for the mutation to trigger and retrieve the data  
        this.$store.subscribe((mutation,state) => {
          if(mutation.type === "setportfoliodata")
          {
            this.retrieveDataFromState(state);
          }
        },this);
      }
    },
    watch: {
      isLargeViewport : function(newVal)
      {
        if(!newVal)
        {
          this.drawer = false;
        }
      }
    }
  }
</script>

<style lang="scss">
.v-toolbar__content
{
  .router-link-active{
    text-decoration: none;
    color:white
  }
}

.miniAvatar
{
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-left: 8px !important;
}

.miniAvatarText
{
  margin-left: 0.5rem;
}
</style>