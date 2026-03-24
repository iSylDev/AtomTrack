import { UserType } from "@/types/User";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: UserType | null = null;

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<UserType>) => {
      action.payload;
    },
    logOut: () => null,
  },
});
