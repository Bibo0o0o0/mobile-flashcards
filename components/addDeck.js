import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native'
import {saveDeckTitle, getDeck} from '../utils/api'
import {nowTimeToString} from '../utils/helpers'
import {white} from '../utils/color'

class AddDeck extends Component {
    state = {
        textValue: ''
    }
    onChangeText = (text) => {
        this.setState({textValue: text})
    }
    createDeck = async() => {
        let key = nowTimeToString()
        let title = this.state.textValue
        if (title === "") {
            Alert.alert('Warning', 'You have to enter name of the deck', [
                {
                    text: 'OK'
                }
            ], {cancelable: false})
        } else {
            await saveDeckTitle({key, title})
            this.setState({textValue: ''})
            let deck = await getDeck(key)
            this
                .props
                .navigation
                .navigate('Deck', {
                    deck: {
                        ...deck
                    }
                })
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.center}>
                    <Text>What is the title of your new deck?</Text>
                    <TextInput
                        style={{
                        width: 350,
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1
                    }}
                        onChangeText={this.onChangeText}
                        value={this.state.textValue}/>
                </View>
                <View>
                    <TouchableOpacity style={styles.buttonColor} onPress={this.createDeck}>
                        <Text style={styles.colorWhite}>Create Deck</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        marginTop: 20,
        marginBottom: 20
    },
    buttonColor: {
        backgroundColor: "#000",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 20,
        paddingTop: 20,
        width: 200,
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 5
    },
    colorWhite: {
        color: white
    },
    center: {
        flex: 1,
        alignItems: "center"
    }

})
export default AddDeck