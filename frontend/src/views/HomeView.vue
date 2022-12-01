<template>
  <v-container>
    <v-alert border="left" close-text="Close Alert" color="green accent-4" dark dismissible
            v-if="this.$route.params.message">{{ this.$route.params.message }}</v-alert>
    <v-row no-gutters="">
      <v-col sm="4" class="pa-3" v-for="post in posts" :key="post._id">
        <v-card class="pa-1" :to="{ name: 'post', params: { id: post._id } }">
          <v-img  height="250" :src="`${post.image}`">
          </v-img>
          <!-- <v-card >,
                        <v-row class="mt-1 mx-1">
                            <v-col sm="5">
                                <v-btn small outline color="primary" >{{ post.category }} </v-btn>
                            </v-col>
                            <v-col sm="7" class="d-flex justify-end" >
                                <v-btn color="success" text :to="{ name: 'edit-post', params: { id: post._id } }">Edit </v-btn>
                                <v-btn color="red" text>Delete</v-btn>
                            </v-col>
                        </v-row>
          </v-card> -->
          <v-card>
            <v-row>
              <v-col sm="5"><v-btn class="m1-4 mt-1.5" small outline color="indigo"
                  :to="{ name: 'edit-post', params: { id: post._id } }">
                  {{ post.category }}
                </v-btn></v-col>
              <v-col sm="7" class="d-flex justify-end">
                <v-btn class="m1-4 mt-1.5" small outline color="warning"
                  :to="{ name: 'edit-post', params: { id: post._id } }">
                  Edit
                </v-btn>
                <v-btn class="m1-4  mt-1.5" small outline color="red">
                  Delete
                </v-btn>
              </v-col>



            </v-row>


          </v-card>

          <v-card-title class="headline">
            {{ post.title }}
          </v-card-title>
          <v-card-text class="py-0">
            <!-- <p>
              {{ post.content }}
            </p> -->
            <!-- <p>{{  post.content.substring(0,  100)  +  "..."  }}</p> -->
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import API from '@/api';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      posts: [],
    };
  },
  async created() {
    this.posts = await API.getAllPost();
  }
});
</script>
