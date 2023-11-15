import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image} from 'react-native';
import { useRoute, useNavigationState } from '@react-navigation/native';
import Logout from '../logout';
import Dashboard from "../dashboard";
import Coins from "../coins";

const Tab = createBottomTabNavigator();


const BottomNav = () =>{
 const route = useRoute();
  const { userName } = route.params;
 console.log("userName", userName);

 
    return(

<Tab.Navigator
        barStyle = {{backgroundColor: "#333"}}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused,  size ,color}) => {
            let iconName;

            if (route.name === 'Dashboard') {
              iconName = focused
              ? require('../../android/app/src/main/res/drawable/scanner.png')
              : require('../../android/app/src/main/res/drawable/scanneractive.png');
            } else if (route.name === 'Coins') {
              iconName = focused
              ? require('../../android/app/src/main/res/drawable/coins.png')
              : require('../../android/app/src/main/res/drawable/coinsactive.png');
            }
            else if (route.name === 'Logout') {
              iconName = focused
                ? require('../../android/app/src/main/res/drawable/logout.png')
                : require('../../android/app/src/main/res/drawable/logout1.png');
            }
            return (
              <Image
                source={iconName}
                style={{ width: 35, height: 35, tintColor: color }}
              />
            );
          },
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle:{
            paddingTop: 35,
            paddingBottom: 25,
          }
        })}
        tabBarOptions={{
          showLabel: false, 
        }} 
      >
        <Tab.Screen name="Dashboard" component={Dashboard} initialParams={{ user: userName }} />
          <Tab.Screen name="Coins" component={Coins} initialParams={{ user: userName }} />
          <Tab.Screen name="Logout" component={Logout}/>
          
        </Tab.Navigator>
    );
}





export { BottomNav};