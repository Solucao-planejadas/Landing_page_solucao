import axios from "axios";
const state = {
  user: null,
  token: null,
};
const getters = {
  isAuthenticated: (state) => !!state.user,
  StateUser: (state) => state.user,
  StateToken: (state) => state.token,
};
const actions = {
  async Register({ dispatch }, form) {
    await axios.post("register", form);
    let UserForm = new FormData();
    UserForm.append("email", form.email);
    UserForm.append("pass", form.password);
    await dispatch("LogIn", UserForm);
  },

  async LogIn({ commit }, User) {
    console.log(User);
    const request = await axios.post("auth/login", {
      email: User.get("email"),
      pass: User.get("pass"),
    });
    await commit("setUser", { token: await request.data.token });
  },

  async LogOut({ commit }) {
    let user = null;
    commit("logout", user);
  },
};
const mutations = {
  setUser(state, token) {
    // console.log(token);
    state.token = token;
  },
  LogOut(state) {
    state.user = null;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
