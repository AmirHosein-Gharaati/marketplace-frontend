<template>
  <div class="container">
    <div class="signup">
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar color="primary">
                <v-toolbar-title>Signup form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="firstNameModel"
                    name="firstName"
                    label="First Name"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    v-model="lastNameModel"
                    name="lastName"
                    label="Last Name"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    v-model="phoneNumberModel"
                    prepend-icon="mdi-phone"
                    name="phoneNumber"
                    label="Phone Number"
                    type="number"
                  ></v-text-field>
                  <v-text-field
                    v-model="emailModel"
                    prepend-icon="mdi-email"
                    name="login"
                    label="Email"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    v-model="passwordModel"
                    id="password"
                    prepend-icon="mdi-lock"
                    name="password"
                    label="Password"
                    type="password"
                  ></v-text-field>
                  <v-text-field
                    v-model="passwordConfirmModel"
                    id="passwordConfirmModel"
                    prepend-icon="mdi-lock"
                    name="passwordConfirm"
                    label="Password Confirm"
                    :rules="[validation]"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="onSubmit()">Signup</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  data() {
    return {
      firstNameModel: null,
      lastNameModel: null,
      phoneNumberModel: null,
      emailModel: null,
      passwordModel: null,
      passwordConfirmModel: null,
    }
  },
  methods: {
    onSubmit() {
      console.log('Submit')
    },
    validation(v) {
      if (v === this.passwordModel) {
        return true
      } else {
        return 'Confirm password should match password'
      }
    },
  },
}
</script>

<style></style>
