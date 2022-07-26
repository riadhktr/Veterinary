import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./userSlice";
import accountSlice from './accountSlice'
import forumSlice from "./forumSlice";

export default configureStore({
    reducer:{
        user:userSlice,
        account:accountSlice,
        comment: forumSlice,
       
    }
})