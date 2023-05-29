import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../../firebase";
import { AuthValues } from "types";

interface UserState {
  name: string | null;
  email: string | null;
  isAuth?: boolean;
}

export const fetchSignUpUser = createAsyncThunk<UserState, AuthValues>(
  "user/fetchSignUpUser",
  async ({ name, email, password }) => {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    if (user) {
      await updateProfile(user, { displayName: name });
      return {
        name: user.displayName,
        email: user.email,
      };
    }
    throw new Error("User registration failed!");
  },
);

export const fetchSignInUser = createAsyncThunk<UserState, AuthValues>(
  "user/fetchSignInUser",
  async ({ email, password }) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      return {
        name: user.displayName,
        email: user.email,
      };
    } catch (error) {
      throw error;
    }
  },
);

const initialState: UserState = {
  name: null,
  email: null,
  isAuth: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchSignUpUser.pending, (state, { payload }) => {});
    builder.addCase(fetchSignUpUser.fulfilled, (state, { payload }) => {
      state.name = payload.name;
      state.email = payload.email;
      state.isAuth = true;
    });
    builder.addCase(fetchSignUpUser.rejected, (state, { payload }) => {
      state.isAuth = false;
      alert("Checked entered data!");
    });
    builder.addCase(fetchSignInUser.pending, (state, { payload }) => {});
    builder.addCase(fetchSignInUser.fulfilled, (state, { payload }) => {
      state.name = payload.name;
      state.email = payload.email;
      state.isAuth = true;
    });
    builder.addCase(fetchSignInUser.rejected, (state, { payload }) => {
      alert("Checked entered data!");
    });
  },
});

export default userSlice.reducer;
