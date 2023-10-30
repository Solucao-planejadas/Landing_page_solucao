import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import auth from "./modules/auth";
import gallery from "./modules/gallery";
export default new Vuex.Store({
  modules: {
    auth,
    gallery,
  },
  plugins: [createPersistedState()],
});
