import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

var state = {
	username :"用户1"
}

const mutations = {
	setUserName:function(state,username){
		state.username = username;
	}
}

const actions = {
	setUserNameA:function({commit},username){
		commit("setUserName",username)
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions
})
