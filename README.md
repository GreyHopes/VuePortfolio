# :mortar_board: Vue Portfolio Template

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/greyhopes/vueportfolio/issues)

A customizable portfolio template made with VueJS.

## Table of content

<!-- TOC -->
- [:tada: Getting Started](#tada-getting-started)
  - [:wrench:Prerequisites](#wrenchprerequisites)
  - [:construction: Installing](#construction-installing)
- [:floppy_disk: Add your informations](#floppy_disk-add-your-informations)
  - [:mag_right: Main informations](#mag_right-main-informations)
  - [:wave: Socials](#wave-socials)
  - [:mailbox: About](#mailbox-about)
  - [:books: Resume](#books-resume)
  - [:trophy: Projects](#trophy-projects)
- [:rocket: Deployment](#rocket-deployment)
- [:page_with_curl: Deploying on a github page](#page_with_curl-deploying-on-a-github-page)
- [:hammer:Built With](#hammerbuilt-with)
- [:raising_hand: Contributing](#raising_hand-contributing)
- [:black_nib: Authors](#black_nib-authors)
- [:clipboard: License](#clipboard-license)
- [:pray: Acknowledgments](#pray-acknowledgments)

<!-- TOC END -->

## :tada: Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### :wrench:Prerequisites

The project requires [Node.js](https://nodejs.org/) version 8.9 or above. 

I recommand to install [@vue/cli](https://cli.vuejs.org/) to help you manage the project and the dependencies 

```
npm install -g @vue/cli
```

### :construction: Installing

First, start by downloading the dependencies. 

```
npm install
```

Next you can use the Vue CLI GUI and serve the application with the GUI.

```
vue ui
```

Or you can do it by command : 

```
npm run serve
```

## :floppy_disk: Add your informations 

To modify the information displayed on your portfolio you just have to modify the informations in the `portfolioData.json` file.

### :mag_right: Main informations

These are the main informations of your portfolio :

```jsonc
{
  "title":"My portfolio",
  "name":"John Doe",
  "resumeUrl":"https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  "footer":"© 2020 Me",
  "profilePic":"/profilepic.png", // <= Path from public/images you can use a distant path instead
  "main":{
      "title":"John Doe",
      "subtitle":"Junior Developper",
      "bgUrl":"/background.jpg" // <= Same 
  }
}
```

### :wave: Socials

These are your social links :

:warning: *The `name` field is used to determine which icon to use, check the [material design icons site](https://materialdesignicons.com/) for reference.*

```jsonc
{
  "socials":
  [{
      "name":"facebook",
      "url":"http://facebook.com/"
    },
    {
      "name":"twitter",
      "url":"http://twitter.com"
    }
}
```

### :mailbox: About

This section will fil the informations on the `About` page.

```jsonc
{
  "about":{
        "description":"Write a description about yourself. Your can write it in **Markdown** for styling.",
        "email": "john.doe@example.com",
        "phoneNumber": "000-000-0000",
        "address":{
          "street":"555 Boulevard de l'Université,",
          "city":"Chicoutimi",
          "state":"QC",
          "country":"CANADA",
          "zip": "G7H2B1"
        }
    },
}
```

### :books: Resume

The resume informations are divided in 3 parts.

The education and past works are pretty similar and self explanatory. 

```jsonc
{
  "education":[
    {
      "school":"University X",
      "degree":"Master Degree",
      "dates":"September 2019 - Today",
      "description":""
    }
  ],
  "works":[
    {
        "company":"Company",
        "title":"Developper",
        "dates":"September 2018 - February 2019",
        "description":"What I did at this company."
    }
  ]
}
```

And here is the part that fills your skills and ads the progression bar :

:warning: *Just as said previously, I use Material Design Icons for the icons please check their [site]((https://materialdesignicons.com/)) for reference.*

```jsonc
{
"skills":[
  {
    "name":"Unreal Engine",
    "level":"80%",
    "icon":"unreal"
  },
  {
    "name":"", //<= I choosed not to use the name to avoid clutter with the icon
    "level":"70%",
    "icon":"language-cpp"
  },
]
```

### :trophy: Projects 

These informations will be used to fill in the `Projects` page and each individual project page :

```jsonc
{
  "projects":[
    {
        "title": "Project 1",
        "subtitle": "A software development project",
        "smallDescription": "Small description of the project",
        "imageUrl":"/background.jpg", //<= local path from public/images

        //The content field is used for the project page 
        "content":{
            "mdUrl":"project1.md" // <= Path to the markdown file from public/projects/markdown/
        }
    },
    {
        "title": "Project 2",
        "subtitle": "Another software development project",
        "smallDescription": "Small description of the project",
        "imageUrl":"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg", //<= distant image
        "content":{ 
            "text":"This is my project" // A simple text description
        }
    }
  ]
}
```

## :rocket: Deployment

To deploy your application you will have to deploy it using the following command : 

```
npm run build
```

Once built, you can deploy your application on your own site using the content of the *dist* folder. 

## :page_with_curl: Deploying on a github page

This project comes with the [gh-pages](https://github.com/tschaub/gh-pages) by **tschaub** it helps us deploying our portfolio to a github page. 

*If you want to know more about github pages click [here](https://pages.github.com/)*

First, you'll have to change the public path in the **vue.config.js** file : 

```js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/YOUR_REPOSITORY_NAME_HERE/' //<= Change that line
    : '/',
  "transpileDependencies": [
    "vuetify"
  ]
}
```

*Note : If your repository is your `username.github.io` repo you just have to put a `/` instead of the repository name has it will be at the root of your domain.*

Then build the application as said before and run the following command : 

```
npm run deploy
```

Your portfolio is now deployed on your github page !


## :hammer: Built With

* [VueJS](https://vuejs.org/) - The main framework
* [Vuetify](https://vuetifyjs.com/) - Most of the UI components and the layout
* [Vue Router](https://router.vuejs.org/) - Routing
* [VueX](https://vuex.vuejs.org/ ) - Global storage
* [Vue Axios](https://github.com/imcvampire/vue-axios) - Axios wrappper 
* [Showdown](https://github.com/showdownjs/showdown) - Markdown to HTML conversion (with the addition of the [XSS Filter plugin](https://github.com/VisionistInc/showdown-xss-filter))
* [VueShowdown](https://vue-showdown.js.org/) - Showdown wrapper for Vue
* [gh-pages](https://github.com/tschaub/gh-pages) - Fast and easy deployment to github pages

## :raising_hand: Contributing

Coming soon

<!--
Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.
--> 
## :black_nib: Authors

* **Cellard Fabien (GreyHopes)** - *Initial work* - [PurpleBooth](https://github.com/greyhopes)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## :clipboard: License

This project is licensed under the GNU GPLv3 License - see the [COPYING.md](COPYING.md) file for details

## :pray: Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
