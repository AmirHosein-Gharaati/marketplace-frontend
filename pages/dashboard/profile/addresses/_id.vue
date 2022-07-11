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
                    v-model="address.country"
                    label="Country"
                    type="text"
                    outlined
                  ></v-text-field>
                  <v-text-field
                    v-model="address.province"
                    label="Province"
                    type="text"
                    outlined
                  ></v-text-field>
                  <v-text-field
                    v-model="address.city"
                    label="City"
                    type="text"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="address.street"
                    label="Street"
                    type="text"
                    outlined
                  ></v-text-field>
                  <v-text-field
                    v-model="address.postal_code"
                    label="Postal Code"
                    type="text"
                    outlined
                  ></v-text-field>
                  <v-text-field
                    v-model="address.home_phone_number"
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
      this.address = data.address
    },
    async onEdit() {
      const payload = {
        country: this.address.country,
        province: this.address.province,
        city: this.address.city,
        street: this.address.street,
        postal_code: this.address.postal_code,
        home_phone_number: this.address.home_phone_number,
      }

      const data = await this.$store.dispatch('address/updateAddress', {
        id: this.id,
        payload: payload,
      })
    },
    async onDelete() {
      const data = await this.$store.dispatch('address/deleteAddress', this.id)
      console.log(data)

      if (data.status == 'ok') {
        this.$router.replace('./')
      }
    },
  },
  data() {
    return {
      address: {
        country: '',
        province: '',
        city: '',
        street: '',
        postal_code: '',
        home_phone_number: '',
      },
    }
  },
}
</script>
