/* eslint-disable react-native/no-inline-styles */
import * as React from 'react'
import {View, Text} from 'react-native'
import {Button} from 'react-native-elements'

function LoginScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>login</Text>
      <Button title="Go back" onPress={() => navigation.navigate('Home')} />
    </View>
  )
}

export default LoginScreen
