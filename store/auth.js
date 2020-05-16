// Название данного файла равносильно названию модуля, который мы создаем во VUEX
// Если есть токен, мы будем проверять его на валидность и отправлять с каждым запросом на бэкенд
// Если нет токена - значит мы не авторизованы 
// Поле isAuthenticated будет являться стрелочной функцией, как это положенно у Getter'ов

export const state = () => ({
    token: null
})
  
export const mutations = {
    setToken(state, token) {
        state.token = token
    },

    clearToken(state) {
       state.token = null 
    }
}
  
export const actions = {

    async login({commit, dispatch}, formData) {
 
        const token = await new Promise(resolve => {
            setTimeout(() => resolve('token from server'), 2000)
        })
        console.log(token);
        dispatch('setToken', token)
    },

    setToken({commit}, token) {
        // write cookie logic here
        commit('setToken', token)
    },

    logout({commit}) {
        commit('clearToken') 
    }
}
  
export const getters = {
    isAuthenticated: state => Boolean(state.token)
}
  