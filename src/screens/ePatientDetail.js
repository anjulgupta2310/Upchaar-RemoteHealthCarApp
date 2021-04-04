import React, {Component} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Table, TableWrapper, Row} from 'react-native-table-component';
import firebase from 'firebase/app';
import {pdate} from './ePatient';
import {license_id} from './Login';

var nameTemp = [];
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mechanicsList: [],
      tableHead: ['Name', 'Time','Symptom','Prescription'],
      widthArr: [80,80,80,250],
      today: pdate,
    };
  }

  componentDidMount() {
    var query = firebase
      .database()
      .ref(`Appointment/OnlineAppointment/${license_id}`)
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
              mechanic._name.time +
              ' ' +
              mechanic._name.Symptom +
              ' ' +
              mechanic._name.Prescription,
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
    
    // console.log(typeof(state.today));
    for (let j = 0; j < nameTemp.length; j++) {
      temp.push(`${nameTemp[j]._name.date}`);
    }
    
    // for(let j = 0; j < nameTemp.length; j++) {
    //   var dd=temp[j].substring(0,2);
    //   console.log(parseInt(dd));  
    // }
    // var s = state.today;
    // console.log(typeof(parseInt(s.substring(0,2))));

    for (let i = 0; i < nameTemp.length; i += 1) 
    {
        var dataRow = [];
        if (parseInt(temp[i].substring(0, 2)) === parseInt(state.today.substring(0,2)) && parseInt(temp[i].substring(3, 5)) === parseInt(state.today.substring(3,5)) && parseInt(temp[i].substring(6, 10)) === parseInt(state.today.substring(6,10))) 
        {
            dataRow.push(`${nameTemp[i]._name.name}`);
            dataRow.push(`${nameTemp[i]._name.time}`);
            dataRow.push(`${nameTemp[i]._name.Symptom}`);
            dataRow.push(`${nameTemp[i]._name.Prescription}`);
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
