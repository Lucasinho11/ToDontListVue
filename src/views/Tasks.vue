<template>
  <div>
    <h1>Tasks: </h1>
    <router-link to="/create"><button type="button" class="btn btn-primary">Créer une tache</button></router-link>
    <div v-if="user.token">
        <br>
     <div v-for="task in tasks" :key="task.id" class="container">
         <br>
         <div class="div-task">
             <br>
             <router-link :to="{ path: '/tasks/'+ task.id}">
                <h6>{{ task.title }}</h6><br>
                <p>{{ task.body }}</p>
            </router-link>
         </div>
         <br><br>
         
        
    </div>
    </div>
    <div v-else>Not logged.</div>
  </div>
</template>

<script>

    import { mapActions } from "vuex"
    import { mapGetters } from "vuex"
    export default {
        name: "Tasks",
        data() {
            return {};
        },
        computed: {
            ...mapGetters({'user': 'auth/user'}),
             ...mapGetters({'tasks': 'auth/tasks'})
        },
        methods: {
            ...mapActions({'tasks_user': 'auth/tasks_user'})

        },
        mounted(){
                this.tasks_user()
                console.log("taches" + this.tasks)            
        }
    }
</script>
<style scoped>
.container{
    display: flex;
    justify-content: center;
}
    .div-task{
        border: 2px solid lightseagreen;
        border-radius: 5px;
        width: 50%;
    }
</style>