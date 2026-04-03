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
    setTheme: (state, action: PayloadAction<"light" | "dark">) => {
      if (state.user) {
        state.user.theme = action.payload;
      }
    },
    updateUserSlice: (state, action: PayloadAction<Partial<UserType>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
  },
});

export default userSlice.reducer;
export const { logIn, logOut, updateUserSlice } = userSlice.actions;
