import { createStore } from 'vuex'
import rootMutation from './mutation.js'
import rootAction from './action.js'
import rootGetter from './getter.js'
import counterModule from './modules/counter/index.js'

const store = createStore({
    modules: {
        numbers: counterModule
    },
    state() {
        return {
            isLoggedIn: false
        }
    },
    mutations: rootMutation,
    actions: rootAction,
    getters: rootGetter,
})

export default store
