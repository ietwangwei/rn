/* eslint-disable react-native/no-inline-styles */
import * as React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {Button} from 'antd-mobile-rn'

export default class Login extends React.Component {
  state = {
    userAccount: '123',
    password: '123',
  }
  render() {
    return (
      <View style={styles.loginPage}>
        <Button
          type="primary"
          size={'large'}
          style={{margin: 16}}
          onClick={() => {
            this.toLogin()
          }}>
          登陆
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  loginPage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  formItem: {
    flex: 1,
  },
  formInput: {
    width: 200,
  },
})
