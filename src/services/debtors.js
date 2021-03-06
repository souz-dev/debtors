// eslint-disable-next-line import/no-anonymous-default-export
export default httpDebtors => ({
  post: async (a) => {
    const uuid = 'fa63607c-e56e-48c8-9a52-7360294e4deb'
    const response = await httpDebtors.post(`/divida/?uuid=${uuid}` , a)
    return {
      data: response
    }
  },
  get: async () => {
    const uuid = 'fa63607c-e56e-48c8-9a52-7360294e4deb'
    const response = await httpDebtors.get(`/divida/?uuid=${uuid}`)
    return {
      data: response.data
    }
  },
  put: async (id,a) => {
    const uuid = 'fa63607c-e56e-48c8-9a52-7360294e4deb'
    const response = await httpDebtors.put(`/divida/${id}/?uuid=${uuid}`, a)
    return {
      data: response
    }
  },
  delete: async (id) => {
    const uuid = 'fa63607c-e56e-48c8-9a52-7360294e4deb'
    const response = await httpDebtors.delete(`/divida/${id}/?uuid=${uuid}`)
    return {
      data: response
    }
  }
})
