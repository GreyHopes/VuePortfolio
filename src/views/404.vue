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