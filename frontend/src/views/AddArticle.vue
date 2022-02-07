<template>
  <div class="home mb-4">
    <h1 class="text-center mb-5">Add Article</h1>
    <form @submit.prevent="doAdd">
      <div class="mb-3">
        <label class="form-label">Title</label>
        <input type="text" class="form-control" id="titleInput" v-model="title" required>
      </div>
      <div class="mb-3">
        <label class="form-label">Description</label>
        <textarea class="form-control" id="descInput" rows="5" v-model="description" required></textarea>
      </div>
      <div class="mb-3">
        <label class="form-label">Content</label>
        <textarea class="form-control" id="contentInput" rows="9" v-model="content" required></textarea>
      </div>
      <button type="submit" class="btn btn-success">Add</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Home',
  data() {

    return {
      title: '',
      description: '',
      content: ''
    }
  },
  methods: {
    doAdd() {
      let article = {
        title: this.title,
        slug: this.title.replaceAll(" ", '-').toLowerCase(),
        description: this.description,
        content: this.content
      }
      axios
        .post('/article/', article)
        .then(response => {
          this.$router.push('/')
        })
    }
  }
}
</script>
