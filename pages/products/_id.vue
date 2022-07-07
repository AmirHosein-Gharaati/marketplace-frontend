<template>
  <div class="container px-16">
    <div class="product-detail">
      <div class="product-detail__main pb-8">
        <div class="product-detail__main__left">
          <img :src="product.image" :alt="product.name" />
        </div>
        <div class="product-detail__main__right">
          <v-container fill-height>
            <v-col align-self="start">
              <v-row class="pb-12">Name: {{ product.name }}</v-row>
              <v-row class="pb-12">Price: {{ product.price }}</v-row>
              <v-row class="pb-12">Store: {{ product.store }}</v-row>
              <v-row class="pb-12">Rating: {{ product.rating }}</v-row>
            </v-col>
            <v-col align-self="start">
              <v-row class="pb-12">Brand: {{ product.brand }}</v-row>
              <v-row class="pb-12">Discount: {{ product.discount }}</v-row>
            </v-col>
          </v-container>
        </div>
      </div>

      <div class="product-detail__description">
        <h2 class="txt pb-4">Description</h2>
        <p class="px-8">{{ product.description }}</p>
        <div class="line"></div>
      </div>

      <div class="product-detail__specification">
        <h2 class="txt pb-4">Specification</h2>
        <div
          class="px-8"
          v-for="key in Object.keys(product.specification)"
          :key="key"
        >
          <v-row>
            <v-col cols="1">{{ key }}</v-col>
            <v-col cols="1">{{ product.specification[key] }}</v-col>
          </v-row>
        </div>
        <div class="line"></div>
      </div>

      <div class="product-detail__reviews">
        <h2 class="txt pb-4">Reviews</h2>
        <div class="product-detail__reviews__list">
          <Review :id="2" />
          <Review :id="3" />
        </div>
        <div class="line"></div>
      </div>

      <div>
        <h2 class="txt pb-4">Similar items</h2>
        <section>
          <v-container>
            <v-row>
              <v-col v-for="n in 5" :key="n">
                <CardItem />
              </v-col>
            </v-row>
          </v-container>
        </section>
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Review from '@/components/Review.vue'
export default {
  name: 'ProductId',
  components: {
    Review,
  },
  asyncData({ params, redirect }) {
    return {
      id: params.id,
    }
  },
  data() {
    return {
      colsAttrCount: 4,
      product: {
        id: 1,
        name: 'IPhone 6s',
        image:
          'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP726/SP726-iphone6s-rosegold-select-2015.png',
        brand: 'Apple',
        price: '2000$',
        store: 'PC Center',
        discount: 0,
        rating: 2.4,
        description: "I don't know what to say about this shitty phone!",
        specification: {
          cpu: '2.4Ghz',
          ram: '8GB',
          hard: '1TB',
        },
      },
    }
  },
  methods: {
    productKeyIndex(colIndex, rowIndex) {
      return (colIndex - 1) * this.colsAttrCount + (rowIndex - 1)
    },
  },
  computed: {
    productKeys() {
      return Object.keys(this.product)
    },
    productDetailsLength() {
      return this.productKeys.length - 2
    },
    gridColsNumber() {
      return Math.ceil(this.productDetailsLength / this.colsAttrCount)
    },
  },
}
</script>

<style></style>
