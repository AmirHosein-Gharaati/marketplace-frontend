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
          <v-menu offset-y transition="slide-y-transition" bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon elevation="0" v-bind="attrs" v-on="on"
                ><v-icon>mdi-account</v-icon>
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list v-if="!isAuthenticated">
              <v-list-item v-for="(item, index) in dropDownItems" :key="index">
                <router-link :to="item.to">{{ item.name }}</router-link>
              </v-list-item>
            </v-list>
            <v-list v-else>
              <v-list-item class="d-flex flex-column">
                <v-btn class="mb-2" to="/dashboard/profile">Profile</v-btn>
                <v-btn @click="logout">Logout</v-btn>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary fixed>
      <Category
        v-for="cat in categories"
        :key="cat.id"
        :id="cat.id"
        :category="cat"
      />
    </v-navigation-drawer>
    <v-main>
      <Nuxt />
    </v-main>
    <v-footer height="180" :absolute="!fixed" app class="footer">
      <h2 class="pb-8">All rights reserved</h2>
      <h3>Mahmoud, Amirhosein, Hosein</h3>
    </v-footer>
  </v-app>
</template>

<script>
import Category from '@/components/Category.vue'
export default {
  name: 'DefaultLayout',
  components: {
    Category,
  },
  data() {
    return {
      clipped: false,
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
      ],
      dropDownItems: [
        { name: 'Login', to: '/login' },
        { name: 'Sign Up', to: '/signup' },
      ],
      categories: [],
    }
  },
  mounted() {
    this.getCategories()
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout')
    },
    async getCategories() {
      const data = await this.$store.dispatch('getAllCategories')
      this.categories = data.categories
    },
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters['auth/getIsAuthenticated']
    },
  },
}
</script>
