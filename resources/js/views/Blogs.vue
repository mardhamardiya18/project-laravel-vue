<template>
  <v-container class="ma-0 pa-0" grid-list-sm>
    <v-subheader wrap>
      All Blogs
      <v-btn class="ma-4" @click="tambah" color="success"
        ><v-icon left>mdi-plus</v-icon> Tambah Blog
      </v-btn>
    </v-subheader>
    <v-layout wrap>
      <blog-item-component
        v-for="blog in blogs"
        :key="`blog -` + blog.id"
        :blog="blog"
      ></blog-item-component>
    </v-layout>
  </v-container>
</template>
<script>
import { mapActions } from "vuex";
import BlogComponent from "../components/BlogItemComponent";
export default {
  components: {
    "blog-item-component": BlogComponent,
  },
  data: () => ({
    blogs: [],
  }),
  methods: {
    getBlogs() {
      const config = {
        method: "get",
        url: "http://localhost:8000/api/blog",
      };

      axios(config)
        .then((Response) => {
          this.blogs = Response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    tambah() {
      this.setDialogComponent({ component: "DialogTambahBlog" });
    },
    ...mapActions({
      setDialogComponent: "dialog/setComponent",
    }),
  },
  created() {
    this.getBlogs();
  },
};
</script>