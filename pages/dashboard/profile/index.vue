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
              :value="user.first_name"
              label="First Name"
              placeholder="First Name"
              outlined
            ></v-text-field>
            <v-text-field
              :value="user.last_name"
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
              :value="user.phone_number"
              placeholder="Phone Number"
              label="Phone Number"
              outlined
            ></v-text-field>
            <v-text-field
              :value="user.national_id"
              placeholder="National ID"
              label="National ID"
              outlined
            ></v-text-field>
            <v-text-field
              :value="user.permission_name"
              placeholder="Permission"
              label="Permission"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-btn to="/dashboard/profile/addresses">Adresses</v-btn>
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
  mounted() {
    this.$store.dispatch('user/getUserData')
  },
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
