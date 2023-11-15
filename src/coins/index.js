import React, { useEffect, useState } from "react";
import {Text,SafeAreaView,StyleSheet, FlatList, View, Image, TouchableOpacity} from 'react-native'
import customStyles from "../style";
import { RetrieveToken } from "../storage";
import TopNav from "../common/topnav";
import { useIsFocused } from '@react-navigation/native';

const Coins = ({navigation}) =>{
  

  const[state,setState] = useState([]);
  const[total,settotal] = useState([]);
  const isFocused = useIsFocused();
  useEffect(()=>{
    HandleData();
  },[isFocused]);


  
    const HandleData = async () =>{
    try {
      const storedToken = await RetrieveToken(); 
      const response = await fetch('https://helpcoins-api.customerdemourl.com/api/v1/user/coins', {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${storedToken}`,
        },
      });
      const responseData = await response.json();
      setState(responseData.data.data);
      settotal(responseData.data.total);
       console.log("total", total);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
    
    
}


const renderItem = ({ item }) => (
    <View style={styles.coinBox} onPress={() =>navigation.navigate('Coinlocation')}>
          <Image style={styles.coinImg} source={require('../../android/app/src/main/res/drawable/star.png')}/>
          <View>
            <Text style={[styles.coinText, {width: "80%"}]}>Location: {item.location}</Text>
 
            <Text style={styles.coinText}>Used x : {item.coin.status}</Text>
            <Text style={styles.coinText1}>Coin id: {item.coin_id}</Text>
          </View>
    </View>
  );
    return(        
    <SafeAreaView style={styles.mainWrapper}>
      <TopNav/>

        <Text style={[styles.heading, {textAlign: 'left', marginBottom: 25, marginTop: 32, fontWeight: 'normal', fontSize: 25}]}>My Coins <Text style={[{ color: "#227DDE"}]}>{total}</Text></Text>

        <FlatList
            data={state}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            />
               
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    ...customStyles,
  });
export default Coins