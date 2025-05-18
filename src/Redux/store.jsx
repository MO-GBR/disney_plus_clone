import userSlice from './Reducers/UserSlice';
import movieSlice from './Reducers/MovieSlice';

import { configureStore, combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    user: userSlice,
    movie: movieSlice
});

export const store = configureStore({
    reducer: rootReducer
});
