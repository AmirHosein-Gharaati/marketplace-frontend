<template>
  <div class="container px-16">
    <div class="orders container">
      <h2 class="">Orders</h2>
      <div class="orders__list">
        <div class="item-info black white--text mb-4">
          <div>ID</div>
          <div>Time and Date</div>
          <div>Price</div>
        </div>
        <Order
          v-for="item in orderItems"
          :key="item.id"
          :id="item.id"
          :date="item.date"
          :price="item.price"
        />
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
}
</script>

<style></style>
