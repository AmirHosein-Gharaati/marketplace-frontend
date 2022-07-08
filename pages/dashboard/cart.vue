<template>
  <div class="container px-16">
    <div class="cart">
      <h2 class="py-4">Cart</h2>
      <div class="cart__content">
        <div class="cart__content__items">
          <div class="cart__content__items-wrapper">
            <v-card>
              <v-card-title>
                Items
                <v-spacer></v-spacer>
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                ></v-text-field>
              </v-card-title>
              <v-data-table
                :headers="itemHeaders"
                :items="order.items"
                :items-per-page="5"
                :search="search"
              ></v-data-table>
            </v-card>
          </div>

          <p class="pt-8">
            <span class="font-weight-bold">Total Price: </span
            >{{ order.totalPrice }} Rials
          </p>
        </div>
        <v-container class="py-2 px-16">
          <div class="line"></div>
        </v-container>

        <div class="cart__content__shipping px-16">
          <div class="d-flex align-center pb-8">
            <label>Shipping Method: </label>
            <div class="px-2"></div>
            <v-select
              v-model="shippingModel"
              height="20"
              hide-details
              :items="shippingMethods"
              item-value="id"
              item-text="name"
              label="Shipping Method"
              solo
            ></v-select>
          </div>
          <div class="d-flex align-center pb-8">
            <label>Address: </label>
            <div class="px-2"></div>
            <v-select
              v-model="addressModel"
              height="20"
              hide-details
              :items="addresses"
              item-value="id"
              item-text="name"
              label="Shipping Method"
              solo
            ></v-select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartPage',
  layout: 'dashboard',
  data() {
    return {
      search: null,
      addressModel: 1,
      shippingModel: 1,
      addresses: [
        {
          id: 1,
          name: 'Shiraz, Fars, Iran',
        },
        {
          id: 2,
          name: 'Estahban, Fars, Iran',
        },
      ],
      shippingMethods: [
        {
          id: 1,
          name: 'Normal',
        },
        {
          id: 2,
          name: 'Express',
        },
      ],
      itemHeaders: [
        { text: 'ID', value: 'id' },
        { text: 'Count', value: 'count' },
        { text: 'Price', value: 'price' },
        { text: 'Discount', value: 'discount' },
      ],
      order: {
        id: 1,
        date: '2018 Jan 13',
        status: 'Available',
        storeName: 'PC Center',
        totalPrice: '289010',
        shippingMethod: 'Normal',
        address: 'Shiraz, Fars, Iran',
        items: [
          {
            id: 1,
            count: 5,
            price: '789020',
            discount: 0,
          },
          {
            id: 2,
            count: 5,
            price: '789020',
            discount: 0,
          },
          {
            id: 3,
            count: 5,
            price: '789020',
            discount: 0,
          },
          {
            id: 4,
            count: 5,
            price: '789020',
            discount: 0,
          },
          {
            id: 5,
            count: 5,
            price: '789020',
            discount: 0,
          },
        ],
      },
    }
  },
}
</script>

<style></style>
