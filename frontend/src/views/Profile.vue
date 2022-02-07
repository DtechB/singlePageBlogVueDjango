<template>
  <div class="Profile">
    <h1>This is an profile page</h1>
    <div class="alert alert-success">Hello {{ this.username }} welcome to our website</div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  data() {
    return {
      username: '',
    }
  },
  mounted() {
    axios
      .get('/api/auth/users/me/')
      .then(response => {
        this.username = response.data.username
      })
  }
}
</script>
