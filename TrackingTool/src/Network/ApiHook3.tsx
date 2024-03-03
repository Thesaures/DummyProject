import api from '../Network/api';
 
// import {setStringItem} from '../utils/Utils';
// import Constants from '../utils/Constants';
 
import {useNavigation} from '@react-navigation/native';
 
interface LogInUserProp {
  
}
 
interface LoginUserResponse {
  success: boolean;
  errorMessage: string;
  statusCode: string;
  loginResp: any;
}
 
export async function assesmentList(user_id:number): Promise<LoginUserResponse> {
  let success: boolean = false;
  let errorMessage: string = '';
  let statusCode: string = '';
  let loginResp: any;
 
//   const logInPayload = {
//     email: loginUsername,
//     password: loginPassword,
//   };
 
  try {
    const assesmentResponse = await api.get(
      `/api/v3/${user_id}/assessment`,
    );

    console.log('response', assesmentResponse);
    
    statusCode = assesmentResponse.status.toString();
    {
      statusCode === '200' ? (success = true) : (success = false);
    }
    loginResp = assesmentResponse.data;
    // console.log(loginResp.id);
  } catch (error: any) {
    console.log('Error while logging in:', error);
    errorMessage = error.message;
  }
 
  return {success, statusCode, loginResp, errorMessage};
}