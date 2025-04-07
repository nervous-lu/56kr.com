import { createStore } from 'vuex'

export default createStore({
  state: {
    // 全局状态数据
    mobileMode: false,
    // 可以添加更多全局状态
  },
  mutations: {
    // 修改状态的方法
    setMobileMode(state, isMobile) {
      state.mobileMode = isMobile
    }
  },
  actions: {
    // 异步操作
    checkDeviceType({ commit }) {
      const isMobile = window.innerWidth <= 768
      commit('setMobileMode', isMobile)
      
      // 监听窗口变化
      window.addEventListener('resize', () => {
        commit('setMobileMode', window.innerWidth <= 768)
      })
    }
  },
  getters: {
    // 计算属性
    isMobile: state => state.mobileMode
  }
})