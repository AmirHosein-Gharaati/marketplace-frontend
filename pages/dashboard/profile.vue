<template>
  <div class="container px-16">
    <div class="profile">
      <v-container>
        <v-row>
          <v-col>
            <v-text-field :value="user.id" placeholder="ID" solo></v-text-field>
            <v-text-field
              :value="user.firstName"
              placeholder="First Name"
              solo
            ></v-text-field>
            <v-text-field
              :value="user.lastName"
              placeholder="Last Name"
              solo
            ></v-text-field>
            <v-text-field
              :value="user.email"
              placeholder="Email"
              solo
            ></v-text-field>
          </v-col>

          <v-col>
            <v-text-field
              :value="user.phoneNumber"
              placeholder="Phone Number"
              solo
            ></v-text-field>
            <v-text-field
              :value="user.nationalId"
              placeholder="National ID"
              solo
            ></v-text-field>
            <v-text-field
              :value="user.permissionName"
              placeholder="Permission"
              solo
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
