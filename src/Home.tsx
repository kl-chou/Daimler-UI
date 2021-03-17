import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

class Home extends Component {
    render() {
        return (
            <View style={styles.MainContainer}>
                <View style={styles.TopContainer}>
                    <TouchableOpacity onPress={() => { }} style={styles.TouchableStyle} activeOpacity={0.5}>

                        <Image
                            source={require('../assets/spotify_logo.png')}
                            style={styles.ImageIconStyle}
                        />

                        <Text style={styles.TextStyle}> Player </Text>

                    </TouchableOpacity>
                </View>
            </View>
        ); 
    };
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#08112f'
    },

    TopContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 50
    },

    TouchableStyle: {
        flexDirection: 'column'
    },

    ImageIconStyle: {
        flex: 4,
        height: '100%',
        width: '100%'
    },

    TextStyle: {
        flex: 1,
        color: "#fff",
        marginBottom: 4,
        marginRight: 20,
    }
})

export default Home;
