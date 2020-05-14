<!-- 404 component -->
<template>
  <div class="not-found" :style="bgStyle">
    <v-container class="not-found-container">
      <v-row justify="center">
        <div class="title">404</div>
      </v-row>
      <v-row justify="center">
        <div class="subtitle">Woops ! Seems there's nothing there ...</div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: '404',
  data: () => ({
  }),
  methods:
  {
  
  },
}
</script>

<style lang="scss">
.not-found{

  height:100%;
  position: relative;

  .title
  {
    font-size: 5rem!important; //add to overwrite vuetify style
    line-height: 5rem;
  }

  .subtitle
  {
    color: #A8A8A8;
  }
}
.not-found-container{
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>