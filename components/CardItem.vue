<template>
  <div @click="navigate" class="card-item">
    <div class="card-item__main">
      <h4>{{ product.name }}</h4>
    </div>
    <div class="card-item__under">
      <p>{{ product.description.slice(0, 15) + '...' }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardItem',
  props: ['product'],
  methods: {
    navigate() {
      this.$router.replace(`/${this.product.id}`)
    },
  },
}
</script>

<style></style>
