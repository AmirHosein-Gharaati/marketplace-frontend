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
                    name="name"
                    label="Name"
                    type="text"
                    outlined
                  ></v-text-field>
                  <v-text-field
                    name="country"
                    label="Country"
                    type="text"
                    outlined
                  ></v-text-field>
                  <v-text-field
                    name="city"
                    label="City"
                    type="text"
                    outlined
                  ></v-text-field>
                  <v-text-field
                    name="postal code"
                    label="Postal code"
                    type="text"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    name="owner"
                    label="Owner"
                    type="text"
                    outlined
                  ></v-text-field>
                  <v-text-field
                    name="province"
                    label="Province"
                    type="text"
                    outlined
                  ></v-text-field>
                  <v-text-field
                    name="street"
                    label="Street"
                    type="text"
                    outlined
                  ></v-text-field>
                  <v-text-field
                    prepend-inner-icon="mdi-attachment"
                    name="avatar"
                    label="avatar"
                    type="text"
                    outlined
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-textarea outlined placeholder="Description"></v-textarea>
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
  name: 'AddressNew',
  layout: 'dashboard',
  data() {
    return {}
  },
  methods: {
    onSubmit() {
      console.log('Submitted!')
    },
  },
}
</script>
