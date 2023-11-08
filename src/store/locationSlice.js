import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    location: ""
}


export const locationSlice = createSlice({
    name: "locations",
    initialState,
    reducers: {
        addLocation: (state, action) => {
            state.location = action.payload;
        }

    }


})


export const { addLocation } = locationSlice.actions
export default locationSlice.reducer;