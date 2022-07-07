<template>
  <div class="review px-8 py-4">
    <div class="review__info">
      <span>{{ review.name }}</span> ● <span>{{ review.date }}</span> ●
      <span>{{ review.rating }}/5.0</span>
    </div>
    <div class="review__description pt-4">
      <p>{{ review.description }}</p>
    </div>
    <div class="review__buttons">
      <v-btn icon
        ><v-icon>mdi-thumb-up</v-icon>
        <div v-if="review.likes">{{ review.likes }}</div></v-btn
      >
      <v-btn icon
        ><v-icon>mdi-thumb-down</v-icon>
        <div v-if="review.dislikes">{{ review.dislikes }}</div></v-btn
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
  props: ['id'],
  data() {
    return {
      review: {
        name: 'Amirhosein Gharaati',
        date: '2018 Jan 19',
        rating: 2.4,
        description:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        likes: 24,
        dislikes: 0,
      },
    }
  },
}
</script>

<style></style>
