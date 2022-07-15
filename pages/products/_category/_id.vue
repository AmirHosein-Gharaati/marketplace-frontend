<template>
  <div class="container px-16">
    <div class="product-detail">
      <div class="product-detail__main pb-8">
        <div class="product-detail__main__left">
          <img :src="defaultImageUrl" :alt="product.name" />
        </div>
        <div class="product-detail__main__right">
          <v-container fill-height>
            <v-col align-self="start">
              <v-row class="pb-12">Name: {{ product.name }}</v-row>
            </v-col>
            <v-col align-self="start">
              <v-row class="pb-12">Brand: {{ product.brand }}</v-row>
            </v-col>
          </v-container>
        </div>
      </div>

      <div v-if="isAuthenticated" class="d-flex justify-center">
        <v-btn @click="onSubscribe">Subscribe</v-btn>
      </div>

      <div class="product-detail__description">
        <h2 class="txt pb-4">Description</h2>
        <p class="px-8">{{ product.description }}</p>
        <div class="line"></div>
      </div>

      <div v-if="product.specification" class="product-detail__specification">
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

        <div class="product-detail__reviews__add pb-4">
          <h3>Review it!</h3>
          <v-textarea
            v-model="reviewTextareaModel"
            solo
            placeholder="Tell more about your idea..."
          ></v-textarea>
          <div class="d-flex flex-column align-center">
            <v-rating
              v-model="ratingStarModel"
              color="text"
              hover
              length="10"
              size="56"
              class="pb-4"
            ></v-rating>
            <v-btn @click="addReview">Add review</v-btn>
          </div>
        </div>

        <div v-if="reviews.length" class="product-detail__reviews__list">
          <Review v-for="review in reviews" :key="review.id" :review="review" />
        </div>
        <div class="line"></div>
      </div>

      <div v-if="similarItems.length">
        <h2 class="txt pb-4">Similar items</h2>
        <section>
          <v-container>
            <v-row>
              <v-col v-for="index in 5" :key="index">
                <template v-if="index <= similarItems.length">
                  <CardItem :product="similarItems[index - 1]" />
                </template>
              </v-col>
            </v-row>
          </v-container>
        </section>
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

  asyncData({ params }) {
    return {
      id: params.id,
    }
  },
  data() {
    return {
      defaultImageUrl:
        'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP726/SP726-iphone6s-rosegold-select-2015.png',
      reviews: [],
      similarItems: [],
      reviewTextareaModel: [],
      ratingStarModel: null,
      product: {
        id: 1,
        name: '',
        brand: '',
        category_id: 1,
        description: '',
        specification: null,
        image: '',
        description: "I don't know what to say about this shitty phone!",
      },
    }
  },
  mounted() {
    this.getProduct()
    this.getSimilarProducts()
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters['auth/getIsAuthenticated']
    },
  },
  methods: {
    async getProduct() {
      const productData = await this.$store.dispatch(
        'product/getProductById',
        this.id
      )

      this.product = productData.product

      const reviewsData = await this.$store.dispatch(
        'review/getProductsReviewSortedByDate',
        this.id
      )
      if (reviewsData.reviews) this.reviews = reviewsData.reviews
    },
    async getSimilarProducts() {
      const data = await this.$store.dispatch(
        'product/getSimilarProducts',
        this.id
      )

      this.similarItems = data.products
    },
    async onSubscribe() {
      const data = await this.$store.dispatch('notification/subscribe', this.id)

      if (data.status == 'ok') {
        alert('Subscribed')
      } else {
        alert('Something went wrong')
      }
    },
    async addReview() {
      const payload = {
        product_id: this.product.id,
        store_id: 1, // TODO
        rate: this.ratingStarModel / 2,
        review_text: this.reviewTextareaModel,
      }
      console.log(payload)
      const data = await this.$store.dispatch('review/createReview', payload)
    },
  },
}
</script>
