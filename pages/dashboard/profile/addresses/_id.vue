<template>
  <div class="container px-16">
    <div class="address-detail">
      <v-card class="elevation-12">
        <v-toolbar color="primary">
          <v-toolbar-title>Modify Address</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-container>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Country"
                    type="text"
                    outlined
                  ></v-text-field>
                  <v-text-field
                    v-model="province"
                    label="Province"
                    type="text"
                    outlined
                  ></v-text-field>
                  <v-text-field
                    v-model="city"
                    label="City"
                    type="text"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="street"
                    label="Street"
                    type="text"
                    outlined
                  ></v-text-field>
                  <v-text-field
                    v-model="postal_code"
                    label="Postal Code"
                    type="text"
                    outlined
                  ></v-text-field>
                  <v-text-field
                    v-model="home_phone_number"
                    label="Home Phone Number"
                    type="text"
                    outlined
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
        <v-card-actions class="justify-center pb-8">
          <v-btn @click="onEdit()">Edit</v-btn>
          <v-btn class="red" @click="onDelete()">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddressDetail',
  layout: 'dashboard',
  asyncData({ params }) {
    return {
      id: params.id,
    }
  },
  mounted() {
    this.getAddressById()
  },
  methods: {
    async getAddressById() {
      const data = await this.$store.dispatch('address/getAddressById', this.id)
      // const address = data.address

      // this.country = address.country
      // this.province = address.province
      // this.city = address.city
      // this.street = address.street
      // this.postal_code = address.postal_code
      // this.home_phone_number = address.home_phone_number
    },
    onEdit() {
      console.log('Submitted!')
    },
    onDelete() {
      console.log('Deleting')
    },
  },
  data() {
    return {
      country: '',
      province: '',
      city: '',
      street: '',
      postal_code: '',
      home_phone_number: '',
    }
  },
}
</script>
