import {createSlice} from '@reduxjs/toolkit';

const branchSlice=createSlice({
    name:'branch',
    initialState:{
        value:null,
    },
    reducers:{
        setBranch:(state,action)=>{
            state.value=action.payload;
        },
    },
    }
);
export const {setBranch} = branchSlice.actions;

export default branchSlice.reducer;