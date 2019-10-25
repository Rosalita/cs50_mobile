import React from "react";
import { Button, StyleSheet, View } from "react-native";
import Constants from 'expo-constants'

export default class movie extends React.Component {
    static navigationOptions = {
        title: "Movie",
        headerTitleStyle: { color: "#AAAAAF", }
    };

    render() {
        return (
            <View style={styles.appContainer}>
                <Button
                    title="Search"
                    onPress={() => this.props.navigation.navigate("Search")}
                />
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
