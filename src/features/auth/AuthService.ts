import axios from "@/lib/axios";

const AuthService = {
  async login(data: { email: string; password: string }) {
    const res = await axios.post("/users/login", data);
    return res.data; 
  },

  async register(data: any) {
    const res = await axios.post("/users/signup", data);
    return res.data; // { user, token }
  },

  async getProfile() {
    const res = await axios.get("/:id");
    return res.data; // user data
  },
};

export default AuthService;
