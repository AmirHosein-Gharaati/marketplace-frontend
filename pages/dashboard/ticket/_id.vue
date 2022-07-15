<template>
  <div class="container px-16">
    <div class="ticket-detail">
      <h2 class="pb-4">Ticket {{ this.id }}</h2>

      <div class="chat">
        <div class="chat__messages">
          <div
            v-for="message in chats"
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
          <v-btn class="mx-4" @click="sendMessage">Send</v-btn>
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
      messages: [],
      chats: [
        {
          ticket_id: 1,
          sender_id: 1,
          message_text: 'This is a text',
          status: 'sent',
        },
        {
          ticket_id: 1,
          sender_id: 6,
          message_text: 'This is a text',
          status: 'sent',
        },
        {
          ticket_id: 1,
          sender_id: 6,
          message_text: 'Please tell me what to do!',
          status: 'sent',
        },
        {
          ticket_id: 1,
          sender_id: 1,
          message_text: 'Go to HELL!',
          status: 'sent',
        },
      ],
    }
  },
  mounted() {
    this.loadMessages()
  },
  methods: {
    loadMessages() {
      const payload = {
        ticketId: this.id,
        offsetValue: 0,
      }

      this.$store.dispatch('ticket/loadChats', payload)
    },
    async sendMessage() {
      const payload = {
        ticketId: this.id,
        data: {
          text: this.inputFieldModel,
        },
      }

      const data = await this.$store.dispatch('ticket/sendMessage', payload)

      if (data.status == 'ok') {
        this.$store.dispatch('ticket/addMessage', data.message)
      }
    },
  },
  computed: {
    user() {
      return this.$store.getters['user/getUser']
    },
    // chats() {
    //   return this.$store.getters['ticket/getChats']
    // },
  },
}
</script>
