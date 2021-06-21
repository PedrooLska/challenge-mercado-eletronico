import api from "./api";

export default {
  getPurchaseOrderDetailsByID(id) {
    return api.get(`orders/${id}`);
  },
};
