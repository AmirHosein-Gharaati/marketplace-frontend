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
                    v-model="nationalCodeModel"
                    prepend-icon="mdi-contacts"
                    name="nationalCode"
                    label="National Code"
                    type="text"
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
      nationalCodeModel: null,
      emailModel: null,
      passwordModel: null,
      passwordConfirmModel: null,
    }
  },
  methods: {
    onSubmit() {
      console.log('Submit')
    },
  },
}
</script>

<style></style>
