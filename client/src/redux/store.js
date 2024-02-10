// store.js
import { configureStore } from '@reduxjs/toolkit';
import branchReducer from './Branch/branchSlice';
import themeReducer from "./theme/themeSlice.jsx";
export default configureStore({
  reducer: {
     branch: branchReducer,
     theme: themeReducer 
    // Add other reducers if any
  },
});
