<template>
  <div class="home">
    <h1 class="text-center mb-5">Home</h1>
    <article v-for="article in articles">
      <h3><router-link :to="`/article/${article.slug}`">{{article.title}}</router-link></h3>
      <div>{{article.description}} <router-link :to="`/article/${article.slug}`">+ more</router-link></div>
      <hr />
    </article>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Home',
  data() {
    return {
      articles: ''
    }
  },
  mounted() {
    axios
      .get('/article/')
      .then(response => {
        this.articles = response.data
      })
  }
}
</script>
