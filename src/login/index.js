import React, {useEffect, useState} from "react";
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import customStyles from "../style";
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

const Login = () =>{
  const route = useRoute();
  const navigation = useNavigation();
  const[message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  if (route.params?.uEmail) {
    setEmail(route.params.uEmail);
  }

  const handleSubmit = async () =>{

    try{
      const Emaildata = {
        email: email,
      };
      const response =  await fetch('https://helpcoins-api.customerdemourl.com/api/v1/user-send-email-otp',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Emaildata),
      });
      const responseData = await response.json();
      setEmail("");
      console.log("Login response", responseData);
      console.log("message", responseData.message);
      if(responseData.status === 200){
        navigation.navigate('OtpScreen',{email}); 
        setMessage(responseData.message);
        setStatus(true);
      }
      else{
        setMessage(responseData.message);
        setStatus(false);
      }
      
    } catch (error) {
    setMessage(responseData.message);
    setStatus(false);

  }
  }
   

    
  return <SafeAreaView style={styles.mainWrapper}>
      <Text style={styles.heading}>Login</Text>
      <View>
        <Text style={styles.lable}>Email or Phone Number</Text>        
        <TextInput style={styles.txtField} placeholder="Enter your email/phone" onChangeText={mail => setEmail(mail)} value={email}/>
        {status ? <Text style={{color: 'green', fontSize: 14}}>{message}</Text> : <Text style={{color: 'red', fontSize: 14}}>{message}</Text>}
        

        <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
          <Text style={styles.btnTxt}>Send OTP</Text>
        </TouchableOpacity>
         
        <Text style={styles.signAcc}>Don’t have an account? 
        <TouchableOpacity onPress={() =>navigation.navigate('Signup')}>
          <Text style={styles.signupLbl}> Sign Up</Text>
        </TouchableOpacity>
        </Text>
        <View style={styles.lines}>
          <View style={styles.beforeLine}></View>
          <Text style={styles.orText}>OR</Text>
          <View style={styles.afterLine}></View>
        </View>
        <TouchableOpacity style={styles.googleBtn}>
          <Image style={styles.googleImg} source={require('../../android/app/src/main/res/drawable/google.png')}/>
          <Text style={styles.googleTxt}>Sign in with Google</Text>
        </TouchableOpacity>
      </View>
  </SafeAreaView>;
  
  
  
}

const styles = StyleSheet.create({
  ...customStyles,
});

export default Login;