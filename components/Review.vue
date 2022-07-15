<template>
  <div class="review px-8">
    <div class="review__info">
      <span>{{ user_review.first_name + ' ' + user_review.last_name }}</span> ●
      <span>{{ review.rate }}/5.0</span>
    </div>
    <div class="review__description pt-4">
      <p>{{ review.review_text }}</p>
    </div>
    <div class="review__buttons">
      <v-btn icon @click="sendVote('up')"
        ><v-icon>mdi-thumb-up</v-icon>
        <div v-if="review.up_votes">{{ review.up_votes }}</div></v-btn
      >
      <v-btn icon @click="sendVote('down')"
        ><v-icon>mdi-thumb-down</v-icon>
        <div v-if="review.down_votes">{{ review.down_votes }}</div></v-btn
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
      user_review: {
        first_name: '',
        last_name: '',
      },
    }
  },
  mounted() {
    console.log(this.review)
    this.getUser(this.review.user_id)
  },
  methods: {
    async sendVote(value) {
      const payload = {
        review_id: this.review.id,
        up_vote: value == 'up' ? true : false,
        down_vote: value == 'down' ? false : true,
      }

      if (value == 'up') this.review.up_votes++
      else this.review.down_votes++

      await this.$store.dispatch('vote/createVote', payload)
    },

    async getUser(id) {
      const data = await this.$store.dispatch('user/getUserById', id)
      this.user_review = data.user
    },
  },
}
</script>
