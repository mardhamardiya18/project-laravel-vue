<template>
  <v-app>
    <Alert />
    <Dialog />
    <!-- navbar -->
    <v-app-bar app color="blue darken-2">
      <v-app-bar-nav-icon
        class="white--text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="white--text">BLOG APP</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <!--sidebar  -->
    <v-navigation-drawer app color="blue darken-4" v-model="drawer">
      <v-list>
        <v-list-item v-if="!guest">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/85.jpg">
            </v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title
              class="white--text"
              v-text="user.nama"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <div class="pa-4" v-if="guest">
          <v-btn block color="primary" @click="login" class="mb-2">
            <v-icon left>mdi-lock</v-icon>
            Login
          </v-btn>
          <v-btn block color="success" @click="register">
            <v-icon left>mdi-account</v-icon>
            Register
          </v-btn>
        </div>

        <v-divider></v-divider>

        <v-list-item
          v-for="(item, index) in menus"
          :key="`menu-${index}`"
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon left class="white--text" v-text="item.icon"></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title
              class="white--text"
              v-text="item.title"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-5">
          <v-btn block color="red" @click="logout" v-if="guest" dark>
            <v-icon left>mdi-lock</v-icon>
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <!-- Body Content -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <v-slide-y-transition>
          <!-- If using vue-router -->
          <router-view></router-view>
        </v-slide-y-transition>
      </v-container>
    </v-main>
    <!-- Footer -->
    <v-footer color="blue darken-2" padless>
      <v-col class="text-center white--text" cols="12">
        {{ new Date().getFullYear() }} —
        <strong class="white--text">Project UAS Front-End</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Alert: () => import("./components/Alert"),
    Dialog: () => import("./components/Dialog.vue"),
  },
  data: () => ({
    drawer: true,
    menus: [
      { title: "Home", icon: "mdi-home", route: "/" },
      { title: "Blogs", icon: "mdi-note", route: "/blogs" },
    ],
  }),
  computed: {
    ...mapGetters({
      guest: "auth/guest",
      user: "auth/user",
    }),
  },

  methods: {
    login() {
      this.setDialogComponent({ component: "login" });
    },
    register() {
      this.setDialogComponent({ component: "DialogRegis" });
    },
    logout() {
      const config = {
        method: "post",
        url: `http://localhost:8000/api/auth/logout`,
      };

      axios(config)
        .then((response) => {
          alert(response.data.message);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    ...mapActions({
      setAlert: "alert/set",
      setDialogComponent: "dialog/setComponent",
    }),
  },
};
</script>