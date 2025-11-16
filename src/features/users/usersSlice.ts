import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "./UserService";

export interface UserState {
  user: any | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

// Fetch current logged-in user
export const fetchCurrentUser = createAsyncThunk(
  "users/fetchCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      return await UserService.getCurrentUser();
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch user");
    }
  }
);

// Update user profile
export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (data: any, { rejectWithValue }) => {
    try {
      return await UserService.updateProfile(data);
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Update failed");
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clearUser: (state) => {
      state.user = null;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Fetch User
      .addCase(fetchCurrentUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Update User
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearUser } = userSlice.actions;
export default userSlice.reducer;
