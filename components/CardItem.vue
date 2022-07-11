<template>
  <div class="card-item">
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
  mounted() {
    console.log(this.product)
  },
}
</script>

<style></style>
