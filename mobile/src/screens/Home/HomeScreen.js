import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StylesGeneral } from '../../constants/routes'
import firebase from 'firebase'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import styles from './Styles'

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fill: 40,
      Led: false
    }
  }
  componentDidMount() {
    this.storeHighScore();
  }

  storeHighScore = async () => {
    try {
      await firebase.database().ref('/').on('value', (snapshot) => {
        this.setState({ fill: Object.values(snapshot.val())[1] });

      })
    } catch (error) {
      global.dropDownAlertRef.alertWithType('error', 'Error', error.message);
    }
  };

  buttonPressed = async () => {
    try {
      await firebase.database().ref(`/`).once(`value`, snapshot => {
        this.setState({ Led: Object.values(snapshot.val())[0] });
        setTimeout(() => {
          global.dropDownAlertRef.alertWithType('success', 'Success', `Led turned ${this.state.Led ? "off" : "on"}`);
        }, 500);
      });
    } catch (error) {
      console.log(error);
    }

    try {
      await firebase.database().ref(`/`).update({ Led: !this.state.Led });
    } catch (error) {
      console.log(error);

    }
  }

  render() {
    return (
      <View style={[StylesGeneral.Container, styles.container]}>
        <Text style={styles.text}>Potenciometro</Text>
        <AnimatedCircularProgress
          size={230}
          width={25}
          fill={this.state.fill * 0.1024}
          tintColor="#00e0ff"
          rotation={240}
          arcSweepAngle={250}
          backgroundColor="#3d5875">
          {
            (fill) => (
              <Text style={styles.text}>
                {this.state.fill}
              </Text>
            )
          }
        </AnimatedCircularProgress>

        <TouchableOpacity style={styles.button} onPress={() => this.buttonPressed()}>
          <Text style={styles.buttonText}>
            Turn the Led
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
