<template>
  <div class="Register">
    <div class="row">
      <div class="col-md-6 mx-auto border rounded rounded-3 shadow p-4">
        <h2 class="mt-3 mb-4 text-center">Register</h2>
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
              {{usernameEM}}
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
              {{passwordEM}}
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label">Repeat Password</label>
            <input
                type="password"
                class="form-control"
                id="password2"
                v-model="password2"
                :class="{
                  'is-invalid': password2E===true,
                  'is-valid': password2E===false
                }">
            <div class="invalid-feedback">
              {{password2EM}}
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      username: '',
      password: '',
      password2: '',
      usernameE: null,
      usernameEM: null,
      passwordE: null,
      passwordEM: null,
      password2E: null,
      password2EM: null
    }
  },
  methods: {
    do_login() {
      let access = true
      if (this.username.length < 5) {
        access = false
        this.usernameE = true
        if (this.username.length === 0)
          this.usernameEM = "Username requires"
        else this.usernameEM = "Username most be at least 5 character!"
      } else {
        this.usernameE = false
        this.usernameEM = ''
      }
      if (this.password.length < 8) {
        access = false
        this.passwordE = true
        if (this.password.length === 0)
          this.passwordEM = "Password requires"
        else this.passwordEM = "Password most be at least 8 character!"
      } else {
        this.passwordE = false
        this.passwordEM = ''
      }
      if (this.password2.length < 8) {
        access = false
        this.password2E = true
        if (this.password2.length === 0)
          this.password2EM = "Repeat password requires"
        else this.password2EM = "Repeat password most be at least 8 character!"
      } else {
        this.password2E = false
        this.password2EM = ''
      }
      if (this.password2 !== this.password) {
        access = false
        this.passwordE = true
        this.password2E = true
        this.passwordEM = "Passwords aren't same!"
        this.password2EM = "Passwords aren't same!"
      } else {
        if (!this.passwordE && !this.password2E)
          this.password2EM = ''
      }

      if (access) {
        axios
            .post('/api/auth/users/', {
              username: this.username,
              password: this.password
            })
            .then(response => {
              this.$router.push('/login')
            })
            .catch(error => {
              if (error.response.data.username) {
                this.usernameE = true
                this.usernameEM = error.response.data.username.join(" ")
              }
              if (error.response.data.password) {
                this.passwordE = true
                this.password2E = true
                this.passwordEM = error.response.data.password.join(" ")
              }
            })
      }
    }
  }
}
</script>

<style scoped>

</style>