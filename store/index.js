// store/index.js
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: localStorage.getItem('token') || '',
        user: {}
    },
    mutations: {
        auth_success(state, token) {
            state.token = token;
        },
        logout(state) {
            state.token = '';
        }
    },
    actions: {
        login({ commit }, user) {
            return axios.post('/api/login', user)
                .then(response => {
                    const token = response.data.token;
                    localStorage.setItem('token', token);
                    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                    commit('auth_success', token);
                });
        },
        logout({ commit }) {
            return new Promise((resolve) => {
                commit('logout');
                localStorage.removeItem('token');
                delete axios.defaults.headers.common['Authorization'];
                resolve();
            });
        }
    }
});
