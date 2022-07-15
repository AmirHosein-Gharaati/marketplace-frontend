<template>
  <div class="container px-16">
    <div class="store container">
      <div class="store__list">
        <v-card>
          <v-card-title>
            Stores
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="storeItems"
            :items-per-page="5"
            :search="search"
            @click:row="navigate"
          ></v-data-table>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Store',
  layout: 'dashboard',
  data() {
    return {
      search: null,
      headers: [],
      storeItems: [],
    }
  },
  mounted() {
    this.getMyStores()
  },
  methods: {
    async getMyStores() {
      const data = await this.$store.dispatch('store/getMyStores')

      this.storeItems = data.stores
    },
    navigate(value) {
      console.log(value)
    },
  },
}
</script>
