import React, {Component} from 'react'
import {View, ScrollView} from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import DeckFolder from './deckFolder'
import DeckView from './deckView'
import AddCard from './addCard'
import StartQuiz from './startQuiz'
import {getDecks, clear} from '../utils/api'


class DeckList extends Component{
  state={
    decks: []
  }
  componentDidMount(){
    this.focusListener = this.props.navigation.addListener('didFocus', () => {
      this.getAllDecks()
    })
    // clear()
  }
  getAllDecks = async () => {
    let decks = await getDecks()
    this.setState({decks: decks})
  }
    render(){
        return(
            <ScrollView>
              {this.state.decks.map(deck => {
                return <DeckFolder title={deck.title} key={`${deck.key}`} deck={deck} navigation={this.props.navigation} />
              })}
            </ScrollView>
        )
    }
}

const rootStack = createStackNavigator({
  Home: {
    screen: DeckList,
    headerBackTitle: "Home",
    navigationOptions: {
      header: null,
    }
  },
  Deck:{
    screen: DeckView,
    navigationOptions: ( {navigation} ) => ({
      headerTitle: `${navigation.state.params.deck.title}`,
      headerBackTitle: `${navigation.state.params.deck}`,
      headerTitleStyle: {
        textAlign: "center",
        flex: 1
      }
    })
  },
  AddCard:{
    screen: AddCard,
    navigationOptions: ( {navigation} ) => ({
      headerTitle: "Add Card",
      headerTitleStyle: {
        textAlign: "center",
        flex: 1
      }
    })
  },
  StartQuiz:{
    screen: StartQuiz,
    navigationOptions: ( {navigation} ) => ({
      headerTitle: "Quiz",
      headerTitleStyle: {
        textAlign: "center",
        flex: 1
      }
    })
  }
})
const RootStackComponent = createAppContainer(rootStack)

export default RootStackComponent