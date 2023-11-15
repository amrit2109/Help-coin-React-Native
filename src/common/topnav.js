import React, { useEffect, useState } from "react";
import {Text,SafeAreaView,StyleSheet} from 'react-native'
import customStyles from "../style";
import { useRoute } from '@react-navigation/native';




const TopNav = () =>{

  const route = useRoute();
  const user = route.params?.user;


console.log("user", user);
    return(        
    <SafeAreaView style={styles.topNav}>
        <Text style={styles.userName}>hi, <Text style={[{ color: '#227DDE' }]}>{user}</Text></Text>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  ...customStyles,
});
export default TopNav;