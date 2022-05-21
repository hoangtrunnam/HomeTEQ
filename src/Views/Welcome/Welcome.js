import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import BtnCustom from '../../Components/BtnCustom';
import { ICONS } from '../../Constants/Icons';

const imageBackground = require('../../assets/Background.png');


const Welcome = ({navigation}) => {


    return (
        <ImageBackground source={imageBackground} resizeMode='stretch' style={styles.background}>

            <View style={styles.logoLogin}>
                <Image source={ICONS.ic_landing} resizeMode='contain' style={{ width: 100, height: 100,  }} />
                <Text style={styles.txtHomeTeq}>HOMETEQ</Text>
                <Text style={styles.txtHomeTeq,{fontSize:14,fontWeight:"600",paddingTop:5}}>Home Community Smart Living</Text>
                <Image source={ICONS.ic_familyLogin} resizeMode='contain' style={{ width: "90%", height: '60%', }} />

            </View>
            <View style={styles.btnLogin}>
            <BtnCustom
                onPress={() =>  navigation.navigate('Login')}
                title='Login'
                styleTxt={{fontWeight:"600",color:'#466FFF'}}
                style={{ backgroundColor: '#ffffff', marginTop: 20 }}
            />
            <BtnCustom
                onPress={()=> navigation.navigate('Create account')}
                title='Create an account'
                styleTxt={{fontWeight:"600",color:'#FCFCFC'}}
                style={{ backgroundColor: '#0066FF', marginTop: 20 }}
            />

            </View>
        </ImageBackground>
    );
};

export default Welcome;

const styles = StyleSheet.create({
    background: {
        height: '100%',
        width: '100%',
    },
    logoLogin: {
        height: '65%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtHomeTeq: {
        fontSize: 24,
        fontWeight: "700",
    },
    btnLogin:{
        flex:1,
        alignItems: 'center',
    }
});
