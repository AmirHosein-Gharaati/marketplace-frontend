export const state = () => ({
  ticketTypes: [],
  tickets: [],
  chats: [],
})

export const actions = {
  async init({ dispatch }) {
    await dispatch('getTicketTypes')
    await dispatch('getAllUserTickets')
  },

  async getTicketTypes({ commit }) {
    try {
      const res = await this.$repositories.ticket.getTicketTypes()
      commit('setTicketTypes', res.data.ticket_types)

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async getAllUserTickets({ commit }) {
    try {
      const res = await this.$repositories.ticket.getAllUserTickets()
      commit('setTickets', res.data.tickets)

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async loadChats({ commit }, { ticketId, offsetValue }) {
    try {
      const res = await this.$repositories.ticket.getChats({
        ticketId: ticketId,
        offsetValue: offsetValue,
      })

      commit('setChats', res.data.messages)

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async createTicket(_, ticketTypeId) {
    try {
      const res = await this.$repositories.ticket.create(ticketTypeId)

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async sendMessage({ dispatch }, { ticketId, data }) {
    try {
      const res = await this.$repositories.ticket.sendMessage({
        ticketId: ticketId,
        data: data,
      })

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  addMessage({ commit, getters }, message) {
    const newChats = getters['getChats']
    newChats.push(message)

    commit('setChats', newChats)
  },
}

export const mutations = {
  setTickets(state, tickets) {
    state.tickets = tickets
  },
  setTicketTypes(state, ticketTypes) {
    state.ticketTypes = ticketTypes
  },
  setChats(state, chats) {
    state.chats = chats
  },
}

export const getters = {
  getTicketTypes: (state) => state.ticketTypes,
  getTickets: (state) => state.tickets,
  getChats: (state) => state.chats,
}
