<template>
  <div class="container px-16">
    <div class="address-detail">
      <v-card class="elevation-12">
        <v-toolbar color="primary">
          <v-toolbar-title>New Address</v-toolbar-title>
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
          <v-btn @click="onSubmit()">Add</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddressDetail',
  layout: 'dashboard',
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
  methods: {
    async onSubmit() {
      const data = await this.$store.dispatch(
        'address/createAddress',
        this.address
      )

      console.log(data)

      if (data.status == 'ok') {
        this.$router.replace('./')
      }
    },
  },
}
</script>
