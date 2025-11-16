import axios from "@/lib/axios";

const ServicesService = {
  async getAll() {
    const res = await axios.get("/services");
    return res.data; // list of services
  },

  async getById(id: string) {
    const res = await axios.get(`/services/${id}`);
    return res.data; // single service
  },
};

export default ServicesService;
