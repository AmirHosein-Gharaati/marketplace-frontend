<template>
  <div class="container px-16">
    <div class="add-product">
      <v-card class="elevation-12">
        <v-toolbar color="primary">
          <v-toolbar-title>Add New Product</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-container>
              <v-row>
                <v-col>
                  <v-text-field
                    name="store name"
                    label="Store Name"
                    type="text"
                    solo
                  ></v-text-field>
                  <v-text-field
                    name="numbers"
                    label="Numbers"
                    type="text"
                    solo
                  ></v-text-field>
                  <v-text-field
                    name="brand"
                    label="Brand"
                    type="text"
                    solo
                  ></v-text-field>
                  <v-text-field
                    prepend-inner-icon="mdi-attachment"
                    name="image"
                    label="Image"
                    type="text"
                    solo
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    name="product name"
                    label="Product Name"
                    type="text"
                    solo
                  ></v-text-field>
                  <v-text-field
                    name="price"
                    label="Price"
                    type="text"
                    solo
                  ></v-text-field>
                  <v-text-field
                    name="category"
                    label="Category"
                    type="text"
                    solo
                  ></v-text-field>
                  <v-text-field
                    name="specification"
                    label="Specification"
                    type="text"
                    solo
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-textarea solo placeholder="Description"></v-textarea>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
        <v-card-actions class="justify-center pb-8">
          <v-btn @click="onSubmit()">Add Product</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddProduct',
  layout: 'dashboard',
  methods: {
    onSubmit() {
      console.log('Submitted!')
    },
  },
}
</script>
