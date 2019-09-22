import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import RootStackComponent from './stackNavigator'
import AddDeck from './addDeck'
const tabNavigator = createBottomTabNavigator({
    Home: {
      screen: RootStackComponent,
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

  export default TabNavigatorContainer