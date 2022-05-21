import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { ICONS } from '../../Constants/Icons'
import Row from '../../Components/Row'
import BtnCustom from '../../Components/BtnCustom'
import { useDispatch } from 'react-redux'
import { checkIdCreateHome } from '../../Redux/Actions/CheckIdCreateHome.action'
const CreateHome = ({ navigation }) => {
    // console.log('home id la: ',homeId);
    const dispatch = useDispatch()
    const [homeId, setHomeId] = useState('');
    const handlerConfirmHomeId = () => {
        dispatch(checkIdCreateHome(homeId))
        
    }



    return (
        <View style={styles.container}>
            <View style={styles.txtContainer}>
                <Text style={styles.txtCreateHome}>Create your home</Text>
                <Text style={styles.txtdescription}>Enter your home ID to connect with your neighbors</Text>
                <Image source={ICONS.ic_avatar_create_home} resizeMode='contain' style={styles.icon} />
            </View>
            <View style={styles.inputAndBtn}>
                <Text style={{ color: '#4E4B66' }}>Home ID</Text>
                <Row style={{ justifyContent: 'flex-end', width: '100%', marginTop: 10 }}>
                    <TextInput
                        style={styles.inputHomeId}
                        placeholder="Enter your home ID or scan QR code"
                        value={homeId}
                        onChangeText={value => setHomeId(value)}
                    />
                    <TouchableOpacity style={styles.btnQrCode}>
                        <Image source={ICONS.ic_Qr_code} />
                    </TouchableOpacity>
                </Row>

                <BtnCustom
                    title={'Confirm'}
                    style={{ backgroundColor: '#5A87FE', width: '100%', marginTop: 20 }}
                    styleTxt={{ color: '#FCFCFC', fontWeight: "600" }}
                    onPress={handlerConfirmHomeId}
                />
            </View>
        </View>
    )
}

export default CreateHome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EAEBEE'
    },
    txtContainer: {
        height: '30%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'red',
    },
    icon: {
        height: 100,
        width: 100,
    },
    txtCreateHome: {
        fontSize: 24,
        fontWeight: "700",
        lineHeight: 32,
        color: '#14142B',
        marginTop: 10
    },
    txtdescription: {
        color: '#6E7191',
        fontSize: 14,
        fontWeight: "500",
        lineHeight: 20,
        marginTop: 10,
        marginBottom: 10,
    },
    inputAndBtn: {
        height: '30%',
        width: '90%',
        // backgroundColor:'red',

    },
    inputHomeId: {
        // borderWidth: 1,
        height: 50,
        width: '100%',
        borderRadius: 50,
        paddingLeft: 20,
        backgroundColor: '#ffffff'
        // paddingRight: 20,
    },
    btnQrCode: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90%',
        width: 50,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        marginRight: 20
    }


})