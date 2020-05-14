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