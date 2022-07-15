<template>
  <div class="container px-16">
    <div class="add-store">
      <v-card class="elevation-12">
        <v-toolbar color="primary">
          <v-toolbar-title>Add New Store</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-container>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="storeModel.name"
                    name="name"
                    label="Name"
                    type="text"
                    outlined
                  ></v-text-field>
                  <v-text-field
                    v-model="storeModel.owner"
                    name="owner"
                    label="Owner ID"
                    type="text"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="storeModel.creator"
                    name="creator"
                    label="Creator ID"
                    type="text"
                    outlined
                  ></v-text-field>
                  <v-text-field
                    v-model="storeModel.avatar_url"
                    name="avatar url"
                    label="Avatar Url"
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
          <v-btn @click="onSubmit()">Add Store</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddStore',
  layout: 'dashboard',
  data() {
    return {
      storeModel: {
        name: '',
        description: '',
        avatar_url: '',
        owner: null,
        creator: null,
      },
    }
  },
  methods: {
    async onSubmit() {
      const payload = this.storeModel

      const data = await this.$store.dispatch('store/createStore', payload)

      if (data.status == 'ok') {
        this.$router.replace('./')
      } else alert('Something went wrong!')
    },
  },
}
</script>
