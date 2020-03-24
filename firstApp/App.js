import * as React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import LoginScreen from './src/screens/login'

const Stack = createStackNavigator({
  Login: {
    screen: LoginScreen,
  },
})

const AppContainer = createAppContainer(Stack)

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}
