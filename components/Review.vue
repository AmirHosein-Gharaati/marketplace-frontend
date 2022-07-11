<template>
  <div class="review px-8">
    <div class="review__info">
      <span>{{ review.name }}</span> ● <span>{{ review.date }}</span> ●
      <span>{{ review.rate }}/5.0</span>
    </div>
    <div class="review__description pt-4">
      <p>{{ review.review_text }}</p>
    </div>
    <div class="review__buttons">
      <v-btn icon
        ><v-icon>mdi-thumb-up</v-icon>
        <div v-if="review.likes">{{ review.up_votes }}</div></v-btn
      >
      <v-btn icon
        ><v-icon>mdi-thumb-down</v-icon>
        <div v-if="review.dislikes">{{ review.down_votes }}</div></v-btn
      >
    </div>
    <div class="review__end">
      <div class="line line-small"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Review',
  props: ['review'],
  data() {
    return {
      review2: {
        id: 1,
        product_id: 1,
        store_id: 1,
        user_id: 1,
        rate: 4.1,
        review_text: 'this product is excellent',
        created_at: '2022-07-09T11:41:16.399375+04:30',
        up_votes: 0,
        down_votes: 0,
      },
    }
  },
}
</script>

<style></style>
