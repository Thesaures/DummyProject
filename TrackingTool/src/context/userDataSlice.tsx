import {createSlice, PayloadAction} from '@reduxjs/toolkit';
 
interface UserDataState {
    details:{
        message: string;
        token:string;
        user_id:string;
    }
  

}
const initialState: UserDataState = {
    details:{
        message: '',
        token:'',
        user_id:''
    }
};
export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
        userData(state:{details:any}, action: PayloadAction<{}>) {
      state.details =action.payload
    },
  },
});
 
export const {userData} = userDataSlice.actions;
export default userDataSlice.reducer;