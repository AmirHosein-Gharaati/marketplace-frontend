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
          :items="addressItems"
          :items-per-page="7"
          :search="search"
          @click:row="navigate"
        ></v-data-table>
      </v-card>
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
      addressItems: [
        {
          id: 1,
          city: 'Shiraz',
        },
        {
          id: 2,
          city: 'Estahban',
        },
      ],
    }
  },
  methods: {
    navigate(value) {
      const { id } = value
      this.$router.push(`/dashboard/profile/addresses/${id}`)
    },
  },
}
</script>
