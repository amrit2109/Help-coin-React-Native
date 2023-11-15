import React, { useState, useRef } from "react";
import {  Text, StyleSheet,SafeAreaView, TouchableOpacity, TextInput,View} from 'react-native';
import customStyles from "../style";
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { SaveToken } from "../storage";

const OtpScreen = () =>{
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);
  const navigation = useNavigation();
   const [otp1, setOtp1] = useState("");
   const [otp2, setOtp2] = useState("");
   const [otp3, setOtp3] = useState("");
   const [otp4, setOtp4] = useState("");
   const [status, setStatus] = useState(null); 
   const [message, setMessage] = useState(null); 

   const otp = otp1 + otp2 + otp3 + otp4;
  const route = useRoute();
  const { email } = route.params;
  
  
  const formatEmail = (email) => {
    const [username, domain] = email.split('@');
    const firstChar = username.charAt(0);
    const lastChars = username.slice(-3);
    const formattedEmail = `${firstChar}**********${lastChars}@${domain}`;
    return formattedEmail;
  };
  const formattedEmail = formatEmail(email);

  const handleTextChange = (text, index) => {

    switch (index) {
      case 1:
        if (text.length === 1) {
          inputRef2.current.focus();
        }
        setOtp1(text);
        break;
      case 2:
        if (text.length === 1) {
          inputRef3.current.focus();
        }
        setOtp2(text);
        break;
      case 3:
        if (text.length === 1) {
          inputRef4.current.focus();
        }
        setOtp3(text);
        break;
      case 4:
        setOtp4(text);
        break;
      default:
        break;
    }
  };


  const HanldleOtp = async () =>{
    const otpData = {
      email,
      otp,
    };
    try{
      const res = await fetch('https://helpcoins-api.customerdemourl.com/api/v1/user-email-login',{
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify(otpData),
      });
      const responseData = await res.json();
      console.log("otp response", responseData);
     const ObtainToken = responseData.data.token;
     const userName = responseData.data.user.name;
     SaveToken(ObtainToken);
     if (responseData.status === 200) {
      setStatus("Sucessfull"); 
      navigation.navigate('BottomNav',{userName}); 
      setMessage(true);
      
    } else {
      setStatus("OTP is not Correct"); 
      setMessage(false);
    }
    }
    catch(error){
      setStatus("OTP is not Correct"); 
      setMessage(false);
    }
  }


  


  return(
    <SafeAreaView style={styles.mainWrapper}>
      <Text style={[styles.heading, {textAlign: 'left', marginBottom: 5, marginTop: 60}]}>Enter OTP</Text>
      <Text style={[styles.signAcc, {textAlign: 'left', marginTop: 0, marginBottom: 30}]}>Enter code that we have sent to your email {formattedEmail}</Text>
      <View style={styles.otpFields}>
        <TextInput ref={inputRef1} style={styles.txtField} value={otp1}  onChangeText={(text) => handleTextChange(text, 1)}
        maxLength={1}
        keyboardType="numeric"/> 
        <TextInput ref={inputRef2} style={styles.txtField} value={otp2}  onChangeText={(text) => handleTextChange(text, 2)}
        maxLength={1}
        keyboardType="numeric"/> 
        <TextInput ref={inputRef3} style={styles.txtField} value={otp3}   onChangeText={(text) => handleTextChange(text, 3)}
        maxLength={1}
        keyboardType="numeric"/> 
        <TextInput ref={inputRef4} style={styles.txtField} value={otp4}  onChangeText={(text) => handleTextChange(text, 4)}
        maxLength={1}
        keyboardType="numeric"/> 
      </View>
      {
        message ? <Text style={{color: 'green', fontSize: 14}}>{status}</Text> : <Text style={{color: 'red', fontSize: 14}}>{status}</Text>
      }
        
      <TouchableOpacity style={[styles.loginBtn,{ marginTop:40 }]} onPress={HanldleOtp}>
          <Text style={styles.btnTxt}>Verify</Text>
        </TouchableOpacity>


        <Text style={styles.signAcc}>Don’t have an account? 
        <TouchableOpacity onPress={() =>navigation.navigate('Signup')}>
          <Text style={styles.signupLbl}> Resend</Text>
        </TouchableOpacity>
        </Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  ...customStyles,
});
export default OtpScreen;