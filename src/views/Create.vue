<template>
  <div>
    <h1>Task: </h1>
    <form v-if="user.token">
        {{msg.success}}
                <div class="form-group">
                    <label for="title">Title:</label>
                    <input type="text" name="title" class="form-control" id="exampleFormControlInput1" v-model="form.title">
                </div>
                <div class="form-group">
                    <label for="body">Body:</label>
                    <textarea type="text" name="body" class="form-control" id="exampleFormControlInput1" v-model="form.body"></textarea>
                </div>
                <button type="button" class="btn btn-primary" @click.prevent="createTask(form)">✅Ajouter✅</button>
    </form>
    <div v-else>Not logged.</div>
  </div>
</template>

<script>

    import { mapActions } from "vuex"
    import { mapGetters } from "vuex"
    export default {
        name: "Create",
        data() {
            return {
                form: {
                    title: '',
                    body: ''
                }
            };
        },
        computed: {
            ...mapGetters({'user': 'auth/user'}),
            ...mapGetters({'msg': 'auth/msg'})
        },
        methods: {
            ...mapActions({'createTask': 'auth/createTask'}),
        },
        mounted(){
            
        }
    }
</script>