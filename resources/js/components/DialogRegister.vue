<template>
  <v-card>
    <v-toolbar dark color="success">
      <v-btn icon dark @click.native="close">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title>Register</v-toolbar-title>
    </v-toolbar>
    <v-divider></v-divider>

    <v-container fluid>
      <v-form ref="form">
        <v-text-field
          v-model="name"
          label="Name"
          required
          append-icon="mdi-account"
        >
        </v-text-field>
        <v-text-field
          v-model="email"
          label="Email"
          required
          append-icon="mdi-email"
        >
        </v-text-field>
        <v-text-field
          v-model="password1"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          label="Password"
          counter
          @click:append="showPassword = !showPassword"
        >
        </v-text-field>
        <v-text-field
          v-model="password2"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          label="Confirm Password"
          counter
          @click:append="showPassword = !showPassword"
        >
        </v-text-field>
        <div class="text-xs-center">
          <v-btn color="success lighten-1" @click="register">
            Register
            <v-icon right dark>mdi-lock-open</v-icon>
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
      name: "",
      email: "",
      showPassword: false,
      password1: "",
      password2: "",
      apiDomain: "http://localhost:8000",
    };
  },

  methods: {
    ...mapActions({
      setAlert: "alert/set",
    }),
    close() {
      this.$emit("closed", false);
    },
    register() {
      //   let formData = new FormData();
      //   formData.append("name", this.name);
      //   formData.append("email", this.email);
      //   formData.append("password", this.password1);
      //   formData.append("password_confirmation", this.password2);
      const config = {
        method: "post",
        url: "http://localhost:8000/api/auth/register",
        data: {
          name: this.name,
          email: this.email,
          password: this.password1,
          password_confirmation: this.password2,
        },
      };
      this.axios(config)
        .then((response) => {
          console.log(response.data);
          this.setAlert({
            status: true,
            color: "success",
            text: "Register Berhasil",
          });
          this.close();
        })
        .catch((response) => {
          console.log(response);
          this.setAlert({
            status: true,
            color: "error",
            text: "Login Gagal",
          });
        });
    },
  },
};
</script>

<style>
</style>