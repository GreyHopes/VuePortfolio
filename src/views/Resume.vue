<!-- Resume component -->
<template>
  <div class="resume">
    <v-container>
      
      <v-row justify="center" justify-md="start" class="title">
        <h1>My Resume</h1>
      </v-row>

      <v-row class="section">
        <v-col cols="12" md="3" class="section-title"><span><v-icon>mdi-school</v-icon> Education</span></v-col>
        <v-col cols="12" md="9">
          <ResumeItem v-for="(item,index) in education" :key="index" :item="item" type="education"></ResumeItem>
        </v-col>
      </v-row>

      <v-row class="section">
        <v-col cols="12" md="3" class="section-title"><span><v-icon>mdi-briefcase</v-icon> Work</span></v-col>
        <v-col cols="12" md="9">
          <ResumeItem v-for="(item,index) in works" :key="index" :item="item" type="work"></ResumeItem>
        </v-col>
      </v-row>

      <v-row class="section">
        <v-col cols="12" md="3" class="section-title"><span><v-icon>mdi-laptop</v-icon> Skills</span></v-col>
        <v-col cols="12" md="9">
          <Skill v-for="(item,index) in skills" :key="index" :skill="item"></Skill>
        </v-col>
      </v-row>

    </v-container>
  </div>
</template>

<script>
import ResumeItem from '../components/ResumeItem'
import Skill from '../components/Skill'
export default {
  name: 'Resume',
  data: () => ({
    education:[],
    works:[],
    skills:[]
  }),
  components:{
    ResumeItem,
    Skill
  },
  methods:
  {
    retrieveDataFromState: function (state)
    {
      this.education = state.portfolio.resume.education;
      this.works = state.portfolio.resume.works;
      this.skills = state.portfolio.resume.skills;
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
.resume
{
  @media(min-width: 993px)
  {
      .title
      {
        margin-left: 0;
        margin-right: 0;
      }
  }
}

.section-title
{
  font-size:2rem;
  span
  {
    border-bottom: 3px solid white;
  }
  
}

@media(max-width: 992px)
{
    .section-title
    {
        text-align: center;
        justify-content: center;
    }
}
</style>