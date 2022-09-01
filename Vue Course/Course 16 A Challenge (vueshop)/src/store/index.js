import { createStore } from "vuex";

import productModule from "./modules/product";
import cartModule from "./modules/cart";

const store = createStore({
    modules: {
        prods: productModule,
        cart: cartModule,
    },
    state: {
        isLoggedIn: false
    },
    mutations: {
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        },
    },
    actions: {
        login(context) {
            context.commit('login')
        },
        logout(context) {
            context.commit('logout')
        },
    },
    getters: {
        isAuth(state) {
            return state.isLoggedIn
        }
    }
})

export default store