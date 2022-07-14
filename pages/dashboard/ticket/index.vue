<template>
  <div class="container px-16">
    <div class="ticket">
      <v-card>
        <v-card-title>
          Tickets
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="tickets"
          :items-per-page="5"
          :search="search"
          @click:row="createTicket"
        ></v-data-table>
      </v-card>

      <v-container>
        <div class="line"></div>
      </v-container>

      <div class="ticket__create">
        <v-btn height="100%">Create Ticket</v-btn>
        <div class="mx-4"></div>
        <v-select
          v-model="ticketTypeModel"
          solo
          hide-details
          :items="ticketTypes"
          item-text="name"
          item-value="id"
          label="Ticket Type"
        ></v-select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TicketPage',
  layout: 'dashboard',
  data() {
    return {
      search: null,
      ticketTypeModel: null,
      headers: [
        {
          text: 'ID',
          value: 'id',
        },
        { text: 'Employee ID', value: 'employee_id' },
        { text: 'Type', value: 'ticket_type_id' },
      ],
    }
  },
  mounted() {
    this.$store.dispatch('ticket/init')
  },
  methods: {
    async createTicket() {
      const data = await this.$store.dispatch(
        'ticket/createTicket',
        this.ticketTypeModel
      )

      if (!!data.ticket_id) {
        this.$router.push(`/dashboard/ticket/${data.ticket_id}`)
      }
    },
  },
  computed: {
    tickets() {
      return this.$store.getters['ticket/getTickets']
    },
    ticketTypes() {
      return this.$store.getters['ticket/getTicketTypes']
    },
  },
}
</script>
