<template>
  <div>
    <h1>Task: </h1>
    <form v-if="user.token">
        {{msg.success}}
                <div class="form-group">
                    <label for="title">Title:</label>
                    <input type="text" name="title" class="form-control" id="exampleFormControlInput1" v-model="task.title">
                </div>
                <div class="form-group">
                    <label for="body">Body:</label>
                    <textarea type="text" name="body" class="form-control" id="exampleFormControlInput1" v-model="task.body"></textarea>
                </div>
                <button type="button" class="btn btn-danger" @click.prevent="deleteTask(task)">Delete</button>
                <button type="button" class="btn btn-primary" @click.prevent="updateTask(task)">✅Modifier✅</button>
    </form>
    <div v-else>Not logged.</div>
  </div>
</template>

<script>

    import { mapActions } from "vuex"
    import { mapGetters } from "vuex"
    export default {
        name: "Task",
        data() {
            return {
            };
        },
        computed: {
            ...mapGetters({'user': 'auth/user'}),
            ...mapGetters({'msg': 'auth/msg'}),
             ...mapGetters({'task': 'auth/task'})
        },
        methods: {
            ...mapActions({'task_user': 'auth/task_user'}),
            ...mapActions({'updateTask': 'auth/updateTask'}),
            ...mapActions({'deleteTask': 'auth/deleteTask'})
        },
        mounted(){
            this.task_user(this.$route.params.id)
            
        }
    }
</script>