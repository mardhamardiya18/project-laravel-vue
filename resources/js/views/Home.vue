<template>
  <v-container class="ma-0 pa-0" grid-list-sm>
    <div class="text-right">
      <v-btn small text class="blue--text" to="/blogs">
        All Blogs <v-icon>mdi-chevrom-right</v-icon>
      </v-btn>
    </div>
    <v-layout wrap>
      <blog-component
        v-for="blog in blogs"
        :key="`blog-` + blog.id"
        :blog="blog"
      ></blog-component>
    </v-layout>
  </v-container>
</template>
<script>
import BlogComponent from "../components/BlogItemComponent";
export default {
  data: () => ({
    blogs: [],
  }),
  components: {
    "blog-component": BlogComponent,
  },
  methods: {
    getBlogs() {
      const config = {
        method: "get",
        url: "http://localhost:8000/api/blog/random/2",
      };

      axios(config)
        .then((Response) => {
          this.blogs = Response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getBlogs();
  },
};
</script>
