<!-- Home Component --> 
<template>
  <div class="home" :style="bgStyle">
    <v-container class="home-container">

      <v-row justify="center">
        <div class="title">{{title}}</div>
      </v-row>

      <v-row justify="center">
        <div class="subtitle">{{subtitle}}</div>
      </v-row>

      <v-row justify="center">
        <v-btn v-for="(item,index) in socials" :key="index" :href="item.url" icon class="social-button">
          <v-icon class="social-icon" large>mdi-{{item.name}}</v-icon>
        </v-btn>
      </v-row>

    </v-container>
  </div>
</template>

<script>
import {getImageURL} from '../plugins/utils'
export default {
  name: 'Home',
  data: () => ({
    title:"",
    subtitle:"",
    bgStyle:"",
    socials:[]
  }),
  methods:
  {
    retrieveDataFromState: function (state)
    {
      this.title = state.portfolio.main.title;
      this.subtitle = state.portfolio.main.subtitle;
      this.socials = state.portfolio.socials;
      this.bgStyle = "background-image: url(\""+getImageURL(state.portfolio.main.bgUrl)+"\")";
    }
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
.home{

  height:100%;
  position: relative;

  .title
  {
    font-size: 5rem!important; //add to overwrite vuetify style
    line-height: 5rem;
    text-align: center;
  }

  .social-button
  {
    padding: 1.5rem;
    margin: 0 0.5rem;
  }

  .subtitle
  {
    color: #A8A8A8;
  }
}
.home-container{
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>