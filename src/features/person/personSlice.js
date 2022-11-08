import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    personArr: [{name:"sunny"}]
};

export const personSlice = createSlice({
    name: "person",
    initialState,
    reducers: {
        fetchData: (state, data) => {
            state.personArr = data.payload;
        },
    }
})

export const { fetchData } = personSlice.actions;

export default personSlice.reducer;