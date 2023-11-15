import React from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import customStyles from "../style";


const ThankyouModal = ({ navigation }) =>{
    
    return(
        <View style={styles.logoutScreen}>
            <View style={styles.logoutBox}>
                <Image style={styles.logoutImg} source={require('../../android/app/src/main/res/drawable/done.png')}/>
                <Text style={[styles.heading, styles.logoutHeading, styles.thanksHeading]}>Thank You</Text>
                <Text style={[styles.signAcc, styles.thankCont]}>Thanks for helping someone. we record your effort to inspire others</Text>
            <TouchableOpacity style={[styles.loginBtn, styles.logoutBtn]}  onPress={() =>navigation.navigate('Coins')}>
                    <Text style={styles.btnTxt}>OK</Text>
                </TouchableOpacity>
            </View>
       
        </View>
    );
}



const styles = StyleSheet.create({
    ...customStyles,
  });

export default ThankyouModal;