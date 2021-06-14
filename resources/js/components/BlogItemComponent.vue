<template>
  <v-flex xs6>
    <v-card :to="'/blog/' + blog.id">
      <v-img :src="blog.photo" class="white--text" height="250px">
        <v-card-title class="fill-height align-end text-h6">
          <span class="pa-2 teal rounded-pill" v-text="blog.title"></span>
        </v-card-title>
      </v-img>

      <v-card-actions>
        <v-progress-linear color="blue-grey" height="7"> </v-progress-linear>
      </v-card-actions>

      <v-card-actions class="ps-2">
        <span v-text="blog.content"></span>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>
<script>
export default {
  props: ["blog"],
};
</script>