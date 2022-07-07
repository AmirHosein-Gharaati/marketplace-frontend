<template>
  <div class="container px-16">
    <div class="product-detail">
      <div class="product-detail__main">
        <div class="product-detail__main__left">
          <img :src="product.image" :alt="product.name" />
        </div>
        <div class="product-detail__main__right">
          <v-container fill-height>
            <v-col>
              <v-row>Name: {{ product.name }}</v-row>
              <v-row>Price: {{ product.price }}</v-row>
              <v-row>Store: {{ product.store }}</v-row>
              <v-row>Rating: {{ product.rating }}</v-row>
            </v-col>
            <v-col>
              <v-row>Brand: {{ product.brand }}</v-row>
              <v-row>Discount: {{ product.discount }}</v-row>
            </v-col>
          </v-container>
        </div>
      </div>
    </div>
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
