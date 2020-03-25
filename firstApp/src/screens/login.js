/* eslint-disable react-native/no-inline-styles */
import * as React from 'react'
import {View, StyleSheet, TextInput, Text, PixelRatio} from 'react-native'
import {Button} from 'antd-mobile-rn'

export default class Login extends React.Component {
  state = {
    userAccount: '',
    password: '',
  }
  toLogin() {
    this.props.navigation.push('Home')
  }
  render() {
    return (
      <View style={styles.loginPage}>
        <View style={styles.container}>
          <Text style={styles.title}>登陆</Text>
          <View style={[styles.view, styles.lineTopBottom]}>
            <Text style={styles.text}>手机号</Text>
            <TextInput
              style={styles.textInputStyle}
              placeholder="请输入您的手机号码"
              clearButtonMode="while-editing"
              secureTextEntry={false}
              onChangeText={text => {
                this.setState({
                  password: text,
                })
              }}
              value={this.state.password}
            />
          </View>
          <View style={[styles.view, styles.lineTopBottom]}>
            <Text style={styles.text}>密码</Text>
            <TextInput
              style={styles.textInputStyle}
              placeholder="请输入密码"
              clearButtonMode="while-editing"
              secureTextEntry={true}
              onChangeText={text => {
                this.setState({
                  userAccount: text,
                })
              }}
              value={this.state.userAccount}
            />
          </View>
        </View>
        <Button
          type="primary"
          size={'large'}
          style={styles.loginButton}
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    height: '100%',
    paddingLeft: 16,
    paddingTop: 16,
    paddingRight: 16,
  },
  container: {
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
  },
  view: {
    flexDirection: 'row',
    height: 44,
    width: 300,
  },
  textInputStyle: {
    flex: 5,
    marginRight: 10,
    marginLeft: 20,
    fontSize: 16,
    marginTop: 4,
    color: '#333',
  },
  lineTopBottom: {
    borderBottomWidth: 3 / PixelRatio.get(),
    borderColor: 'rgb(208,208,208)',
  },
  text: {
    lineHeight: 44,
    fontSize: 14,
    width: 60,
  },
  loginButton: {
    marginTop: 12,
    width: 300,
  }
})
