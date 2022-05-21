import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Row from '../../Components/Row';
import BtnCustom from '../../Components/BtnCustom';
import { ICONS } from '../../Constants/Icons';

const Login = ({ navigation }) => {

  const [eye,setEye] = useState(false)
  const eyeClose = ICONS.ic_eyeClose;
  const eyeOpen = ICONS.ic_eyeOpen;

  const forgotPassword = () => {
    console.log('forgot password');

  }

  return (
    <View style={styles.container}>
      <View style={styles.txtLogin}>
        <Text containerStyle={styles.welcome}>Welcome Back!</Text>
        <Row style={{ marginTop: 15 }}>
          <Text style={styles.txtAccount}>Don't have an account?  </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Create account')}>
            <Text style={{ fontSize: 14, fontWeight: "600", color: "#4975FF" }}>Get Started</Text>
          </TouchableOpacity>
        </Row>
      </View>
      <View style={styles.formInput}>
        <Text style={styles.txtFormInput}>Phone number</Text>
        <TextInput
          placeholder="(xxx) xxx xxxx"
          style={styles.inputValue}
        />
        <Text style={styles.txtFormInput}>Password</Text>
        <Row style={{ width:'100%',justifyContent:'flex-end', }}>
          <TextInput
            style={[styles.inputValue,{width: '100%'}]}
            secureTextEntry={!eye}
          />
          <TouchableOpacity style={styles.btnEye} onPress={()=>setEye(!eye)}>
            <Image source={eye?eyeOpen:eyeClose} style={{height:'50%',width:30}} />
          </TouchableOpacity>
        </Row>
      </View>

      <View style={styles.btn}>

        <BtnCustom
          onPress={forgotPassword}
          title={'Forgot Password?'}
          style={{ backgroundColor: '#EAEBEE' }}
          styleTxt={{ color: '#4975FF', fontWeight: "600" }}
        />
        <BtnCustom
          onPress={forgotPassword}
          title={'Login'}
          style={{ backgroundColor: '#4A54FF', width: '90%' }}
          styleTxt={{ color: '#FCFCFC', fontWeight: "600" }}
        />
        <Row style={{ marginTop: 15 }}>
          <Text>---------------------------</Text>
          <Text style={{ marginLeft: 15, marginRight: 15, fontSize: 14, fontWeight: '600', color: '#A0A3BD' }}>Or connect with</Text>
          <Text>---------------------------</Text>
        </Row>

        <Row style={{ marginTop: 15,justifyContent:'space-around',width: '100%' }}>
          <BtnCustom
            onPress={forgotPassword}
            title={'Google'}
            style={{ backgroundColor: '#ffffff', width: '35%' ,}}
            styleTxt={{ color: '#FF4141', fontWeight: "600" }}
            ic_source={ICONS.ic_gg}

          />
          <BtnCustom
            onPress={forgotPassword}
            title={'Facebook'}
            style={{ backgroundColor: '#ffffff', width: '35%' }}
            styleTxt={{ color: '#466FFF', fontWeight: "600" }}
            ic_source={ICONS.ic_fb}

          />
        </Row>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
    width: '100%',
    // alignItems: 'center'
    backgroundColor: '#EAEBEE'
  },
  txtLogin: {
    width: '100%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'red'
  },
  welcome: {
    fontSize: 24,
    fontweight: "700",
    color: '#14142B',
  },
  txtAccount: {
    fontSize: 14,
    fontWeight: "500",
    color: '#6E7191',

  },
  formInput: {
    height: '35%',
    width: '90%',
    marginLeft: 15,
    // backgroundColor: 'red',
    marginTop: 10,


  },
  inputValue: {
    borderRadius: 12,
    paddingLeft: 15,
    backgroundColor: '#ffffff',
    elevation: 15,

  },
  txtFormInput: {
    fontSize: 14,
    color: '#4E4B66',
    marginBottom: 5,
    marginTop: 15
  },
  btn: {
    width: '100%',
    height: '40%',
    // backgroundColor: 'red',
    alignItems: 'center'
  },
  btnEye:{
    position: 'absolute', 
    justifyContent: 'center',
    alignItems: 'center',
    height: '90%',
    width: 50,
    backgroundColor:'#ffffff',
    borderRadius:20,
  }

});
