import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';

const SaveToken = async (token) => {
    try {
      await AsyncStorage.setItem('authToken', token);
      console.log('Token saved successfully.');
    } catch (error) {
      console.error('Error saving token:', error);
    }
  };

const RetrieveToken = async () => {
    try {
      const token = await AsyncStorage.getItem('authToken');
      return token;
    } catch (error) {
      console.error('Error retrieving token:', error);
      return null;
    }
  };

  const RemoveToken = async (navigation) => {
    try {
      await AsyncStorage.removeItem('authToken');
      navigation.dispatch(CommonActions.reset({ index: 0, routes: [{ name: 'Login' }] }));
      console.log('Token removed successfully.');
    } catch (error) {
      console.error('Error removing token:', error);
    }
  };

  export { SaveToken, RetrieveToken, RemoveToken };