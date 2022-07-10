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
          <!-- Notification Dialog -->
          <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                elevation="0"
                v-bind="attrs"
                v-on="on"
                @click="onNotificationButtonPressed()"
                ><v-badge
                  color="red"
                  :content="haveMessage"
                  :value="haveMessage"
                  dot
                  overlap
                >
                  <v-icon> mdi-bell </v-icon>
                </v-badge></v-btn
              >
            </template>
            <v-card>
              <v-card-title class="text-h5 grey lighten-2">
                Notifications
              </v-card-title>

              <v-card-text>
                <v-list>
                  <v-list-item
                    v-for="notification in notifications"
                    :key="notification.id"
                    >{{ notification.text }}</v-list-item
                  >
                </v-list>
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="dialog = false"> Close </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-btn icon elevation="0" to="/dashboard/cart"
            ><v-icon>mdi-cart</v-icon></v-btn
          >
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
              <nuxt-img :src="user.avatar_url" />
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                {{ user.first_name + ' ' + user.last_name }}
              </v-list-item-title>
              <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
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
      dialog: false,
      notificationButtonPressed: false,
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
          to: '/dashboard/store/add',
        },
        {
          name: 'Edit Store',
          to: '/dashboard/store/edit',
        },
        {
          name: 'Add New Product',
          to: '/dashboard/product/add',
        },
        {
          name: 'Edit Product',
          to: '/dashboard/product/edit',
        },
      ],
      notifications: [
        {
          id: 1,
          text: 'This is first notification',
        },
        {
          id: 2,
          text: 'This is second notification',
        },
      ],
    }
  },
  computed: {
    user() {
      return this.$store.getters['user/getUser']
    },
    haveMessage() {
      return this.notifications.length > 0 && !this.notificationButtonPressed
    },
  },
  methods: {
    onNotificationButtonPressed() {
      this.dialog = true
      this.notificationButtonPressed = true
    },
  },
}
</script>
