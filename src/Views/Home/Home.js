import { Alert, BackHandler, FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import Row from '../../Components/Row'
import { ICONS } from '../../Constants/Icons';
import SelectDepartment from './SelectDepartment';
import AnnouncementList from './AnnouncementList';
import ServicesHome from '../../Services/Services.home';
import Notification from './Notification';
const Home = () => {
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to go back?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const renderAnnouncement = () => (
    <AnnouncementList />
  )

  const imageBackground = require("../../assets/Background.png");
  return (
    <ImageBackground source={imageBackground} resizeMode='stretch' style={styles.container}>
      <View style={styles.header}>
        <Row style={styles.rowHeader}>
          <SelectDepartment />
          <TouchableOpacity>
            <Image source={ICONS.ic_red_call} resizeMode='contain' style={styles.icRedCall} />
          </TouchableOpacity>
        </Row>
      </View>
      <View style={styles.containerChildren}>
        <Text style={{ fontSize: 32, fontWeight: '700', color: '#14142B', marginTop: 15 }}>Good Morning!</Text>
        <Text style={{ fontSize: 14, fontWeight: '400', color: '#6E7191', marginTop: 15 }}>Announcement</Text>
        <View style={styles.AnnouncementListContainer} >
          <FlatList
            data={[1, 2, 3, 4]}
            renderItem={renderAnnouncement}
            keyExtractor={item => item}
            horizontal={true}
          />
        </View>
        <Text style={{ fontSize: 14, fontWeight: '600', color:'#6E7191',marginTop: 15 }}>Services</Text>
        <ServicesHome/>
        <Notification/>
      </View>

    </ImageBackground>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  containerChildren: {
    width: '90%',
    height: '100%',
    // backgroundColor: 'red'
  },
  header: {
    width: '100%',
    height: '10%',
    marginTop: 15
    // backgroundColor: 'red'
    // borderBottomWidth: 1
  },
  rowHeader: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-around',
  },
  // containerHouseName:{
  //   height:'90%',
  //   width:'40%',
  //   backgroundColor: 'red',
  //   borderRadius:56,
  // },
  icRedCall: {
    height: 100,
    width: 100,
    marginTop: 30
  },
  AnnouncementListContainer: {
    // width: 280,
    // height: 120,
    // marginLeft: 15,
  }
})