import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        loading: false,

    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    }
})

export const { setLoading } = authSlice.actions;
export const selectLoading = (state) => state.auth.loading;
export default authSlice.reducer;