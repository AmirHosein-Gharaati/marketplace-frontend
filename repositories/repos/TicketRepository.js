const resource = '/tickets'

export default ($axiosClient) => ({
  getTicketTypes() {
    return $axiosClient.get(`${resource}/types`)
  },

  getAllUserTickets() {
    return $axiosClient.get(`${resource}/`)
  },

  getUnfinishedTickets() {
    return $axiosClient.get(`${resource}/unfinished`)
  },

  getChats({ ticketId, offsetValue }) {
    const config = {
      params: {
        offset: offsetValue,
      },
    }
    return $axiosClient.get(`${resource}/${ticketId}`, config)
  },

  create(ticketTypeId) {
    return $axiosClient.post(`${resource}/create/${ticketTypeId}`)
  },

  sendMessage({ ticketId, data }) {
    return $axiosClient.post(`${resource}/send_message/${ticketId}`, data)
  },
})
