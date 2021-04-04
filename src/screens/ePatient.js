import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Button, Alert} from 'react-native';
import {db} from '../config';

var pdate = 0;
export default class ePatient extends Component {
  state = {
    date: '',
  };

  // pdate=this.state.date;
  checkitem() {
    pdate=this.state.date;
    this.props.navigation.navigate('ePatientDetail')
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.head}>ePatient</Text>

        <View style="styles.content">
          <Text style={styles.line}>Search By Date.</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            placeholder="21-11-2000"
            onChangeText={(date) => this.setState({date})}
          />

          <Button
            style={styles.buttonline}
            title="SUBMIT"
            onPress={() => this.checkitem()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  head: {
    backgroundColor: '#6F7BD9',
    padding: 20,
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 80,
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    padding: 50,
  },

  buttonline: {
    padding: 20,
    color: 'coral',
  },

  line: {
    fontFamily: 'verdana',
    fontSize: 20,
    marginBottom: 10,
    paddingLeft: 20,
  },
  input: {
    height: 50,
    borderColor: 'coral',
    borderWidth: 1,
    marginBottom: 30,
  },
});
export {pdate};
