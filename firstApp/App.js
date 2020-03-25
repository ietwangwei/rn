import * as React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import LoginScreen from './src/screens/login'
import HomeScreen from './src/screens/home'

const Stack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
})

const AppContainer = createAppContainer(Stack)

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}
