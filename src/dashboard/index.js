import React, { useCallback, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  PermissionsAndroid,
  TouchableOpacity,
  Alert
} from 'react-native'
import customStyles from "../style";
import TopNav from "../common/topnav";
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';
import { RetrieveToken } from "../storage";
import ThankyouModal from "../thankyou";
import { useNavigation } from '@react-navigation/native';


Geocoder.init('AIzaSyDaWTxa15F6X4aoF7UG_8sDC3VMWhc73Ms'); 

const Dashboard = () => {
  const navigation = useNavigation();
  const onSuccess = useCallback(async (e) => {
    if (e && e.data) {
      const qrData = JSON.parse(e.data);
      const qrId = qrData.coinId; // Extract the coinId value
      console.log('QR Code ID:', qrId);

      try {
        Geolocation.getCurrentPosition(
          position => {
            console.log('Position:', position);
            const { latitude, longitude } = position.coords;
            getCurrentLocation(qrId, latitude, longitude);
          },
          error => {
            console.error('Geolocation Error:', error);
          },
          {
            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 10000,
          }
        );
      } catch (error) {
        console.error('Error getting current position:', error);
      }
    }
  }, []);

  const getCurrentLocation = async (qrId, latitude, longitude) => {
    try {
      const response = await Geocoder.from(latitude, longitude);

      if (response.results.length > 0) {
        const cityComponent = response.results[0].address_components.find(
          component => component.types.includes('locality')
        );

        if (cityComponent) {
          const cityName = cityComponent.long_name;
          console.log('City Name:', cityName);
          await Apidata(qrId, latitude, longitude, cityName);
        } else {
          console.log('City Name not found');
        }
      }
    } catch (error) {
      console.error('Error getting location:', error);
    }
  };

  const Apidata = async (qrId, latitude, longitude, cityName) => {
    const scanData = {
      location: cityName,
      latitude: latitude,
      longitude: longitude
    };

    try {
      console.log("My id is", qrId);
      console.log("latitude", latitude);
      console.log("longitude", longitude);
      console.log("location", cityName);
      const tokenstore = await RetrieveToken(); 
      const response = await fetch(`https://helpcoins-api.customerdemourl.com/api/v1/scan-qr/${qrId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${tokenstore}`,
          
        },
        body: JSON.stringify(scanData),
      });
      const responseData = await response.json();
      console.log('API Response:', responseData);
      if (responseData.message == "QR code scanned successfully") 
      {
        console.log('API call was successful');
        navigation.navigate('ThankyouModal'); 
      } else {
        showAlert('API Error', 'API call was not successful');
        console.log('API call was not successful');
      }
    } catch (error) {
      console.error('API Error:', error);
      showAlert('Error', 'An error occurred');
    }
  };
  const showAlert = (title, message) => {
    Alert.alert(title, message, [{ text: 'OK' }]);
  };

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'Your app needs access to your location for XYZ functionality.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission granted');
      } else {
        console.log('Location permission denied');
      }
    } catch (error) {
      console.warn('Error requesting location permission:', error);
    }
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  return (
    <SafeAreaView style={styles.mainWrapper}>
      <TopNav />
      <Text style={[styles.heading, { textAlign: 'left', marginBottom: 5, marginTop: 32, fontWeight: 'normal', fontSize: 25 }]}>Camera</Text>
      <View style={styles.container}>
        <View style={styles.cameraContainer}>
          <QRCodeScanner
            onRead={onSuccess}
            flashMode={RNCamera.Constants.FlashMode.auto}
            cameraStyle={{ width: widthPercentageToDP('68%'), height: 200 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ...customStyles,
});

export default Dashboard;
