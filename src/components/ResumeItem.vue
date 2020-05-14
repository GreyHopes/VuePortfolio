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
    <div class="resume-item">
        <v-row class="name">{{name}}</v-row>
        <v-row class="details">
            <span>{{position}}</span>
            <span>{{" • " + dates}}</span>
        </v-row>
        <v-row v-if="description.length > 0" class="description" justify="center" justify-md="start"><VueShowdown :markdown="description"></VueShowdown></v-row>
    </div>
</template>

<script>
export default {
  name: 'ResumeItem',
  props:
  {
    item:Object,
    type: String,
  },
  data: () => ({
    name:"",
    position:"",
    dates:"",
    description:"",
  }),
  mounted()
  {
      switch(this.type)
      {
        case "education" :
            this.name = this.item.school;
            this.position = this.item.degree;
            this.dates = this.item.dates;
            this.description = this.item.description;
        break;
        case "work" :
            this.name = this.item.company;
            this.position = this.item.title;
            this.dates = this.item.dates;
            this.description = this.item.description;
        break;
      }
  }
}
</script>

<style lang="scss">
.resume-item
{
    margin-bottom: 2rem;

    .name
    {
        font-weight: bold;
        font-size: 2rem;
    }

    .details
    {
        font-style: italic;
    }

    @media(max-width: 992px)
    {
        .name,.details
        {
            text-align: center;
            justify-content: center;
        }

         .description
        {
            margin-left: 0.5rem;
            margin-right: 0.5rem;
        }
    }
}
</style>