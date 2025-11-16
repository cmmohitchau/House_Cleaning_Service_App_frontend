import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "@/features/auth/authSlice";
import servicesReducer from "@/features/services/servicesSlice";
import bookingsReducer from "@/features/bookings/bookingsSlice";
import usersReducer from "@/features/users/usersSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  services: servicesReducer,
  bookings: bookingsReducer,
  users: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
