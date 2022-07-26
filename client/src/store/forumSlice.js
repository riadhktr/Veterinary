import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid'

const forumSlice = createSlice({
    name:'comment',
    initialState:
        {
            id:uuidv4(),
            title:"welcome ",
            contenu:"this a first comment"
        }
    ,
    reducers:{

  
setComment:(state,action)=>{
    return action.payload;
}

    }
})

export const {setComment} = forumSlice.actions

export default forumSlice.reducer