<template>
  <div class="home mb-4">
    <h1 class="text-center mb-5">Details</h1>
    <form @submit.prevent="doAdd">
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
      <button type="submit" class="btn btn-success">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    let articles = localStorage.getItem("articles")
    articles = JSON.parse(articles)
    return {
      articles: articles,
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
      this.articles.push(article)
      let database = JSON.stringify(this.articles)
      localStorage.setItem("articles", database)
      this.$router.push(`/article/${article.slug}`)
    }
  }
}
</script>
