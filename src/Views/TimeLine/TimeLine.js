import {StyleSheet, Text, View, ActivityIndicator, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SERVICE} from '../../Services/Services.covid';
import Row from '../../Components/Row';
import TableCovid from './TableCovid';
const api =
  'https://static.pipezero.com/covid/data.json?fbclid=IwAR2iS96N0f61V3vQ8Kc9QA2_lskGxquXXoDs-etVRytN45EPwPc3resMB2A';

const TimeLine = () => {
  const [data, setData] = useState();

  const handlerGetCovid = async () => {
    const res = await SERVICE.get(api);
    console.log('res', res);
    setData(res);
  };

  useEffect(() => {
    handlerGetCovid();
    console.log('data', data);
  }, []);

  const today = data?.overview[data.overview.length - 1].date;
  const caseToday = data?.today.internal.cases;
  const deathToday = data?.today.internal.death;
  const recovered = data?.today.internal.recovered;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.txtHeader}>Thông Tin Covid Việt Nam 2022</Text>
      <Text style={styles.txtHeader}>Bảng Thông tin Khu vực ca bệnh</Text>
      <View style={styles.overView}>
        <Text style={styles.txtToday}>Hôm nay {today}</Text>
        <Row>
          <Text style={[styles.txtToday, {fontSize: 14}]}>
            Tổng số ca nhiễm:{' '}
          </Text>
          <Text style={[styles.txtToday, {fontSize: 14}]}>{caseToday} ca</Text>
        </Row>
        <Row>
          <Text style={[styles.txtToday, {fontSize: 14}]}>
            Tổng số ca tử vong :{' '}
          </Text>
          <Text style={[styles.txtToday, {fontSize: 14}]}>{deathToday} ca</Text>
        </Row>
        <Row>
          <Text style={[styles.txtToday, {fontSize: 14}]}>
            Tổng số ca hồi phục:{' '}
          </Text>
          <Text style={[styles.txtToday, {fontSize: 14}]}>{recovered} ca</Text>
        </Row>
      </View>
      {
        
        !data? <ActivityIndicator size="large" color="#00ff00" />  :  <TableCovid dataCovid={data} />
      }
    </ScrollView>
  );
};

export default TimeLine;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: 'red'
  },
  txtHeader: {
    fontSize: 24,
    color: 'red',
    fontWeight: '700',
  },
  overView: {
    height: '15%',
    width: '100%',
    // backgroundColor:'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtToday: {
    fontSize: 24,
    color: '#14142B',
    fontWeight: '700',
  },
});
