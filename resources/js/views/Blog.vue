<template>
  <div>
    <v-card>
      <v-img :src="blog.photo" class="white--text" height="200px">
        <v-card-title class="fill-height align-end" v-text="blog.title">
        </v-card-title>
      </v-img>

      <v-card-text>
        <v-simple-table dense>
          <tbody>
            <tr>
              <td><v-icon>mdi-format-title</v-icon>Judul</td>
              <td class="blue--text">{{ blog.title }}</td>
            </tr>
            <tr>
              <td><v-icon>mdi-note</v-icon>Deskripsi</td>
              <td>
                {{ blog.content }}
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-card-text>
      <v-flex class="py-4 px-2">
        <v-btn right color="error" @click="hapus(blog.id)">Delete</v-btn>
        <v-btn right color="primary" @click="edit">Edit</v-btn>
      </v-flex>
    </v-card>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    apiDomain: "http://localhost:8000/api",
    blog: {},
  }),
  methods: {
    detail() {
      let { id } = this.$route.params;
      const config = {
        methods: "get",
        url: `${this.apiDomain}/blog/${id}`,
      };
      axios(config)
        .then((Response) => {
          this.blog = Response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    hapus(id) {
      const config = {
        method: "delete",
        url: `http://localhost:8000/api/blog/${id}`,
      };

      axios(config)
        .then((response) => {
          alert(response.data.message);
          window.location.href = "http://localhost:8000";
        })
        .catch((error) => {
          console.log(error);
        });
    },
    edit() {
      this.setDialogComponent({
        component: "DialogEditBlog",
        params: this.blog,
      });
    },
    ...mapActions({
      setDialogComponent: "dialog/setComponent",
    }),
  },
  created() {
    this.detail();
  },
};
</script>