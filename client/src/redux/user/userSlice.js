import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
    error: null,
    loading: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        updateUserStart:(state)=>{
          state.loading = true
          state.error = null;
        },
        updateUserSuccessfully:(state,action)=>{
            state.currentUser = action.payload;
            state.loading = false;
            state.error  = false;
        },
        updateUserFailure: (state,action)=>{
            state.loading = false;
            state.error = action.payload;
        }
    }
});

// Export the action creators
export const { signInStart, signInSuccess, signInFailure, updateUserStart,updateUserSuccessfully,updateUserFailure} = userSlice.actions;

// Export the reducer
export default userSlice.reducer;