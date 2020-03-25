/* eslint-disable react-native/no-inline-styles */
import * as React from 'react'
import {Text, View} from 'react-native'
import {Icon, SearchBar, TabBar} from '@ant-design/react-native'

export default class Home extends React.Component {
  state = {
    selectedTab: 'blueTab',
  }
  onChangeTab(tab) {
    this.setState({
      selectedTab: tab,
    })
  }
  renderContent(pageText) {
    return (
      <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
        <SearchBar placeholder="Search" showCancelButton />
        <Text style={{margin: 50}}>{pageText}</Text>
      </View>
    )
  }
  render() {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="#f5f5f5">
        <TabBar.Item
          title="菜单"
          icon={<Icon name="home" />}
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => this.onChangeTab('blueTab')}>
          {this.renderContent('菜单')}
        </TabBar.Item>
        <TabBar.Item
          title="我的"
          icon={<Icon name="user" />}
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => this.onChangeTab('redTab')}>
          {this.renderContent('郑雪茹是只狗')}
        </TabBar.Item>
      </TabBar>
    )
  }
}
