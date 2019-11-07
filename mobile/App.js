import React, { Component } from "react";
import Routes from "./src/routes.js";
import { View, SafeAreaView } from "react-native";
import { StylesGeneral } from "./src/constants/routes";
import "./src/config/StatusBarConfig";
import "./src/config/firebaseConfig"
import DropdownAlert from 'react-native-dropdownalert';

export default class app extends Component {
  render() {
    return (
      <View style={StylesGeneral.Container}>
        <SafeAreaView style={{ marginTop: 30 }} />
        <DropdownAlert ref={ref => global.dropDownAlertRef = ref} />
        <Routes style={StylesGeneral.Container} />
      </View>
    );
  }
}