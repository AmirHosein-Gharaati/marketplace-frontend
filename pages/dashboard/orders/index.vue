<template>
  <div class="container px-16">
    <div class="orders container">
      <div class="orders__list">
        <v-card>
          <v-card-title>
            Orders
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
            :headers="headers"
            :items="orderItems"
            :items-per-page="7"
            :search="search"
            @click:row="navigate"
          ></v-data-table>
        </v-card>
        <!-- <Order
          v-for="item in orderItems"
          :key="item.id"
          :id="item.id"
          :date="item.date"
          :price="item.price"
        /> -->
      </div>
    </div>
  </div>
</template>

<script>
import Order from '@/components/Order.vue'
export default {
  name: 'Orders',
  layout: 'dashboard',
  components: {
    Order,
  },
  data() {
    return {
      search: null,
      headers: [
        {
          text: 'ID',
          align: 'start',
          value: 'id',
        },
        { text: 'Date', value: 'date' },
        { text: 'Price (Rials)', value: 'price' },
      ],
      orderItems: [
        {
          id: 1,
          date: '2018 Jan 19 12:38 PM',
          price: '298000 Rials',
        },
        {
          id: 2,
          date: '2018 Jan 19 12:38 PM',
          price: '298000 Rials',
        },
        {
          id: 3,
          date: '2018 Jan 19 12:38 PM',
          price: '298000 Rials',
        },
        {
          id: 4,
          date: '2018 Jan 19 12:38 PM',
          price: '298000 Rials',
        },
        {
          id: 5,
          date: '2018 Jan 19 12:38 PM',
          price: '298000 Rials',
        },
        {
          id: 6,
          date: '2018 Jan 19 12:38 PM',
          price: '298000 Rials',
        },
        {
          id: 7,
          date: '2018 Jan 19 12:38 PM',
          price: '298000 Rials',
        },
      ],
    }
  },
  mounted() {
    this.getAllOrders()
  },
  methods: {
    async getAllOrders() {
      const data = await this.$store.dispatch('order/getAllOrders')
      console.log(data)
    },
    navigate(value) {
      const { id } = value
      this.$router.push(`/dashboard/orders/${id}`)
    },
  },
}
</script>

<style></style>
