import React, {Component} from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { setLocalNotification } from './utils/api'
import TabNavigatorContainer from './components/tabNavigator'


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
