import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: 'Hola desde Vuex!',
    menuOptions: [
      {title: "INICIO", href: "#", action:""},
      {title: "SOBRE NOSOTROS", href: "#", action:""},
      {title: "ÁREAS DE PRÁCTICA", href: "#", action:""},
      {title: "CONTACTO", href: "#contacto", action:""},
    ]
  },
  mutations: {
    setMessage(state, newMessage) {
      state.message = newMessage;
    }
  },
  actions: {
    updateMessage({ commit }, newMessage) {
      commit('setMessage', newMessage);
    }
  },
  getters: {
    getMessage(state) {
      return state.message;
    },
    getIsDesktop(){
      return window.innerWidth >= 992
    }
  }
});