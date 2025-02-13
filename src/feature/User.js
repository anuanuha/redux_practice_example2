import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = {name:"", age:0, email:""}
export const userSlice = createSlice({
    name:"user",
    initialState:{
        value: initialStateValue
    },
    reducers:{
        login:(state,action)=>{
            state.value=action.payload;
        },
        logout:(state, action)=>{
            state.value= initialStateValue
        }
    }
});
export const {logout} = userSlice.actions;
export const {login} = userSlice.actions;
export default userSlice.reducer;