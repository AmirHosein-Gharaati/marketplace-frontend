<template>
  <div class="container px-16">
    <div class="order-detail">
      <h2 class="pb-4">Order Detail</h2>
      <div class="item-info">
        <div>{{ order.id }}</div>
        <div>{{ order.date }}</div>
        <div>{{ order.status }}</div>
        <div>{{ order.storeName }}</div>
      </div>

      <div class="order-deatil__items">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderDetail',
  layout: 'dashboard',
  asyncData({ params, redirect }) {
    return {
      id: params.id,
    }
  },
  data() {
    return {
      order: {
        id: 1,
        date: '2018 Jan 13',
        status: 'Available',
        storeName: 'PC Center',
        totalPrice: '289010 Rials',
        shippingMethod: 'Normal',
        address: 'Shiraz, Fars, Iran',
        items: [
          {
            id: 1,
            count: 5,
            price: '789020 Rials',
            discount: 0,
          },
          {
            id: 2,
            count: 5,
            price: '789020 Rials',
            discount: 0,
          },
          {
            id: 3,
            count: 5,
            price: '789020 Rials',
            discount: 0,
          },
          {
            id: 4,
            count: 5,
            price: '789020 Rials',
            discount: 0,
          },
          {
            id: 5,
            count: 5,
            price: '789020 Rials',
            discount: 0,
          },
        ],
      },
    }
  },
}
</script>
