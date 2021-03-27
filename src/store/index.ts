import Vue from 'vue'
import Vuex from 'vuex'
import Ui from "@/store/modules/ui";
import Users from "@/store/modules/users";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    actions: {},
    modules: {
        ui: Ui,
        users: Users
    }
})
