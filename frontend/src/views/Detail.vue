<template>
  <div class="home">
    <h1 class="text-center mb-5">Details</h1>
    <article>
      <h3>{{ article.title }}</h3>
      <div>{{ article.content }}</div>
    </article>
    <div v-if="$store.state.isAuthenticated">
      <hr/>
      <button class="btn btn-warning me-2" @click="edit=!edit">Edit</button>
      <button class="btn btn-danger" @click="doRemove">Remove</button>
      <hr/>
      <form @submit.prevent="doEdit" v-if="edit" class="pb-5">
        <div class="mb-3">
          <label class="form-label">Title</label>
          <input type="text" class="form-control" id="titleInput" v-model="title">
        </div>
        <div class="mb-3">
          <label class="form-label">Description</label>
          <textarea class="form-control" id="descInput" rows="5" v-model="description"></textarea>
        </div>
        <div class="mb-3">
          <label class="form-label">Content</label>
          <textarea class="form-control" id="contentInput" rows="9" v-model="content"></textarea>
        </div>
        <button type="submit" class="btn btn-success">Edit</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Home',
  data() {
    return {
      article: {},
      title: '',
      description: '',
      content: '',
      edit: false
    }
  },
  mounted() {
    axios
        .get(`/article/${this.$route.params.slug}/`)
        .then(response => {
          this.article = response.data
          this.title = this.article.title
          this.description = this.article.description
          this.content = this.article.content
        })
  },
  methods: {
    doEdit() {
      let article = {
        title: this.title,
        slug: this.title.replaceAll(" ", '-').toLowerCase(),
        description: this.description,
        content: this.content
      }
      axios
          .put(`/article/${this.$route.params.slug}/`, article)
          .then(response => {
            this.article= article
            this.edit = false
            this.$router.push(`/article/${this.$route.params.slug}`)
          })
    },
    doRemove() {

    }
  }
}
</script>
