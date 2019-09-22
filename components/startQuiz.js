import React, {Component} from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {white, black, gray, green, red} from '../utils/color'
class StartQuiz extends Component {
    state = {
        questionNumber: 0,
        viewAnswer: false,
        correctAnswers: 0,
        incorrectAnswers: 0
    }
    handleAnswer = () => {
        this.setState((prevState) => ({
            viewAnswer: !prevState.viewAnswer
        }))
    }
    goToNextQuestion = (answer) => {
        if (answer === 'correct') {
            this.setState((prevState) => ({
                correctAnswers: prevState.correctAnswers + 1,
                viewAnswer: false,
                questionNumber: prevState.questionNumber + 1
            }))
        } else {
            this.setState((prevState) => ({
                incorrectAnswers: prevState.incorrectAnswers + 1,
                viewAnswer: false,
                questionNumber: prevState.questionNumber + 1
            }))
        }
    }
    restart = () => {
        this.setState({questionNumber: 0, viewAnswer: false, correctAnswers: 0, incorrectAnswers: 0})
    }
    render() {
        const questions = [...this.props.navigation.state.params]
        if (questions.length) {
            if (questions.length <= this.state.questionNumber) {
                return (
                    <View style={styles.container}>
                        <Text
                            style={{
                            fontSize: 20,
                            textAlign: 'center',
                            fontWeight: 'bold'
                        }}>you scored {this.state.correctAnswers}
                            out of {questions.length}</Text>
                        <TouchableOpacity style={styles.buttonColorView} onPress={this.restart}>
                            <Text style={styles.colorWhite}>Restart Quiz</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonColorView}
                            onPress={() => this.props.navigation.goBack()}>
                            <Text style={styles.colorWhite}>Go Back</Text>
                        </TouchableOpacity>
                    </View>
                )
            } else {
                return (
                    <View style={styles.container}>

                        <View>
                            <View>
                                <Text>{this.state.questionNumber}/{questions.length}</Text>
                            </View>
                            <View
                                style={{
                                alignItems: 'center'
                            }}>
                                {this.state.viewAnswer
                                    ? (
                                        <Text style={styles.largeSize}>{questions[this.state.questionNumber].answer}</Text>
                                    )
                                    : (
                                        <Text style={styles.largeSize}>{questions[this.state.questionNumber].question}</Text>
                                    )
}
                                <TouchableOpacity style={styles.buttonColorView} onPress={this.handleAnswer}>
                                    <Text style={styles.colorWhite}>View {this.state.viewAnswer
                                            ? 'question'
                                            : 'answer'}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {this.state.viewAnswer
                            ? (
                                <View>
                                    <TouchableOpacity
                                        style={styles.buttonColorCorrect}
                                        onPress={() => this.goToNextQuestion('correct')}>
                                        <Text style={styles.colorWhite}>Correct</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.buttonColorIncorrect}
                                        onPress={() => this.goToNextQuestion('incorrect')}>
                                        <Text style={styles.colorWhite}>Incorrect</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                            : null
}

                    </View>
                )
            }

        } else {
            return (
                <View style={styles.center}>
                    <Text style={styles.largeSize}>There is no questions to start the quiz</Text>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        marginTop: 20,
        marginBottom: 20
    },
    buttonColorView: {
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 20,
        paddingTop: 20,
        width: 200,
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 5,
        height: 40
    },
    buttonColorCorrect: {
        backgroundColor: green,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 20,
        paddingTop: 20,
        width: 200,
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 5,
        marginBottom: 15
    },
    buttonColorIncorrect: {
        backgroundColor: red,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 20,
        paddingTop: 20,
        width: 200,
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 5,
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
        fontSize: 15,
        fontWeight: 'bold',
        alignItems: "center",
        marginTop: 20
    },
    center: {
        flex: 1,
        alignItems: "center"
    }

})

export default StartQuiz