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
          @click:row="navigateToTicket"
        ></v-data-table>
      </v-card>

      <v-container>
        <div class="line"></div>
      </v-container>

      <v-btn @click="navigateToCreate">Create Ticket</v-btn>
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
      createTicketTypeModel: null,
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
    navigateToTicket() {},
    navigateToCreate() {},
  },
  computed: {
    tickets() {
      return this.$store.getters['ticket/getTickets']
    },
  },
}
</script>
