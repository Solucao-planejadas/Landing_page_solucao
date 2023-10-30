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
    const request = await axios.get("http://localhost:3000/gallery");
    // console.log(request);
    console.log(request.data.gallery, "teste perna 01");
    await commit("setGallery", { gallerys: await request.data.gallery });
  },

  async GetGalleryItems({ commit }, { id, token }) {
    const request = await axios.get(`http://localhost:3000/gallery/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(request, "teste perna");
    await commit("setGalleryItems", {
      gallerysItems: await request.data.gallery,
    });
  },
  async DellGalleryItems({ commit }, { id, token }) {
    const request = await axios.delete(
      `http://localhost:3000/api/gallery/delete/photo/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(request, "teste perna");
    await commit("dellGalleryItems", {
      dellgallerysItems: await request.data,
    });
  },
  async UpGalleryItems({ commit }, { id, token, photo }) {
    console.log();
    const request = await axios.post(
      `http://localhost:3000/api/gallery/add/${id}`,
      photo,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(request, "teste perna");
    await commit("dellGalleryItems", {
      dellgallerysItems: await request.data,
    });
  },
  async UpGallery({ commit }, { id, token, infos }) {
    console.log();
    const request = await axios.post(
      `http://localhost:3000/api/gallery/update/${id}`,
      infos,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(request, "teste perna");
    await commit("dellGalleryItems", {
      dellgallerysItems: await request.data,
    });
  },
};
const mutations = {
  setGallery(state, gallerys) {
    // console.log(gallerys, "mutations");
    state.gallerys = gallerys;
    // console.log(state.gallerys, "mutations");
  },
  setGalleryItems(state, gallerysItems) {
    // console.log(gallerysItems, "mutations");
    // console.log(gallerysItems, "Teste mamaco da bunda branca");
    state.gallerysitems = gallerysItems;
    // console.log(state.gallerysitems, "mutations");
  },
  dellGalleryItems(state, dellgallerysItems) {
    // console.log(gallerysItems, "mutations");
    // console.log(dellgallerysItems, "Teste mamaco da bunda branca");
    state.DellItems = dellgallerysItems;
    // console.log(state.gallerysitems, "mutations");
  },
  dellItems(state, dell) {
    // console.log(gallerysItems, "mutations");
    // console.log(dellgallerysItems, "Teste mamaco da bunda branca");
    state.DellItems = dell;
    // console.log(state.gallerysitems, "mutations");
  },
  resetItems(state, reset) {
    // console.log(gallerysItems, "mutations");
    console.log("limpando items");
    state.gallerysitems = reset;
    // console.log(state.gallerysitems, "mutations");
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
