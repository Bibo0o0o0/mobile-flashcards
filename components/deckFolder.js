import React, {Component} from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {white} from '../utils/color'
import DeckViewDetails from './deckViewDetails'
class DeckFolder extends Component {
    changeView = () => {
        this
            .props
            .navigation
            .navigate('Deck', {
                deck: {
                    ...this.props.deck
                }
            })
    }
    render() {
        // console.log(styles.textOne)
        return (
            <TouchableOpacity style={styles.container} onPress={this.changeView}>
                <DeckViewDetails textStyleOne={styles.textOne} textStyleTwo={styles.textTwo} title={this.props.deck.title} questions={this.props.deck.questions} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#2e3d49',
        width: 300,
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 5,
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
        borderRadius: 5,
        color: '#fff'
    },
    colorWhite: {
        color: white
    },
    center: {
        flex: 1,
        alignItems: "center"
    },
    textOne:{
        textAlign: 'center',
        color: '#000',
        padding: 10,
        fontWeight: 'bold',
        fontSize: 20
    },
    textTwo: {
        textAlign: 'center',
        color: '#ccc',
        padding: 10,
        fontWeight: '400',
        fontSize: 20
    }
})

export default DeckFolder