<template>
  <div>
    <h1>Login</h1>

    <p v-if="msg.success" style="color: green">{{msg.success}}</p>
    <p v-if="msg.error" style="color: red">{{msg.error}}</p>
    <form @submit.prevent="loginUser(form)">
        <label for="email">Email</label><br>
        <input type="email" id="email" name="email" v-model="form.email"><br>

        <label for="password">Password</label><br>
        <input type="password" id="password" name="password" v-model="form.password"><br><br>

        <button type="submit" class="btn btn-primary">Se connecter</button>
    </form>
  </div>
</template>

<script>
    import { mapActions } from "vuex"
    import { mapGetters } from "vuex"
    export default {
        name: "Login",
        data() {
            return {
                form: {}
            };
        },
        methods: {
            ...mapActions({'login': 'auth/login'}),
            loginUser(form){
                this.login(form)
                this.$router.push('/');
            }
        },
        computed: {
            ...mapGetters({'msg': 'auth/msg'})
        },
        mounted(){
            this.msg.success = ''
            this.msg.error = ''
        }
    }
</script>
