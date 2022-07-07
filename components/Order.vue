<template>
  <div class="order" @click="navigate()">
    <div class="order__id">
      <h3>{{ id }}</h3>
    </div>
    <div class="order__date">{{ date }}</div>
    <div class="order__price">{{ price }}</div>
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
