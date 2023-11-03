import axios from "axios";
const state = {
  user: null,
  token: null,
};
const getters = {
  isAuthenticated: (state) => !!state.token,
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
    let token = null;
    commit("logout", token);
  },
};
const mutations = {
  setUser(state, {token}) {
    state.token = token;
  },
  LogOut(state) {
    state.token = null;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
