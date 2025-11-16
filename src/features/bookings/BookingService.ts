import axios from "@/lib/axios";

const BookingService = {
  async create(data: any) {
    const res = await axios.post("/bookings", data);
    return res.data; // newly created booking
  },

  async getUserBookings() {
    const res = await axios.get("/bookings/my");
    return res.data; // current user's bookings
  },

  async getAll() {
    const res = await axios.get("/bookings");
    return res.data; // admin only (optional)
  },
};

export default BookingService;
