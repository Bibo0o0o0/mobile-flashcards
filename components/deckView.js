import React, {Component} from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {getDeck} from '../utils/api'
import {white, black , gray} from '../utils/color'
import DeckViewDetails from './deckViewDetails'
class DeckView extends Component {
    state = {
        deck: {
            questions: []
        }
    }
    addCard = () => {
        this.props.navigation.navigate('AddCard', {
                ...this.props.navigation.state.params.deck
            })
    }
    startQuiz = () => {
        this.props.navigation.navigate('StartQuiz', [...this.state.deck.questions])
    }
    componentDidMount() {
        this.focusListener = this.props.navigation.addListener('didFocus', () => {
            this.getDeck()
        })
    }
    getDeck = async() => {
        let deck = await getDeck(this.props.navigation.state.params.deck.key)
        this.setState({deck: deck})
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.center}>
                    <DeckViewDetails textStyleOne={styles.largeSize} textStyleTwo={styles.colorGray} title={this.state.deck.title} questions={this.state.deck.questions} />
                </View>
                <View>
                    <TouchableOpacity style={styles.buttonColorAdd} onPress={this.addCard}>
                        <Text style={styles.colorBlack}>Add Card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonColorStart} onPress={this.startQuiz}>
                        <Text style={styles.colorWhite}>Start Quiz</Text>
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
    buttonColorStart: {
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
    buttonColorAdd: {
        backgroundColor: "#fff",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 20,
        paddingTop: 20,
        width: 200,
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#000',
        marginBottom: 15
    },
    colorWhite: {
        color: white
    },
    colorBlack: {
        color: black
    },
    colorGray: {
        color: gray
    },
    largeSize: {
        fontSize: 25,
        fontWeight: 'bold',
        alignItems: "center",
    },
    center: {
        flex: 1,
        alignItems: "center"
    }

})
export default DeckView