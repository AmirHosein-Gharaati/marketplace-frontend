<template>
  <v-app>
    <v-app-bar
      height="80"
      fixed
      elevate-on-scroll
      color="primary"
      class="px-8"
      app
    >
      <div class="navbar-wrapper">
        <div class="navbar__left">
          <v-app-bar-nav-icon @click="drawer = true"> </v-app-bar-nav-icon>
          <span class="ml-n2 mr-2 font-weight-bold">Categories</span>

          <router-link
            v-for="route in routes"
            :key="route.name"
            :to="route.to"
            class="px-4"
            >{{ route.name }}</router-link
          >
          <v-autocomplete
            v-model="searchModel"
            color="white"
            label="MarketPlace!"
            placeholder="Start typing to Search"
            prepend-icon="mdi-magnify"
            return-object
            hide-details
            solo
            rounded
            class="px-4"
          ></v-autocomplete>
        </div>

        <div class="navbar__right">
          <v-btn icon elevation="0"><v-icon>mdi-cart</v-icon></v-btn>
        </div>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main class="layout-dashboard">
      <v-navigation-drawer right fixed app permanent>
        <v-list>
          <v-list-item class="px-2 d-flex justify-center">
            <v-list-item-avatar width="120" height="120">
              <v-img
                src="https://randomuser.me/api/portraits/women/85.jpg"
              ></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                Sandra Adams
              </v-list-item-title>
              <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list nav dense>
          <v-list-item
            v-for="route in userDrawerRoutes"
            :key="route.to"
            link
            :to="route.to"
          >
            <v-list-item-icon>
              <v-icon>{{ route.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ route.name }}</v-list-item-title>
          </v-list-item>

          <v-expansion-panels flat accordion hover>
            <v-expansion-panel>
              <v-expansion-panel-header>
                <div>
                  <v-icon class="pr-7">mdi-store</v-icon>
                  <span>Store</span>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-list-item
                  v-for="route in storeRoutes"
                  :key="route.to"
                  link
                  :to="route.to"
                >
                  <v-list-item-title>{{ route.name }}</v-list-item-title>
                </v-list-item>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-list>
      </v-navigation-drawer>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DashboardLayout',
  data() {
    return {
      fixed: false,
      title: 'Marketplace',
      drawer: false,
      group: null,
      searchModel: null,
      routes: [
        {
          name: 'Home',
          to: '/',
        },
        {
          name: 'Products',
          to: '/products',
        },
        {
          name: 'FAQ',
          to: '/faq',
        },
      ],
      userDrawerRoutes: [
        {
          name: 'Profile',
          to: '/dashboard/profile',
          icon: 'mdi-account',
        },
        {
          name: 'Orders',
          to: '/dashboard/orders',
          icon: 'mdi-cash',
        },
      ],
      storeRoutes: [
        {
          name: 'Add New Store',
          to: '/dashboard/store/add-new-store',
        },
        {
          name: 'Edit Store',
          to: '/dashboard/store/edit-store',
        },
        {
          name: 'Add New Product',
          to: '/dashboard/store/add-new-product',
        },
        {
          name: 'Edit Product',
          to: '/dashboard/store/edit-store',
        },
      ],
    }
  },
}
</script>
