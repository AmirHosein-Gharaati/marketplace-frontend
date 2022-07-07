<template>
  <div class="order-item" @click="navigate()">
    <div>
      <h3>{{ id }}</h3>
    </div>
    <div>{{ date }}</div>
    <div>{{ price }}</div>
  </div>
</template>

<script>
export default {
  name: 'Order',
  props: ['id', 'date', 'price'],
  methods: {
    navigate() {
      this.$router.push(`/dashboard/orders/${this.id}`)
    },
  },
}
</script>
