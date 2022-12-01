<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <v-container>
        <v-row>
            <v-col sm="10" class="pa-4 mx-auto">
                <v-card class="pa-2">
                    <v-img height="300" :src="`${post.image}`"></v-img>
                    <v-card-action class="pb-0">,
                        <v-row class="mt-1 mx-1">
                            <v-col sm="2">
                                <v-btn small outline color="primary" >{{ post.category }}</v-btn>
                            </v-col>
                            <v-col sm="10" class="d-flex justify-end" >
                                <!-- <v-btn color="success" text >Edit </v-btn> -->
                                <v-btn color="red" text  @click="removePost(post._id)">Delete</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-action>
                    <v-card-subtitle class="headline">
                        <h3>{{ post.title }}</h3>
                    </v-card-subtitle>
                    <v-card-text class="grey--text">
                        <p>{{ post.content }}</p>
                        <v-divider class="pa-2"></v-divider>
                        <p>Ngày tạo: {{ post.created }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import API from "../api";

export default {
    data() {
        return {
            post: {},
        };
    },
    async created() {
        const response = await API.getPostByID(this.$route.params.id);
        this.post = response;
    },
    methods: {
    async removePost(id) {
      const response = await API.deletePost(id);
      this.$router.push({ name: "home", params: { message: response.message } });
    }
  },
    
}

</script>