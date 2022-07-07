<template>
  <div class="container px-16">
    <h1>{{ id }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ProductId',
  asyncData({ params, redirect }) {
    return {
      id: params.id,
    }
  },
}
</script>

<style></style>
