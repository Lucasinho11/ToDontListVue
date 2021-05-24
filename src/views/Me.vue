<template>
  <div>
    <h1>Mon compte</h1>

    <div v-if="user.data">
      <p>Pseudo: {{user.data.name}}</p>
      <p>Email: {{user.data.email}}</p>
    </div>
    <div v-else>Not logged.</div>
  </div>
</template>

<script>

    import { mapGetters } from "vuex"

    export default {
        name: "Me",
        data() {
            return {};
        },
        computed: {
            ...mapGetters({'user': 'auth/user'})
        }
    }
</script>
