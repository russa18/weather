import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    location: "goa",
    currDate:Date.now()
}


export const locationSlice = createSlice({
    name: "locations",
    initialState,
    reducers: {
        addLocation: (state, action) => {
            state.location = action.payload;
        },
        addDate:(state,action)=>{
            state.currDate=action.payload

        }

    }


})


export const { addLocation ,addDate} = locationSlice.actions
export default locationSlice.reducer;