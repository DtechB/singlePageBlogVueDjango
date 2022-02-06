<template>
  <Navbar />
  <router-view class="container"/>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import router from "@/router";

export default {
  name: 'App',
  components: {
    Navbar
  },
  watch: {
    $route() {
      this.$store.dispatch('onStart')
    }
  },
  mounted() {
    this.$store.dispatch('onStart')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #4c8bff;
}

#nav .navbar-brand {
  color: #000 !important;
}
</style>
