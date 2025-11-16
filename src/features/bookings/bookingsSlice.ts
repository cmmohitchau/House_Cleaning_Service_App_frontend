import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import BookingService from "./BookingService";

export interface Booking {
  id: string;
  serviceId: string;
  bookingDateTime: string;
  address: string;
  status: string;
}

export interface BookingState {
  bookings: Booking[];
  loading: boolean;
  error: string | null;
}

const initialState: BookingState = {
  bookings: [],
  loading: false,
  error: null
};

// Create Booking
export const createBooking = createAsyncThunk(
  "bookings/create",
  async (data: any, { rejectWithValue }) => {
    try {
      return await BookingService.create(data);
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Booking failed");
    }
  }
);

// Get User Bookings
export const fetchBookings = createAsyncThunk(
  "bookings/fetch",
  async (_, { rejectWithValue }) => {
    try {
      return await BookingService.getUserBookings();
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch bookings");
    }
  }
);

const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Create booking
      .addCase(createBooking.pending, (state) => {
        state.loading = true;
      })
      .addCase(createBooking.fulfilled, (state, action) => {
        state.loading = false;
        state.bookings.push(action.payload);
      })
      .addCase(createBooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Fetch bookings
      .addCase(fetchBookings.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBookings.fulfilled, (state, action) => {
        state.loading = false;
        state.bookings = action.payload;
      })
      .addCase(fetchBookings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default bookingsSlice.reducer;
