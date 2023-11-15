import { FullWindowOverlay } from "react-native-screens";

const customStyles = {
    mainWrapper:{
      backgroundColor: '#fff',
      paddingTop: 45,
      padding: 30,
      flex: 1
    },
    heading:{
      color: '#101623',
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 60
    },
    signAcc:{
      color: '#717784',
      textAlign: 'center',
      fontSize: 17,
      fontWeight: 'normal',
      marginTop: 25,
    },
    signupLbl:{
      color: '#227DDE',
      textAlign: 'center',
      fontSize: 17,
      fontWeight: 'normal',
    },
    
    lable:{
      color: '#101623',
      fontWeight: 'normal',
      fontSize: 18,
      marginBottom: 12
    },
    txtField:{
      borderRadius: 6,
      borderWidth: 1,
      borderColor: '#E5E7EB',
      color: '#333',
      fontWeight: 'normal',
      fontSize: 17,
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 20,
      paddingRight: 20,
    },
    beforeLine:{
      backgroundColor: '#E5E7EB',
      height: 1,
      width: 135,
      position: 'absolute',
      top: 35,
      left: 0,
    },
    afterLine:{
      backgroundColor: '#E5E7EB',
      height: 1,
      width: 135,
      position: 'absolute',
      top: 35,
      right: 0,
    },
    orText:{
      textAlign: 'center',
      color: '#A1A8B0',
      fontSize: 16,
      fontWeight: 'normal',
      marginTop: 25,      
    },
    loginBtn:{
      backgroundColor: '#227DDE',
      borderRadius: 8,
      color: '#fff',
      paddingTop: 15,
      paddingBottom: 15,
      marginTop: 70
    },
    btnTxt:{
      color: '#fff',
      textAlign: 'center',
      fontSize: 17,
      fontWeight: 'normal',
    },
    googleBtn:{
      marginTop: 30,
      borderRadius: 8,
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#E5E7EB',
      padding: 14,
      position: 'relative',
    },
    googleTxt:{
      color: '#000',
      fontSize: 18,
      textAlign: 'center',
      fontWeight: 'normal'
    },
    googleImg:{
      position: 'absolute',
      top: 16,
      left: 16
    },
    otpFields:{
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    userName:{
      color: '#101623',
      fontSize: 19,
      fontWeight: 'bold',
      lineHeight: 32,
    },
    logoutScreen:{
      backgroundColor: 'rgba(5, 5, 5, 0.50);',
      flex: 1,  alignItems: 'center',
      justifyContent: 'center'
    },
    logoutBox:{
      width: '80%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#fff",
      borderRadius: 24,
      paddingTop: 52,
      paddingBottom: 32,
      paddingLeft: 32,
      paddingRight: 32,
    },
    logoutBtn:{
      alignSelf: 'stretch',
      marginTop: 0
    },
    logoutHeading:{
      marginBottom: 30,
      fontSize: 20,
      marginTop: 50

    },
    coinBox:{
      borderRadius: 10,
      borderColor: "#E5E7EB",
      borderWidth: 1,
      padding: 10,
      paddingBottom: 5,
      marginBottom: 16,
      flexDirection: 'row',
      alignItems: 'center',      
    },
    coinText:{
      color: "#3B4453",
      fontSize: 14,
      fontWeight: 'bold',
      marginBottom: 16,
    },
     coinImg:{
      marginRight: 20,
    },
    coinText1:{
      fontSize: 10,
      color: "#3B4453",
      fontWeight: 'bold',
      position: "absolute",
      bottom: -10,
      right: -5,
    },
    splashScreen:{
      flex: 1,
      width: '100%',
      height: 'auto'
    },
    splashImg:{
      flex: 1,
      width: '100%',
      height: 'auto'
    },
    container: {
    },
    cameraContainer: {
      borderWidth: 1,
      borderColor: '#e5e7eb',
      borderRadius: 10,
      padding: 10,
      marginTop: 30,
      width: "100%",
      height: 400,
      paddingLeft: 30
    },
    thanksHeading:{
      marginBottom: 0,
    },
    thankCont:{
      marginBottom: 45,
      color: '#A1A8B0',
      marginTop: 5,
    }

  }

  export default customStyles;