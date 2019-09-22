import React, {Component} from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import DeckList from './components/deckList'
import AddDeck from './components/addDeck'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { setLocalNotification } from './utils/api'


const tabNavigator = createBottomTabNavigator({
  Home: {
    screen: DeckList,
    navigationOptions:{
      title: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-bookmarks" color={tintColor} size={20}/>
      ),
      tabBarOptions: {
        activeTintColor: "#0000ff",
      }
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions:{
      title: 'Add New Deck',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="plus-square" color={tintColor} size={20}/>
      ),
      tabBarOptions: {
        activeTintColor: "#0000ff",
      }
    }
  }
})
const TabNavigatorContainer = createAppContainer(tabNavigator)

class App extends Component{
  componentDidMount(){
    setLocalNotification()
  }
  render(){
    return (
      <View style={styles.container}>
        <TabNavigatorContainer style={styles.container}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: getStatusBarHeight()
  }
})
export default App 
