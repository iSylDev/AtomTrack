import { UserType } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: UserType | null;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      state.user = null;
    },
  },
});

export default userSlice.reducer;
export const { logIn, logOut } = userSlice.actions;
