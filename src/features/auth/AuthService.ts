import axios from "@/lib/axios";

const AuthService = {
  async login(data: { email: string; password: string }) {
    const res = await axios.post("/auth/login", data);
    return res.data; // { user, token }
  },

  async register(data: any) {
    const res = await axios.post("/auth/register", data);
    return res.data; // { user, token }
  },

  async getProfile() {
    const res = await axios.get("/auth/profile");
    return res.data; // user data
  },
};

export default AuthService;
