import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './src/screens/Login';
// we will use these two screens later in our AppNavigator
import Signup from './src/screens/Signup';
// import List from './src/screens/List';
import Portal from './src/screens/Portal';
import Appointment from './src/screens/Appointment';
import UpdateSchedule from './src/screens/Updateschedule';
import UpdateProfile from './src/screens/UpdateProfile';
import UpdatePassword from './src/screens/UpdatePassword';
import UpdateCharges from './src/screens/UpdateCharges';
import OnlineCharges from './src/screens/OnlineCharges';
import PhysicalCharges from './src/screens/PhysicalCharges';
import ProfileAndCharges from './src/screens/ProfileAndCharges';
import OnlineAppointment from './src/screens/OnlineAppointment'
import ePatient from './src/screens/ePatient';
import ePatientDetail from './src/screens/ePatientDetail';
import AddClinic from './src/screens/AddClinic';
import DeleteClinic from './src/screens/DeleteClinic';
import PhysicalAppointment from './src/screens/PhysicalAppointment';
import PhysicalSchedule from './src/screens/PhysicalSchedule';
import OnlineSchedule from './src/screens/OnlineSchedule';
import Emergency from './src/screens/Emergency';
import Home from './src/screens/Home';
// import Data from './src/screens/Data';
import Signup1 from './src/screens/Signup1';
import ForgetPassword from './src/screens/ForgetPassword';

const AppNavigator = createStackNavigator(
  {
    Login,
    Signup,
    Portal,
    UpdateSchedule,
    Appointment,
    OnlineAppointment,
    UpdateProfile,
    UpdatePassword,
    UpdateCharges,
    OnlineCharges,
    PhysicalCharges,
    ProfileAndCharges,
    ePatient,
    ePatientDetail,
    AddClinic,
    DeleteClinic,
    PhysicalAppointment,
    OnlineSchedule,
    Emergency,
    Home,
    // Data,
    Signup1,
    ForgetPassword,
    PhysicalSchedule,
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}