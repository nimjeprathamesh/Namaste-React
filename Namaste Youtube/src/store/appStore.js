import { configureStore } from '@reduxjs/toolkit';
import appSlice from '../slice/appSlice.js';
import chatSlice from '../slice/chatSlice.js';
import searchSlice from '../slice/searchSlice.js';

const store = configureStore({
    reducer: {
        app: appSlice,
        search: searchSlice,
        chat: chatSlice,
    }
});

export default store;