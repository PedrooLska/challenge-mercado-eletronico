import { createStore } from "vuex";

import httpRequest from "../services/httpRequest";

export default createStore({
  state: {
    data: {},
    loading: true,
  },
  mutations: {
    SET_PURCHASE_ORDER_DETAILS(state, data) {
      state.data = data;
    },
    SET_LOADING_STATE(state, value) {
      state.loading = value;
    },
  },
  actions: {
    async SET_PURCHASE_ORDER_DETAILS({ commit }) {
      const { data } = await httpRequest.getPurchaseOrderDetailsByID("1");
      commit("SET_LOADING_STATE", false);
      commit("SET_PURCHASE_ORDER_DETAILS", data);
    },
  },
});
