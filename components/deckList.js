import React, {Component} from 'react'
import {View, ScrollView} from 'react-native'
import DeckFolder from './deckFolder'
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

export default DeckList