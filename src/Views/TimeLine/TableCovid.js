import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Table, TableWrapper, Row} from 'react-native-table-component';
const TableCovid = props => {
  const dataCovid = props?.dataCovid;
  console.log('data props', dataCovid);

  const [data, setData] = useState({
    tableHead: [
      'STT',
      'Khu vực',
      'Tổng ca bệnh',
      'Số ca tử vong',
      'Số ca đang điều trị',
      'Số ca hồi phục',
      'Ca bệnh mới',
    ],
    widthArr: [40, 150, 100, 100, 140, 120, 120],
  });

  const dataTbleApi = dataCovid?.locations;

  console.log('arr data', dataTbleApi);

  const tableData = [];
  for (let i = 0; i < 63; i += 1) {
    const rowData = [];
    rowData.push(`${i + 1}`);
    rowData.push(`${dataTbleApi[i]?.name}`);
    rowData.push(`${dataTbleApi[i]?.cases}`);
    rowData.push(`${dataTbleApi[i]?.death}`);
    rowData.push(`${dataTbleApi[i]?.treating}`);
    rowData.push(`${dataTbleApi[i]?.recovered}`);
    rowData.push(`${dataTbleApi[i]?.casesToday}`);
    tableData.push(rowData);
  }

  console.log('tableData: ', tableData);

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View>
          <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
            <Row
              data={data.tableHead}
              widthArr={data.widthArr}
              style={styles.header}
              textStyle={styles.text}
            />
          </Table>
          <ScrollView style={styles.dataWrapper}>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              {tableData.map((rowData, index) => (
                <Row
                  key={index}
                  data={rowData}
                  widthArr={data.widthArr}
                  style={[
                    styles.row,
                    index % 2 && {backgroundColor: '#F7F6E7'},
                  ]}
                  textStyle={styles.text}
                />
              ))}
            </Table>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default TableCovid;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  header: {height: 50, backgroundColor: '#537791'},
  text: {textAlign: 'center', fontWeight: '700'},
  dataWrapper: {marginTop: -1},
  row: {height: 40, backgroundColor: '#E7E6E1'},
});
