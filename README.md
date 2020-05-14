# :mortar_board: Vue Portfolio Template

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/greyhopes/vueportfolio/issues)

A customizable portfolio template made with VueJS.

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


## :hammer:Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## :raising_hand: Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## :black_nib: Authors

* **Cellard Fabien (GreyHopes)** - *Initial work* - [PurpleBooth](https://github.com/greyhopes)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## :clipboard: License

This project is licensed under the GNU GPLv3 License - see the [COPYING.md](COPYING.md) file for details

## :pray: Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
