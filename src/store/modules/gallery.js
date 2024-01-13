import axios from "axios";
const state = {
  gallerys: null,
  DellItems: null,

  gallerysitems: null,
};
const getters = {
  StateGallery: (state) => state.gallerys,
  StateGalleryItems: (state) => state.gallerysitems,
};
const actions = {
  async GetGallery({ commit }) {
    const request = await axios.get("/gallery");
    await commit("setGallery", { gallerys: await request.data.gallery });
  },

  async GetGalleryById({ commit }, id) {
    const request = await axios.get(`/galleryById/${id}`);
    await commit("setGallery", { gallerys: await request.data.gallery });
  },

  async GetGalleryItems({ commit }, { id, token }) {
    const request = await axios.get(`/gallery/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    await commit("setGalleryItems", {
      gallerysItems: await request.data.gallery,
    });
  },
  async DellGalleryItems({ commit }, { id, token }) {
    const request = await axios.delete(
      `/api/gallery/delete/photo/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    await commit("dellGalleryItems", {
      dellgallerysItems: await request.data,
    });
  },
  async UpGalleryItems({ commit }, { id, token, photo }) {
    const request = await axios.post(
      `/api/gallery/add/${id}`,
      photo,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    await commit("dellGalleryItems", {
      dellgallerysItems: await request.data,
    });
  },
  async UpGallery({ commit }, { id, token, infos }) {
    const request = await axios.post(
      `/api/gallery/update/${id}`,
      infos,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    await commit("dellGalleryItems", {
      dellgallerysItems: await request.data,
    });
  },
  async CreateGallery({ commit }, { token, infos }) {
    const request = await axios.post(
      `/api/gallery`,
      infos,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    await commit("dellGalleryItems", {
      dellgallerysItems: await request.data,
    });
  },
  async DellGallery({ commit }, { id, token }) {
    console.log(token)
    const request = await axios.delete(
      `/api/gallery/delete/album/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    await commit("dellGalleryItems", {
      dellgallerysItems: await request.data,
    });
  },
};
const mutations = {
  setGallery(state, gallerys) {
    state.gallerys = gallerys;
  },
  setGalleryItems(state, gallerysItems) {
    state.gallerysitems = gallerysItems;
  },
  dellGalleryItems(state, dellgallerysItems) {
    state.DellItems = dellgallerysItems;
  },
  dellItems(state, dell) {
    state.DellItems = dell;
  },
  resetItems(state, reset) {
    state.gallerysitems = reset;
  },
  LogOut(state) {
    state.gallerys = null;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
