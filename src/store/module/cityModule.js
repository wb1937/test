const module = {
  namespaced: true, // 命名空间
  state: {
    cityName: '北京',
    cityId: '110100'
  },
  actions: {

  },
  mutations: {
    setCityName (state, name) {
      state.cityName = name
    },
    setCityId (state, id) {
      state.cityId = id
    }
  }
}

export default module
