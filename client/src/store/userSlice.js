import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:[
        {
        }
    ],
    reducers:{

setUsers:(state,action)=>{
    return action.payload;
}, 
getProfile:(state,action)=>{
    return action.payload;
},
setVets:(state,action)=>{
    return action.payload;
}
}
})

export const {setUsers,setVets,getProfile} = userSlice.actions;
export default userSlice.reducer
