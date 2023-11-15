import React from "react";
import {Image, StyleSheet, StatusBar, View} from 'react-native'
import customStyles from "../style";

const Splash = () =>{
    return(
        <View style={styles.splashScreen}>
            <StatusBar hidden={true}/>
            <Image style={styles.splashImg} source={require('../../android/app/src/main/res/drawable/splash.png')}/>       
        </View>
    );
}
const styles = StyleSheet.create({
    ...customStyles,
  });
export default Splash