<template>
  <div class="container px-16">
    <div class="orders container">
      <div class="orders__list">
        <Order />
        <Order />
        <Order />
        <Order />
        <Order />
        <Order />
        <Order />
        <Order />
        <Order />
        <Order />
        <Order />
        <Order />
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
}
</script>

<style></style>
