import api from '../Network/api';
 
// import {setStringItem} from '../utils/Utils';
// import Constants from '../utils/Constants';
 
import {useNavigation} from '@react-navigation/native';
 
interface LogInUserProp {
  loginUsername: string;
  loginPassword: string;
}
 
interface LoginUserResponse {
  success: boolean;
  errorMessage: string;
  statusCode: string;
  loginResp: any;
}
 
export async function loginUser({
  loginUsername,
  loginPassword,
}: LogInUserProp): Promise<LoginUserResponse> {
  let success: boolean = false;
  let errorMessage: string = '';
  let statusCode: string = '';
  let loginResp: any;

  console.log('in login', loginUsername)
 
  const logInPayload = {
    email: loginUsername,
    password: loginPassword,
  };
 
  try {
    const logInResponse = await api.post(
      '/api/v1/userLogin',
      logInPayload,
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