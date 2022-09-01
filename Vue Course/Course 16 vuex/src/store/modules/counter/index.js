import counterMutation from "./mutation.js"
import counterAction from "./action.js"
import counterGetter from "./getter.js"


export default {
    namespaced: true,
    state() {
        return {
            counter: 0,
        }
    },
    mutations: counterMutation,
    actions: counterAction,
    getters: counterGetter
}
