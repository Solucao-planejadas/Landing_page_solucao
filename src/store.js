import axios from 'axios';
import {createStore} from "vuex";

// Configuração do Axios
axios.defaults.baseURL = 'http://localhost:3000'; // Substitua pela URL da sua API


export const store = createStore({
  state: {
    token: localStorage.getItem('token') || '',
    isAuthenticated: false,
    error: null
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    },
    setAuthenticated(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
    setError(state, error) {
      state.error = error;
    },
    clearToken(state) {
      state.token = '';
      localStorage.removeItem('token');
      delete axios.defaults.headers.common['Authorization'];
    }
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        const response = await axios.post('/auth/login', credentials);
        const token = response.data.token;
        commit('setToken', token);
        commit('setAuthenticated', true);
        commit('setError', null);
        return true;
      } catch (error) {
        console.error(error);
        commit('setError', 'Falha na autenticação. Verifique seu usuário e senha.');
        commit('clearToken');
        return false;
      }
    },
    async checkAuthentication({ commit, state }) {
      try {
        await axios.get('/auth/profile', {
          headers: {
            Authorization: `Bearer ${state.token}`
          }
        });
        commit('setError', null);
        commit('setAuthenticated', true);
        return true;
      } catch (error) {
        console.error(error);
        commit('setError', 'Falha na autenticação. Faça o login novamente.');
        commit('clearToken');
        commit('setAuthenticated', false);
        return false;
      }
    },
    logout({ commit }) {
      commit('clearToken');
      commit('setAuthenticated', false);
      return true;
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated;
    },
    error(state) {
      return state.error;
    }
  }
});