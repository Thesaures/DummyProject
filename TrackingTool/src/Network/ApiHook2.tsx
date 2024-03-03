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
 
export async function traineList(): Promise<LoginUserResponse> {
  let success: boolean = false;
  let errorMessage: string = '';
  let statusCode: string = '';
  let loginResp: any;
 
//   const logInPayload = {
//     email: loginUsername,
//     password: loginPassword,
//   };
 
  try {
    const logInResponse = await api.get(
      '/api/v4/getTrainees',
    );

    console.log('response', logInResponse);
    statusCode = logInResponse.status.toString();
    {
      statusCode === '200' ? (success = true) : (success = false);
    }
    loginResp = logInResponse.data;
    console.log(loginResp.id);
  } catch (error: any) {
    console.log('Error while logging in:', error);
    errorMessage = error.message;
  }
 
  return {success, statusCode, loginResp, errorMessage};
}