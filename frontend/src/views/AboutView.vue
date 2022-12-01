<template>
  <v-container>
    <v-alert border="left" close-text="Close Alert" color="green accent-4" dark dismissible
      v-if="this.$route.params.message">{{ this.$route.params.message }}</v-alert>
    <v-row no-gutters="">
      <v-col sm="4" class="pa-3" v-for="post in users" :key="post._id">
        <v-card class="pa-1" >
          <v-img height="250" :src="`${post.image}`">
          </v-img>
          <v-card>
            <v-row>
              <v-col sm="5" class="d-flex justify-end">
                <v-btn class="m1-4  mt-1.5" small outline color="warning">
                  Khóa tài khoản
                </v-btn>
              </v-col>
              <v-col sm="7" class="d-flex justify-end">
                
                <v-btn class="m1-4  mt-1.5" small outline color="red" @click="removePost(post._id)">
                  Xóa
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
          <v-card-title class="headline ">
            Họ và tên: {{ post.name }}
          </v-card-title>
          <v-card-text class="py-0">
            <p>Năm Sinh: {{ format_date(post.year) }}</p>
            <p>Số điện thoại: {{ post.phone }} </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import APIuser from '@/apiuser';
import { defineComponent } from 'vue';
import moment from 'moment'

export default defineComponent({
  name: 'AboutView',
  data() {
    return {
      users: [],
    };
  },
  async created() {
    this.users = await APIuser.getAllUser();
  },

  methods: { 
    async removePost(id) {
      const response = await APIuser.deletePost(id);
      this.$router.push({ path: "about", params: { message: response.message } });
    },
      format_date(value){
         if (value) {
           return moment(String(value)).format('DD/MM/YYYY')
          }
      },
      
   },
});
</script>
