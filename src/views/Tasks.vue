<template>
  <div>
    <h1>Tasks: </h1>
    <router-link to="/create">Create a task </router-link>
    <div v-if="user.token">
     <div v-for="task in tasks" :key="task.id">
         <router-link :to="{ path: '/tasks/'+ task.id}">
             {{ task.title }}
            {{ task.body }}
        </router-link>
        
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