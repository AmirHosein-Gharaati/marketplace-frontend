<template>
  <div class="home">
    <div class="container">
      <section class="home__main">
        <nuxt-img class="home__main__img" src="/home.png" alt="home" />
        <div class="home__main__text txt">
          <h2>It’s a lot easier to shop from home!</h2>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import CardItem from '@/components/CardItem.vue'
export default {
  name: 'Homepage',
  components: {
    CardItem,
  },
}
</script>
