import React, {Component} from 'react'
import {StyleSheet,Text,View,TouchableOpacity,TextInput,Alert, KeyboardAvoidingView} from 'react-native'
import {addCardToDeck} from '../utils/api'
import {nowTimeToString} from '../utils/helpers'
import {white, black, gray} from '../utils/color'
class AddCard extends Component {
    state = {
        question: '',
        answer: ''
    }
    onChangeText = (text, inputType) => {
        if (inputType === 'question') {
            this.setState({question: text})
        } else {
            this.setState({answer: text})
        }
    }
    addNewCard = () => {
        let deckDetails = {
            ...this.props.navigation.state.params
        }
        let key = deckDetails.key
        let questionAnswer = {
            question: this.state.question,
            answer: this.state.answer
        }
        if (this.state.answer === "" || this.state.question === "") {
            Alert.alert('Warning', 'You have to enter question and answer', [
                {
                    text: 'OK'
                }
            ], {cancelable: false})
        } else {
            addCardToDeck(key, questionAnswer)
            this.setState({question: '', answer: ''})
            this
                .props
                .navigation
                .goBack()
        }
    }
    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.center}>
                    <TextInput
                        style={styles.buttonColorAdd}
                        placeholder="Question"
                        onChangeText={(text) => this.onChangeText(text, 'question')}
                        value={this.state.question}/>
                    <TextInput
                        style={styles.buttonColorAdd}
                        placeholder="Answer"
                        onChangeText={(text) => this.onChangeText(text, 'answer')}
                        value={this.state.answer}/>
                </View>
                <View>
                    <TouchableOpacity style={styles.buttonColorSubmit} onPress={this.addNewCard}>
                        <Text style={styles.colorWhite}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
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
    buttonColorSubmit: {
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
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#000',
        marginBottom: 15,
        width: 350,
        height: 40,
        paddingLeft: 15,
        paddingRight: 15
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
        alignItems: "center"
    },
    center: {
        flex: 1,
        alignItems: "center"
    }

})
export default AddCard