import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ServicesService from "./ServicesService";

export interface Service {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

export interface ServicesState {
  items: Service[];
  loading: boolean;
  error: string | null;
}

const initialState: ServicesState = {
  items: [],
  loading: false,
  error: null
};

// Fetch All Services
export const fetchServices = createAsyncThunk(
  "services/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      return await ServicesService.getAll();
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch services");
    }
  }
);

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default servicesSlice.reducer;
