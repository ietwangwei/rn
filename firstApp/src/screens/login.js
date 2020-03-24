/* eslint-disable react-native/no-inline-styles */
import * as React from 'react'
import {View, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Input} from 'react-native-elements'

function LoginScreen({navigation}) {
  return <View style={styles.loginPage}>This is Login</View>
}

const styles = StyleSheet.create({
  loginPage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
})

export default LoginScreen
