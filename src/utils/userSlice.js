import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",

    initialState:[],

    reducers:{
        addUser: (state,action)=>{
            state.push(...action.payload)
        },

        updateUser:(state, action)=>{
            const { index, updateUser } = action.payload;
            if(state[index]) {
                state[index] = { ...state[index], ...updateUser };
            }
           
        }
    }
})

export const {addUser, updateUser} = userSlice.actions
export default userSlice.reducer