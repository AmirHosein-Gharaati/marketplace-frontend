<template>
  <div class="container px-16">
    <div class="order-detail">
      <h2 class="pb-4">Order Detail</h2>
      <div class="order-detail__content">
        <div class="item-info black white--text mb-4">
          <div>ID</div>
          <div>Date</div>
          <div>Status</div>
          <div>Store Name</div>
        </div>
        <div class="item-info">
          <div>{{ order.id }}</div>
          <div>{{ order.date }}</div>
          <div>{{ order.status }}</div>
          <div>{{ order.storeName }}</div>
        </div>
        <v-container class="py-2 px-16">
          <div class="line"></div>
        </v-container>
        <div class="order-detail__content__items-wrapper">
          <h3 class="pb-4">Items</h3>
          <div class="order-detail__content__items">
            <div class="item-info black white--text mb-4">
              <div>ID</div>
              <div>Count</div>
              <div>Price</div>
              <div>Discount</div>
            </div>
            <div
              v-for="item in order.items"
              :key="item.id"
              class="item-info my-2"
            >
              <div>{{ item.id }}</div>
              <div>{{ item.count }}</div>
              <div>{{ item.price }}</div>
              <div>{{ item.discount }}</div>
            </div>
          </div>
        </div>
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
