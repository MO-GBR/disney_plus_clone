import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    recommanded: null,
    originals: null,
    trendings: null,
    newDisney: null,
}

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setMovie: ( state, action ) => {
            state.recommanded = action.payload.recommanded;
            state.originals = action.payload.originals;
            state.trendings = action.payload.trendings;
            state.newDisney = action.payload.newDisney;
        },
    }
});

export const {
    setMovie
} = movieSlice.actions

export default movieSlice.reducer