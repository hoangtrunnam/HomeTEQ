import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import * as types from '../../Constants/Actions.redux'
import { AuthenOtp } from '../../Redux/Actions/Authentication.action'
const ConfirmOTP = ({ navigation, route }) => {
  const { name, phoneNumber } = route.params;
  const [count, setCount] = useState(10);
  const dispatch = useDispatch()

  const timerId = useRef()
  let textInput = useRef(null)
  const [internalvalue, setInternalValue] = useState('')

  const lengthInput = 6;
  const handleStartCount = () => {
    timerId.current = setInterval(() => {
      setCount(prev => prev - 1)
    }, 1000)
  }

  useEffect(() => {
    handleStartCount()
    console.log('count', count);
  }, [])

  if (count === 0) {
    clearInterval(timerId.current);
    // resent code here
  }

  useEffect(() => {
    textInput.focus();
  }, [])

  const onChangeText = (value) => {
    setInternalValue(value)
  }

  const otpFromBackend = 555555

  if (internalvalue == otpFromBackend) {
    // navigation.navigate('BottomTab')

  }

  if (lengthInput == internalvalue.length) {
    // console.log('navigate to home screen');
    dispatch(AuthenOtp(otpFromBackend))
    console.log('otp confirm ',otpFromBackend);
  }



  return (
    <View style={styles.container}>
      <Text style={styles.txtOtp}>Hello {name ? name : 'Hoàng Trung Nam'}</Text>
      <Text style={styles.txtOtp}>Enter OPT we just sent to your phone number.</Text>
      <Text style={{ marginTop: 5, color: 'black' }} >{phoneNumber ? phoneNumber : '09xx000xx'}</Text>
      <Text style={styles.txtOtp}>resent code in {count}s</Text>


      <View style={styles.inputOtp}>
        <TextInput style={styles.inputCodeOtp}
          ref={input => textInput = input}
          keyboardType="numeric"
          maxLength={lengthInput}
          returnKeyType='done'
          value={internalvalue}
          onChangeText={onChangeText}
        />
        <View style={styles.containerInput}>
          {
            Array(lengthInput).fill().map((data, index) => (
              <View style={[styles.cellView, { borderBottomColor: index === internalvalue.length ? "#FB6C6A" : "#234DB7" }]} key={index}>
                <Text style={styles.cellText}
                  onPress={() => textInput.focus()}
                >
                  {internalvalue && internalvalue.length > 0 ? internalvalue[index] : ''}


                </Text>
              </View>
            ))
          }

        </View>

      </View>
    </View>
  );
};

export default ConfirmOTP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  txtOtp: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 10
  },
  inputOtp: {
    height: '50%',
    width: '100%',
    // backgroundColor:'red'
  },
  inputCodeOtp: {
    width: 0,
    height: 0,
  },
  containerInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellView: {
    paddingVertical: 11,
    width: 40,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1.5,
  },
  cellText: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: "600",
    color: '#000000'
  }
});
