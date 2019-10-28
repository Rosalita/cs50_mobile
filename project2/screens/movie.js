import React from "react";
import { Button, Text, StyleSheet, View } from "react-native";
import Constants from 'expo-constants'

export default class movie extends React.Component {
    static navigationOptions = {
        title: "Movie",
        headerTitleStyle: { color: "#AAAAAF", }
    };

    state = {
        movieID: "",
    };

    componentDidMount() {
        this.setState({movieID: this.props.navigation.getParam('MovieID', null)})
    }


    render() {
        return (
            <View style={styles.appContainer}>
                <Text>Movie selected was {this.state.movieID}</Text>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: "#AAAAAF",
        paddingTop: Constants.statusBarHeight,
    },
});
