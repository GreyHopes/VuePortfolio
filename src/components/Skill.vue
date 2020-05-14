<template>
    <div class="skill">
        <v-row class="name">
            <v-icon>mdi-{{skill.icon}}</v-icon>
            {{skill.name}}
        </v-row>
        <v-row class="bar">
            <v-progress-linear height="2rem" :value="skill.level" color="#F06000"></v-progress-linear>
        </v-row>
    </div>
</template>

<script>
export default {
  name: 'Skill',
  props:
  {
    skill:Object,
  },
  data: () => ({

  }),
  mounted()
  {
      
  }
}
</script>

<style lang="scss">
.skill
{
    .name
    {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }

    .v-icon
    {
        font-size: 2.5rem;
    }
   
    margin-bottom: 1rem;

    @media(max-width: 992px)
    {
        .row
        {
            margin-left: 0.5rem;
            margin-right: 0.5rem;
        }
    }
}
</style>