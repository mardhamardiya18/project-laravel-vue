<template>
  <v-card>
    <v-toolbar dark color="success">
      <v-btn icon dark @click.native="close">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title>Tambah Blog</v-toolbar-title>
    </v-toolbar>
    <v-divider></v-divider>

    <v-container fluid>
      <v-form ref="form">
        <v-text-field
          v-model="title"
          label="Judul"
          required
          append-icon="mdi-pencil"
        >
        </v-text-field>
        <v-text-field
          v-model="content"
          label="Konten"
          required
          append-icon="mdi-pencil"
        >
        </v-text-field>
        <v-text-field
          v-model="photo"
          label="Link Photo"
          required
          append-icon="mdi-pencil"
        >
        </v-text-field>
        <div class="text-xs-center">
          <v-btn color="success lighten-1" @click="upload">
            UPLOAD
            <v-icon right dark>mdi-upload</v-icon>
          </v-btn>
        </div>
      </v-form>
    </v-container>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      title: "",
      content: "",
      photo: "",
      apiDomain: "http://localhost:8000",
      preview: null,
    };
  },

  methods: {
    ...mapActions({
      setAlert: "alert/set",
      setToken: "auth/setToken",
    }),
    close() {
      this.$emit("closed", false);
    },
    upload() {
      let data = new FormData();
      data.append("title", this.title);
      data.append("content", this.content);
      data.append("photo", this.photo);

      const config = {
        method: "post",
        url: this.apiDomain + "/api/blog",
        data: data,
      };

      axios(config)
        .then((response) => {
          alert(response.data.message);
          this.close();
          window.location.href = "http://localhost:8000";
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>