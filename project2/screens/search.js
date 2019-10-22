import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Constants from 'expo-constants'

export default class search extends React.Component {
    static navigationOptions = {
        title: "Search",
        headerTitleStyle: { color: "#AAAAAF", }
    };

    render() {
        return (
            <View style={styles.appContainer}>
                <Button
                    title="Movie"
                    onPress={() => this.props.navigation.navigate("Movie")}
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
