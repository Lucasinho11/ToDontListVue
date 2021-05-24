<template>
  <div>
    <h1>Task: </h1>
    <form v-if="user.token">
        <p v-if="msg.success" style="color: green">{{msg.success}}</p>
                <div class="form-group">
                    <label for="title">Title:</label>
                    <input type="text" name="title" class="form-control" id="exampleFormControlInput1" v-model="task.title">
                </div>
                <div class="form-group">
                    <label for="body">Body:</label>
                    <textarea type="text" name="body" class="form-control" id="exampleFormControlInput1" v-model="task.body"></textarea>
                </div>
                <button type="button" class="btn btn-danger" @click.prevent="delTask(task)" style="margin-right: 2%">❌Delete❌</button>
                <button type="button" class="btn btn-primary" v-if="task.title.length !=0 && task.body.length !=0" @click.prevent="upTask(task)" style="margin-left: 2%">✅Modifier✅</button>
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
            ...mapActions({'deleteTask': 'auth/deleteTask'}),
            delTask(task){
                this.deleteTask(task)
                this.$router.push('/tasks');
            },
            upTask(task){
                this.updateTask(task)
                this.$router.push('/tasks');
            }
        },
        mounted(){
            this.task_user(this.$route.params.id)
            this.msg.success = ''
        }
    }
</script>