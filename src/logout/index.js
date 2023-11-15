import React from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import customStyles from "../style";
import { RemoveToken } from "../storage";


const Logout = ({ navigation }) =>{
    const HandleLogout = () =>{
        RemoveToken(navigation);
        console.log("Press on logout")
    }
    return(
        <View style={styles.logoutScreen}>
            <View style={styles.logoutBox}>
                <Image style={styles.logoutImg} source={require('../../android/app/src/main/res/drawable/logouticon.png')}/>
                <Text style={[styles.heading, styles.logoutHeading]}>Are you sure to log out of your account?</Text>
                <TouchableOpacity style={[styles.loginBtn, styles.logoutBtn]} onPress={HandleLogout}>
                    <Text style={styles.btnTxt}>Log Out</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={[styles.cancleBtn, {color: "#227DDE", fontSize: 16, fontWeight: "bold", marginTop: 20}]}>Cancel</Text>
                </TouchableOpacity>
            </View>
       
        </View>
    );
}



const styles = StyleSheet.create({
    ...customStyles,
  });

export default Logout;