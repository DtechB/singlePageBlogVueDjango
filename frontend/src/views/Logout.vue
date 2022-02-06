<template>
  <div class="Logout">
    <h2>Logout</h2>
    <button class="btn btn-danger" @click="do_logout">Logout</button>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "Logout",
  methods: {
    do_logout() {
      axios
          .post('/api/auth/token/logout/')
          .then(response => {
            this.$store.commit('logout')
            this.$router.push('/login')
          })
          .catch(error => {
            console.log(error.response.data)
          })
    }
  }
}
</script>

<style scoped>

</style>