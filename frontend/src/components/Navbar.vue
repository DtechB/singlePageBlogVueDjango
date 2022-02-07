<template>
  <nav id="nav" class="navbar sticky-top shadow-sm navbar-expand-lg navbar-light mb-5" style="background-color: #e3f2fd;">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Single Page</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03"
              aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor03">
        <ul class="navbar-nav m-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/add" v-if="$store.state.isAuthenticated">Add Article</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/profile" v-if="$store.state.isAuthenticated">Profile</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login" v-if="!$store.state.isAuthenticated">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/register" v-if="!$store.state.isAuthenticated">Register</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/logout" v-if="$store.state.isAuthenticated">Logout</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar"
}
</script>

<style scoped>

</style>