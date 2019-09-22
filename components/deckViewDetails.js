import React from 'react'
import {Text, View} from 'react-native'
const DeckViewDetails = ({ title, questions, textStyleOne, textStyleTwo }) => {
    return (
        <View style={{flex: 1}}>
          <Text style={textStyleOne}>{title}</Text>
          <Text style={textStyleTwo}>
            {questions.length} {questions.length === 1 ? 'card' : 'cards'}
          </Text>
        </View>
        )
}

export default DeckViewDetails