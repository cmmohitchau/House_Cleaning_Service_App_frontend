import api from "@/lib/axios";

const UserService = {
  async getCurrentUser() {
    const res = await api.get("/users/me");
    return res.data;
  },

  async updateProfile(data: any) {
    const res = await api.put("/users/me", data);
    return res.data;
  }
};

export default UserService;
