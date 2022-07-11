<template>
  <div class="container px-16">
    <div class="addresses">
      <v-card>
        <v-card-title>
          Orders
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
          :items="addresses"
          :items-per-page="5"
          :search="search"
          @click:row="navigate"
        ></v-data-table>
      </v-card>
      <div class="py-4"></div>
      <v-btn to="/dashboard/profile/addresses/new">Add New Address</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Addresses',
  layout: 'dashboard',
  data() {
    return {
      search: null,
      headers: [
        {
          text: 'ID',
          value: 'id',
        },
        {
          text: 'City',
          value: 'city',
        },
      ],
      addresses: [],
    }
  },
  mounted() {
    this.getAllAddresses()
  },
  methods: {
    async getAllAddresses() {
      const data = await this.$store.dispatch('address/getAllAddresses')

      this.addresses = data.addresses
    },
    navigate(value) {
      const { id } = value
      this.$router.push(`/dashboard/profile/addresses/${id}`)
    },
  },
}
</script>
