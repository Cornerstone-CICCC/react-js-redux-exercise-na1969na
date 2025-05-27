import { createSlice } from "@reduxjs/toolkit";

type UserState = {
  firstname: string;
  lastname: string;
  age: number;
};

const initialState: UserState = {
  firstname: "",
  lastname: "",
  age: 0,
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment: (state) => {
      state.age += 1;
    },
    decrement: (state) => {
      state.age -= 1;
    },
    reset: (state) => {
      state.age = 0;
    },
    incrementByNum: (state, action) => {
      state.age += action.payload;
    },
    setFirstname: (state, action) => {
      state.firstname = action.payload;
    },
    setLastname: (state, action) => {
      state.lastname = action.payload;
    },
  },
});

// For dispatch methods
export const { increment, decrement, reset, incrementByNum, setFirstname, setLastname } =
  UserSlice.actions;

// For importing to store
export default UserSlice.reducer;
