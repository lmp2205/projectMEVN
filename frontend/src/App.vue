<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-list-item>
        <v-list-content>
          <v-list-item-title>
            321
          </v-list-item-title>
          <v-list-item-subtitle>
            123
          </v-list-item-subtitle>
        </v-list-content>
      </v-list-item>
      <v-divider></v-divider>
    <v-list density="compact">
      <v-list-subheader>REPORTS</v-list-subheader>
      <v-list-item v-for="(item, i) in items" :key="i" :value="item" :to="item.link" link active-color="primary">
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title v-text="item.title"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: 'Home', icon: 'mdi-clock', link: '/' },
      { title: 'AddPost', icon: 'mdi-account', link: '/add-post' },
      { title: 'About', icon: 'mdi-flag', link: '/about' },
    ],
  }),
}
</script>