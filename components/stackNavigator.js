import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import DeckView from './deckView'
import AddCard from './addCard'
import DeckList from './deckList'
import StartQuiz from './startQuiz'
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