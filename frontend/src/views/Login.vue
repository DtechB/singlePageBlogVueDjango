<template>
  <div class="Login">
    <div class="row">
      <div class="col-md-6 mx-auto border rounded rounded-3 shadow p-4">
        <h2 class="mt-3 mb-4 text-center">Login</h2>
        <form @submit.prevent="do_login">
          <div class="mb-3">
            <label class="form-label">Username</label>
            <input
                type="text"
                class="form-control"
                id="username"
                v-model="username"
                :class="{
                  'is-invalid': usernameE===true,
                  'is-valid': usernameE===false
                }">
            <div class="invalid-feedback">
              {{ usernameEM }}
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label">Password</label>
            <input
                type="password"
                class="form-control"
                id="password"
                v-model="password"
                :class="{
                  'is-invalid': passwordE===true,
                  'is-valid': passwordE===false
                }">
            <div class="invalid-feedback">
              {{ passwordEM }}
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "Login",
  data() {
    return {
      username: '',
      password: '',
      usernameE: null,
      usernameEM: null,
      passwordE: null,
      passwordEM: null
    }
  },
  methods: {
    do_login() {
      let access = true
      if (this.username.length < 5) {
        access = false
        this.usernameE = true
        if (this.username.length === 0)
          this.usernameEM = "Username Requires"
        else this.usernameEM = "Username most be at least 5 character!"
      } else {
        this.usernameE = false
        this.usernameEM = ''
      }
      if (this.password.length < 8) {
        access = false
        this.passwordE = true
        if (this.password.length === 0)
          this.passwordEM = "Username requires"
        else this.passwordEM = "Username most be at least 8 character!"
      } else {
        this.passwordE = false
        this.passwordEM = ''
      }

      if (access) {
        axios
            .post('/api/auth/token/login/', {
              username: this.username,
              password: this.password
            })
            .then(response => {
              console.log(response)
              this.$store.commit('login', response.data.auth_token)
              this.$router.push('/profile')
            })
            .catch(error => {
              this.usernameE = true
              this.passwordE = true
              this.passwordEM = error.response.data.non_field_errors.join(" ")
            })

      }
    }
  }
}
</script>

<style scoped>

</style>