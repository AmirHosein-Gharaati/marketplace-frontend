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
    <div class="container bg-secondary">
      <div>
        <h2 class="container txt">Our suggestion for you</h2>
        <section class="home__suggestion">
          <v-container>
            <v-row>
              <v-col v-for="n in 5" :key="n">
                <CardItem />
              </v-col>
            </v-row>
            <div class="line"></div>
          </v-container>
        </section>
      </div>
      <div>
        <h2 class="container txt">Best offers</h2>
        <section class="home__suggestion">
          <v-container>
            <v-row>
              <v-col v-for="n in 5" :key="n">
                <CardItem />
              </v-col>
            </v-row>
            <div class="line"></div>
          </v-container>
        </section>
      </div>
      <div>
        <h2 class="container txt">Recently available</h2>
        <section class="home__suggestion">
          <v-container>
            <v-row>
              <v-col v-for="n in 5" :key="n">
                <CardItem />
              </v-col>
            </v-row>
          </v-container>
        </section>
      </div>
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
