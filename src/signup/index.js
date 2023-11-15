import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import customStyles from "../style";

const Signup = ({navigation}) =>{
  const[uName, setName] = useState('');
  const[uEmail, setEmail] = useState('');
  const[uPhone, setphone] = useState('');
  const[output, Setoutput] = useState(null);
  const[nameMsg, setnameMsg] = useState('');
  const[emailMsg, setemailMsg] = useState('');
  const[phoneMsg, setphoneMsg] = useState('');

  const HandleReg = async () =>{
    const Reg = {
      name: uName,
      phone: uPhone,
      email: uEmail,
    };
    try{
      const res = await fetch('https://helpcoins-api.customerdemourl.com/api/v1/register',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Reg),
      });
      const data = await res.json();
      console.log("Register Email Data", data);
     
      if(data.status === 200){
        navigation.navigate('Login'); 
        Setoutput(true);
        setnameMsg(data.message.name);
        setemailMsg(data.message.email);
        setphoneMsg(data.message.phone);
        setName("");
        setEmail("");
        setphone("");
    }
    else{
      setnameMsg(data.message.name);
      setemailMsg(data.message.email);
      setphoneMsg(data.message.phone);
      Setoutput(false);
    }
    }catch (error) {
      setnameMsg(data.message.name);
      setemailMsg(data.message.email);
      setphoneMsg(data.message.phone);
      Setoutput(false);
  
    }
  }
    
  return <SafeAreaView style={styles.mainWrapper}>
      <Text style={[styles.heading,{marginBottom: 20}]}>Sign Up</Text>
      <View>
        <Text style={[styles.lable,{marginTop: 15}]}>Name</Text>        
        <TextInput style={styles.txtField} value={uName} placeholder="Enter your name" onChangeText={uName => setName(uName)} />
        {
          output ? <Text style={{color: 'green', fontSize: 14}}>{nameMsg}</Text> : <Text style={{color: 'red', fontSize: 14}}>{nameMsg}</Text>  
        }

        <Text style={[styles.lable,{marginTop: 15}]}>Email Address</Text>        
        <TextInput style={styles.txtField} value={uEmail} placeholder="Enter your email" onChangeText={uEmail => setEmail(uEmail)} />
        {
          output ? <Text style={{color: 'green', fontSize: 14}}>{emailMsg}</Text> : <Text style={{color: 'red', fontSize: 14}}>{emailMsg}</Text>  
        }


        <Text style={[styles.lable,{marginTop: 15}]}>Phone Number</Text>        
        <TextInput style={styles.txtField} value={uPhone} placeholder="Enter your phone" onChangeText={uPhone => setphone(uPhone)} />
        {
          output ? <Text style={{color: 'green', fontSize: 14}}>{phoneMsg}</Text> : <Text style={{color: 'red', fontSize: 14}}>{phoneMsg}</Text>  
        }



        <TouchableOpacity style={styles.loginBtn} onPress={HandleReg}>
          <Text style={styles.btnTxt}>Sign Up</Text>
        </TouchableOpacity>
       


        <Text style={styles.signAcc}>Already have an account?
        <TouchableOpacity onPress={() =>navigation.navigate('Login')}>
          <Text style={styles.signupLbl}> Login</Text>
        </TouchableOpacity>
        </Text>
      </View>
  </SafeAreaView>;
  
  
  
}

const styles = StyleSheet.create({
  ...customStyles,
});

export default Signup;