<template>
  <div id="nav">
    <router-link to="/">Home </router-link> |
    
    <div v-if="!user.token">
      <router-link to="/register">Register</router-link> |
      <router-link to="/login">Login</router-link> |
    </div>
    
    <div v-if="user.token">
      <router-link to="/tasks">Tasks</router-link> |
      <router-link to="/me">Me</router-link> |
      <a href="/home" @click.prevent="logout">Logout</a>
    </div>
    
  </div>
  <router-view/>
</template>

<script>

    import { mapActions } from "vuex"
    import { mapGetters } from "vuex"


    export default {
      data() {
            return {};
        },
        computed: {
            ...mapGetters({'user': 'auth/user'})
        },
        methods: {
            ...mapActions({'logout': 'auth/logout'})
        }
    }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
