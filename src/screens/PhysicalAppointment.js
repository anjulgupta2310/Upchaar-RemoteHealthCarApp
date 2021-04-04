import React, {Component} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Table, TableWrapper, Row} from 'react-native-table-component';
import firebase from 'firebase/app';
import {license_id} from './Login'

var nameTemp = [];
var len=0;
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mechanicsList: [],
      tableHead: ['Name', 'Time', 'Date', 'Clinic'],
      widthArr: [100, 100, 100, 100],
      today: new Date(),
    };
  }

  componentDidMount() {
    var query = firebase
      .database()
      .ref(`Appointment/PhysicalAppointment/${license_id}`)
      .orderByKey();
    query.once('value').then(
      function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
          // key will be the auth ID for each user
          var key = childSnapshot.key;
          var mechanicName = snapshot.child(key).val();
          nameTemp.push({_name: mechanicName, _key: key});
        });
        this.setState({mechanics: nameTemp});
        mechanicsList = nameTemp;
        // this.setState({mechanicsList: nameTemp});  This does not execute it seems - main problem I believe
        //this.setState({ mechanicsList: nameTemp }); - This return a warning 'this.setState is not a function'
        //  console.log(mechanicsList); //Prints data as expected
        // _controllNewToDo = (nameTemp) => {
        //   this.setState({
        //     mechanicsList: nameTemp,
        //   });
        // };
        nameTemp.forEach((mechanic) => {
          console.log(
            mechanic._name.name +
              ' ' +
              mechanic._name.date +
              ' ' +
              mechanic._name.time +
              ' ' +
              mechanic._name.clinic,
          );
        });
      }.bind(this),
    );
  }

  render() {
    var state = this.state;
    var data = [];
    var temp = [];
    // var date= state.today.getDate() + '-' + (state.today.getMonth() + 1) + '-' + state.today.getFullYear();
    // console.log(state._controlNewTodo[0]);
    // for(let j=0;j<5;j++)
    // {
    //   if(state.mechanicsList[j]!== "undefined")
    //   {
    //       console.log(state.mechanicsList[j]._name.date);
    //   }
    // }
    for (let j = 0; j < nameTemp.length; j++) {
      temp.push(`${nameTemp[j]._name.date}`);
    }
    len = nameTemp.length;
    // for(let j = 0; j < nameTemp.length; j++) {
    //   var dd=temp[j].substring(0,2);
    //   console.log(typeof(parseInt(dd)));  21-11-2000
    // }
    for (let i = 0; i < nameTemp.length; i += 1) {
      var dataRow = [];
      if (
        parseInt(temp[i].substring(0, 2)) >= state.today.getDate() &&
        parseInt(temp[i].substring(3, 5)) >= state.today.getMonth() + 1 &&
        parseInt(temp[i].substring(6, 10)) >= state.today.getFullYear()
      ) {
        dataRow.push(`${nameTemp[i]._name.name}`);
        dataRow.push(`${nameTemp[i]._name.time}`);
        dataRow.push(`${nameTemp[i]._name.date}`);
        dataRow.push(`${nameTemp[i]._name.clinic}`);
        data.push(dataRow);
      }
    }
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderColor: '#C1C0B9'}}>
              <Row
                data={state.tableHead}
                widthArr={state.widthArr}
                style={styles.head}
                textStyle={styles.text}
              />
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderColor: '#C1C0B9'}}>
                {data.map((dataRow, index) => (
                  <Row
                    key={index}
                    data={dataRow}
                    widthArr={state.widthArr}
                    style={[
                      styles.row,
                      index % 2 && {backgroundColor: '#ffffff'},
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
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#ffffff',
  },
  head: {
    height: 50,
    backgroundColor: '#6F7BD9',
  },
  text: {
    textAlign: 'center',
    fontWeight: '200',
  },
  dataWrapper: {
    marginTop: -1,
  },
  row: {
    height: 40,
    backgroundColor: '#F7F8FA',
  },
});
export {len};