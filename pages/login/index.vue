<template>
  <div class="container">
    <div class="login">
      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                <v-toolbar color="primary">
                  <v-toolbar-title>Login form</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-form>
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
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn @click="onSubmit()">Login</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      emailModel: null,
      passwordModel: null,
    }
  },
  methods: {
    onSubmit() {
      console.log(this.emailModel, this.passwordModel)
    },
  },
}
</script>

<style></style>
