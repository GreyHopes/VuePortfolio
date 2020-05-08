<template>
  <div class="about">
    <v-container class="about-container">

      <v-row justify="center">

        <v-col cols="12" md="3">
          <v-img class="profile-pic" max-width="20rem" :src="getImageURL(profilePicUrl)"></v-img>
        </v-col>

        <v-col cols="12" md="9" align-self="center">
          <v-container>

            <v-row class="title">About Me :</v-row>
            <v-row class="description"><VueShowdown :markdown="description"></VueShowdown></v-row>
            <v-row class="">
                <v-col cols="12" md="6" class="contact-details">
                  <v-row class="title">Contact Details</v-row>
                  <v-row class="name">{{name}}</v-row>
                  <v-row class="adress-main">{{adressMain}}</v-row>
                  <v-row class="adress-second">{{adressSecond}}</v-row>
                  <v-row class="phone-number">{{phoneNumber}}</v-row>
                  <v-row class="email">{{email}}</v-row>
                </v-col>
                <v-col cols="12" md="6" class="resume-button-container" align-self="center">
                  <v-btn tile class="resume-button" :href="resumeUrl">
                    <v-icon>mdi-download</v-icon>
                    <span>Get my resume</span>
                  </v-btn>
                </v-col>
              </v-row>
              
          </v-container> 
        </v-col>

      </v-row>
    </v-container>
  </div>
</template>

<script>
import {getImageURL} from '../plugins/utils'
export default {
  name: 'About',
  data: () => ({
    profilePicUrl:"",
    description:"",
    name:"",
    adressMain:"",
    adressSecond:"",
    phoneNumber:"",
    email:"",
    resumeUrl:""
  }),
  components:{
  
  },
  methods:
  {
    getImageURL,
    retrieveDataFromState: function (state)
    {
      this.profilePicUrl = state.portfolio.profilePic;
      this.description = state.portfolio.about.description;
      this.name = state.portfolio.name;
      this.phoneNumber = state.portfolio.about.phoneNumber;
      this.email = state.portfolio.about.email;
      this.resumeUrl = state.portfolio.resumeUrl;
      this.adressMain = state.portfolio.about.address.street;
      
      this.adressSecond = state.portfolio.about.address.city;

      if(state.portfolio.about.address.state && state.portfolio.about.address.state !== "")
      {
        this.adressSecond += (", " + state.portfolio.about.address.state);
      }

      if(state.portfolio.about.address.country && state.portfolio.about.address.country !== "")
      {
        this.adressSecond += (", " + state.portfolio.about.address.country);
      }

      this.adressSecond += (", " + state.portfolio.about.address.zip);
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
.about{
  height:100%;
  position: relative;
  
  .about-container{
    position: relative;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .resume-button
  {
    display: flex;
  }

  .description
  {
    p{
      margin-bottom: 0;
    }
  }

  .profile-pic
  {
    display: block;
    margin: auto;
    border-radius: 100%
  }
}
</style>