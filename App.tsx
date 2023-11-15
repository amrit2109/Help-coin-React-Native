import React,{useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from "./src/login";
import OtpScreen from "./src/otpScreen";
import Signup from './src/signup';
import { BottomNav } from './src/navigations/bottomNav';
import Dashboard from './src/dashboard';
import Logout from './src/logout';
import Splash from './src/common/splash';
import ThankyouModal from './src/thankyou';
import Coinlocation from './src/coinLocation';

const Stack = createNativeStackNavigator();

const App = () =>{

  const[screen, setScreen] = useState(true);

  useEffect(() =>{
    setTimeout(() =>{
      setScreen(false);
    },1500)
  });

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DrawerNav" screenOptions={{ headerShown: false }}>
        {
          screen ? <Stack.Screen name="Splash" component={Splash} /> : null
        }
        
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Logout" component={Logout} />
        <Stack.Screen name="ThankyouModal" component={ThankyouModal} />
        <Stack.Screen name="Coinlocation" component={Coinlocation} />

        <Stack.Screen name="BottomNav" component={BottomNav} />
      </Stack.Navigator>
      
  </NavigationContainer>

  );
}



export default App;