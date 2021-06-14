import vue from 'vue'
import vuex from 'vuex'
import alert from './alert'
import dialog from './dialog'
import auth from './auth'

vue.use(vuex)

export default new vuex.Store({
    modules: {
        alert,
        dialog,
        auth
    }
})