import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

export default class App extends React.Component {
  onTap() {
    this.props.navigation.navigate('Next')
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.onTap.bind(this)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>mooooooooooove!!!</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    backgroundColor: '#2255dd',
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000000'
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
  },
})
