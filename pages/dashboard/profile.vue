<template>
  <div class="container px-16">
    <div class="profile">
      <v-container>
        <v-row>
          <v-col>
            <v-text-field
              :value="user.id"
              placeholder="ID"
              label="ID"
              outlined
            ></v-text-field>
            <v-text-field
              :value="user.firstName"
              label="First Name"
              placeholder="First Name"
              outlined
            ></v-text-field>
            <v-text-field
              :value="user.lastName"
              placeholder="Last Name"
              label="Last Name"
              outlined
            ></v-text-field>
            <v-text-field
              :value="user.email"
              placeholder="Email"
              label="Email"
              outlined
            ></v-text-field>
          </v-col>

          <v-col>
            <v-text-field
              :value="user.phoneNumber"
              placeholder="Phone Number"
              label="Phone Number"
              outlined
            ></v-text-field>
            <v-text-field
              :value="user.nationalId"
              placeholder="National ID"
              label="National ID"
              outlined
            ></v-text-field>
            <v-text-field
              :value="user.permissionName"
              placeholder="Permission"
              label="Permission"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <!-- <v-btn @click="setUser()">Edit</v-btn> -->
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  layout: 'dashboard',
  methods: {
    setUser() {
      console.log('This is setUser Button')
    },
  },
  computed: {
    user() {
      return this.$store.getters['user/getUser']
    },
  },
}
</script>
