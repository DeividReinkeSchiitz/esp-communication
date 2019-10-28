import { StyleSheet } from 'react-native'
import { Fonts, Color } from '../../constants/routes'
const styles = StyleSheet.create({

  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40
  },
  text: {
    fontSize: Fonts.big,
    color: Color.cyan,
    marginBottom: 40,
  },
  button: {
    borderColor: Color.cyan,
    borderWidth: 3,
    marginTop: 30,
    borderRadius: 10,
    padding: 12,
    width: "80 %",
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: Color.cyan,
    fontSize: Fonts.medio,
    alignSelf: `center`
  }
});

export default styles;
