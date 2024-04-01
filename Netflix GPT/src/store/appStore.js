import { configureStore } from "@reduxjs/toolkit";
import configReducer from '../slice/configSlice.js';
import gptReducer from '../slice/gptSlice.js';
import moviesReducer from '../slice/moviesSlice.js';
import userReducer from '../slice/userSlice.js';

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer,
        config: configReducer,
    },
});

export default appStore;