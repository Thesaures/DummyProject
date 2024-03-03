import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import HomeStackNavigation from '../src/navigation/AppNavigation';
import HomeStackNavigation from './Navigation/AppNavigation';
import {useDispatch, useSelector} from 'react-redux';
import {userLogin} from './context/userSlice';
import Constants from './utils/Constants';
import {getItem} from './utils/Utils';
import AuthStackNavigation from './Navigation/AuthNavigation';
import Page1 from './Screen/Page1';
 
const Main = () => {
  const isLoggedIn = useSelector((state: any) => state.userReducer.isLoggedIn);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true);
 
  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const isLogin = await getItem(Constants.IS_LOGIN);
 
      if (isLogin === 'true') {
        dispatch(userLogin(true));
      } else {
        dispatch(userLogin(false));
      }
      setIsLoading(false);
    })();
  }, []);
  return isLoading ? (
<Page1 />
  ) : (
<NavigationContainer>
      {isLoggedIn ? <HomeStackNavigation /> : <AuthStackNavigation />}
</NavigationContainer>
  );
};
 
export default Main;

