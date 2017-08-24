import Vue from 'vue'
import Vuex from 'vuex'
import state from '@/store/state'
import mutations from '@/store/mutations'
import getters from '@/store/getters'
import Actions from '@/store/actions'

Vue.use(Vuex)

export default new Vuex.Store({
	getters,
	state,
	mutations,
	Actions
})













