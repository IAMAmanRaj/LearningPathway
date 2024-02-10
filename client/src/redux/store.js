// store.js
import { configureStore } from '@reduxjs/toolkit';
import branchReducer from './Branch/branchSlice';

export default configureStore({
  reducer: {
     branch: branchReducer,
    // Add other reducers if any
  },
});
