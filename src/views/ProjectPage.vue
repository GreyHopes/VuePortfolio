<!-- Project page component -->
<template>
    <v-container class="project-container">

        <v-row class="title-row" justify="center">
            <v-img
                v-show="imgUrl !== ''"
                :src="getImageURL(imgUrl)"
                max-height="30rem"
                min-height="30rem"
                contain
            ></v-img>
        </v-row>

        <v-row class="title-row" justify="center">
            <h1>{{title}}</h1>
        </v-row>

        <v-row class="content-row">
            <VueShowdown v-if="isMarkdown" :markdown="content"></VueShowdown>
            <div v-else>{{content}}</div>
        </v-row>

    </v-container>
</template>

<script>
import {getImageURL} from '../plugins/utils'
export default {
    props: {
        projectId:(Number,String)
    },
    data: () => ({
        content:"",
        isMarkdown:false,
        project:null,
        title:"",
        imgUrl:""
    }),
    methods:{
        getImageURL,
        onSuccess(response){
            this.isMarkdown = true;
            //Replace the local image flag in the Markdown with the local path
            this.content = response.data.replace(/{{LOCAL_IMAGE_DIR}}/g,process.env.BASE_URL+'images');
        },
        onFail(error){
            console.error(error)
            //Load the backup text is there is one
            this.content = this.project.content?.text;
        },
        retrieveData()
        {
            //We'll retrieve the md file and parse it 
            if(this.project.content.mdUrl)
            {
                this.axios.get(process.env.BASE_URL+"projects/markdown/"+this.project.content.mdUrl)
                .then(this.onSuccess)
                .catch(this.onFail)
            }
            else
            {
                this.content = this.project.content?.text;
            }

            this.title = this.project.title;
            this.imgUrl = this.project.imageUrl;
        },
        retrieveProject(projectId)
        {
            if(this.$store.state.projects)
            {
                //If project id does not exist we redirect to 404
                if(this.$store.state.projects.length <= projectId)
                {
                    this.$router.push({name:"404"});
                }
                else
                {
                    this.project = this.$store.state.projects[this.projectId]
                    this.retrieveData();
                }
            }
            else
            {
                this.$store.subscribe((mutation,state) => {
                    if(mutation.type === "setprojects" && state.projects.length > projectId)
                    {
                        //If project id does not exist we redirect to 40
                        if(this.$store.state.projects.length <= projectId)
                        {
                            this.$router.push({name:"404"});
                        }
                        else
                        {
                            this.project = state.projects[projectId];
                            this.retrieveData();
                        }
                    }
                },this,projectId)
            }
        }
    },
    mounted:function() {
        this.retrieveProject(this.projectId)
    },
    watch: {
        //We'll watch the $route in case of an url change (i.e if the project id is changed in the URL)
        // eslint-disable-next-line no-unused-vars
        $route(to, from) {
            //We check if we are in the target case
            if(to && to.name === "Project" && to.params && to.params.projectId)
            {
                //We retrieve the project id and if it seems correct we'll try to laod the project
                var projectId = to.params.projectId;
                if(!Number.isSafeInteger(projectId))
                {
                    this.retrieveProject(projectId)
                }
            }
        }
    }
}
</script>

<style lang="scss">
.title-menu{
    font-size: 3rem;    
}
.content-row{
    margin:2rem;
   @media(min-width: 992px)
    {
        img,iframe{
            max-width: 50%;
            display: block;
            margin: auto;
        }
    }
    @media(max-width: 991px)
    {
        img,iframe{
            max-width: 100%;
            display: block;
            margin: auto;
        }
    }
}
@media(min-width: 992px)
{
    .title-row
    {
        margin-top: 2rem;;
    }
}

</style>