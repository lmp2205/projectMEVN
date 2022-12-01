<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-list-item>
        <v-list-content>
          <v-list-item-title>
            Website Hệ Thống
          </v-list-item-title>
          <v-list-item-subtitle>
            Version: Demo
          </v-list-item-subtitle>
        </v-list-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list density="compact">
        <v-list-subheader>Thanh Điều Hướng</v-list-subheader>
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

      <v-toolbar-title>Quản lý Website</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => (
    {
      drawer: null,
      items: [
        { title: 'Trang chủ', icon: 'mdi-home-modern', link: '/' },
        { title: 'Thêm sản phẩm', icon: 'mdi-grease-pencil', link: '/add-post' },
        { title: 'Quản lý người dùng', icon: 'mdi-account', link: '/about' },
        { title: 'Đăng Xuất', icon: 'mdi-logout-variant', link: '/login' },
      ],
    }
  ),
}
</script>