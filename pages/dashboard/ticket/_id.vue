<template>
  <div class="container px-16">
    <div class="ticket-detail">
      <h2 class="pb-4">Ticket {{ this.id }}</h2>

      <div class="chat">
        <div class="chat__messages">
          <div
            v-for="message in messages"
            :key="message.id"
            class="chat__messages__item-wrapper"
            :class="user.id === message.sender_id ? 'justify-end' : ''"
          >
            <div
              class="chat__messages__item"
              :class="
                user.id === message.sender_id
                  ? 'chat__messages__item__sender'
                  : ''
              "
            >
              {{ message.message_text }}
            </div>
          </div>
        </div>
        <div class="chat__send">
          <v-text-field
            v-model="inputFieldModel"
            solo
            hide-details
            placeholder="Message"
            class="mx-4"
          ></v-text-field>
          <v-btn class="mx-4">Send</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TicketDetail',
  layout: 'dashboard',
  asyncData({ params }) {
    return {
      id: params.id,
    }
  },
  data() {
    return {
      inputFieldModel: null,
      messages: [
        {
          id: 1,
          ticket_id: 1,
          sender_id: 1,
          message_text: 'This is sender message!',
          status: 'sent',
          created_at: '2022-07-10T13:01:36.026075+04:30',
        },
        {
          id: 1,
          ticket_id: 1,
          sender_id: 2,
          message_text: 'Hello you problem is non sense to me. Go to Hell! ',
          status: 'sent',
          created_at: '2022-07-10T13:01:36.026075+04:30',
        },
      ],
    }
  },
  computed: {
    user() {
      return this.$store.getters['user/getUser']
    },
  },
}
</script>
