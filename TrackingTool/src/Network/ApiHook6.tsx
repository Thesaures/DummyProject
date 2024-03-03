import api from '../Network/api';
 
// import {setStringItem} from '../utils/Utils';
// import Constants from '../utils/Constants';
 
import {useNavigation} from '@react-navigation/native';
 
interface LogInUserProp {
    assessment_id:number,
    user_id:number,
    score:number
}
 
interface LoginUserResponse {
  success: boolean;
  errorMessage: string;
  statusCode: string;
  loginResp: any;
}
 
export async function updateUserScore(
    assessment_id: number,
    user_id: number,
    score: number
): Promise<LoginUserResponse> {
  let success: boolean = false;
  let errorMessage: string = '';
  let statusCode: string = '';
  let loginResp: any;

  
 console.log(assessment_id)
  const logInPayload = {
    assessment_id:assessment_id,
    user_id:user_id,
    score:score
  };
 
  try {
    
    const logInResponse = await api.post(
      'api/v3/assessment',
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
    console.log('Error while updating:', error);
    errorMessage = error.message;
  }
 
  return {success, statusCode, loginResp, errorMessage};
}