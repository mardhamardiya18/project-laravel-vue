<template>
  <v-card>
    <v-toolbar dark color="success">
      <v-btn icon dark @click.native="close">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title>Edit Blog</v-toolbar-title>
    </v-toolbar>
    <v-divider></v-divider>

    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-text-field label="title" required v-model="title"></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            label="descrpition"
            v-model="description"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="error darken-1" text @click.native="close"> Cancel </v-btn>
      <v-btn color="green darken-1" text @click="edit"> Edit </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: () => ({
    apiDomain: "https://localhost:8000",
    blog: [],
    dialog: false,
    title: "",
    description: "",
  }),

  methods: {
    ...mapActions({
      setAlert: "alert/set",
      setToken: "auth/setToken",
    }),
    close() {
      this.$emit("closed", false);
    },
    edit() {
      let id = this.params.id;
      let formData = new FormData();
      formData.append("title", this.title);
      formData.append("description", this.description);
      const config = {
        method: "post",
        url: this.apiDomain + "/api/blog/" + id,
        headers: { Authorization: "Bearer " + this.token },
        params: { _method: "PUT" },
        data: formData,
      };
      this.axios(config)
        .then((response) => {
          console.log(response);
          console.log("success");
          this.setAlert({
            status: true,
            color: "success",
            text: "Blog Berhasil dihapus",
          });
          this.close();
          this.$router.go(-1);
        })
        .catch((response) => {
          console.log("gagal");
          console.log(response);
          this.setAlert({
            status: true,
            color: "error",
            text: "Gagal",
          });
        });
    },
  },
  computed: {
    ...mapGetters({
      params: "dialog/params",
      guest: "auth/guest",
      user: "auth/user",
      token: "auth/token",
    }),
  },
  mounted() {
    if (this.token) {
      this.checkToken(this.token);
      this.title = this.params.title;
      this.description = this.params.description;
      this.dialog = true;
    }
  },
};
</script>
