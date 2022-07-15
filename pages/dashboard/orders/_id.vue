<template>
  <div class="container px-16">
    <div class="order-detail">
      <h2 class="pb-4">Order Detail</h2>
      <div class="order-detail__content">
        <div class="item-info black white--text mb-4">
          <div v-for="k in orderKeys" :key="k">{{ k }}</div>
        </div>
        <div class="item-info">
          <div v-for="k in orderKeys" :key="k">{{ order[k] }}</div>
        </div>
        <v-container class="py-2 px-16">
          <div class="line"></div>
        </v-container>
        <div class="order-detail__content__items-wrapper">
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

          <p class="pt-8">
            <span class="font-weight-bold">Total Price: </span
            >{{ order.totalPrice }} Rials
          </p>
        </div>
        <v-container class="py-2 px-16">
          <div class="line"></div>
        </v-container>
        <div class="order-detail__content__shipping px-16">
          <p>
            <span class="font-weight-bold">Shipping Method: </span
            >{{ order.shippingMethod }}
          </p>
          <p>
            <span class="font-weight-bold">Address: </span>{{ order.address }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderDetail',
  layout: 'dashboard',
  asyncData({ params }) {
    return {
      id: params.id,
    }
  },
  data() {
    return {
      search: null,
      itemHeaders: [
        { text: 'ID', value: 'id' },
        { text: 'Count', value: 'count' },
        { text: 'Price', value: 'price' },
        { text: 'Discount', value: 'discount' },
      ],
      orderKeys: ['id', 'date', 'status'],
      order: {
        id: 1,
        date: '2018 Jan 13',
        status: 'Available',
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
  mounted() {
    this.getAllProductsInTheOrder()
  },
  methods: {
    async getAllProductsInTheOrder() {
      const data = await this.$store.dispatch(
        'order/getAllProductsInTheOrder',
        this.order.id
      )

      console.log(data)
    },
  },
}
</script>
