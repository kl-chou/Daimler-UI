import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Linking, Button } from 'react-native';
import 'react-native-gesture-handler';

// class Accounts extends Component {
function handleClick (AccountLink, navigation) {
        if (AccountLink == 'Spotify') {
            navigation.push('Song')
        }
        if (AccountLink == 'Apple') Linking.openURL('https://music.apple.com/login')
        if (AccountLink == 'SoundCloud') Linking.openURL('https://soundcloud.com/djlogin')
    };

function Accounts ({navigation}) {
    // render() {
        return (
            <View style={styles.MainContainer}>
                <View style={styles.MercedesContainer}>
                    <Image
                        source={require('../assets/mercedes_logo.png')}
                        style={styles.MercedesLogo}
                    />

                    <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 72 }}> Mercedes-Benz </Text>
                </View>

                <View style={styles.ButtonContainer}>
                    <TouchableOpacity onPress={() => { handleClick('Spotify', navigation) }} style={styles.SpotifyStyle} activeOpacity={0.5}>

                        <Image
                            source={require('../assets/spotify_logo.png')}
                            style={styles.ImageIconStyle}
                        />

                        <View style={styles.SeparatorLine} />


                        <Text style={styles.TextStyle}> Login Using Spotify </Text>

                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => { this.handleClick('Apple') }} style={styles.AppleMusicStyle} activeOpacity={0.5}>

                        <Image
                            source={require('../assets/applemusic_logo.png')}
                            style={styles.ImageIconStyle}
                        />

                        <View style={styles.SeparatorLine} />

                        <Text style={styles.TextStyle}> Login Using Apple Music </Text>

                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => { this.handleClick('SoundCloud') }} style={styles.SoundCloudStyle} activeOpacity={0.5}>

                        <Image
                            source={require('../assets/soundcloud_logo.png')}
                            style={styles.ImageIconStyle}
                        />

                        <View style={styles.SeparatorLine} />

                        <Text style={styles.TextStyle}> Login Using SoundCloud </Text>

                    </TouchableOpacity>

                </View>
            </View>
        );
    // }
}

const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#08112f'
    },

    AppleMusicStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#69a6f9',
        borderWidth: .5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,

    },

    SpotifyStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1DB954',
        borderWidth: .5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,

    },

    SoundCloudStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ff7700',
        borderWidth: .5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,

    },

    ImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    },

    TextStyle: {
        color: "#fff",
        marginBottom: 4,
        marginRight: 20,

    },

    SeparatorLine: {
        backgroundColor: '#fff',
        width: 1,
        height: 40

    },

    MercedesLogo: {
        width: 250,
        height: 250,
        resizeMode: 'contain'
    },

    MercedesContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    ButtonContainer: {
        flex: 1,
        flexDirection: 'row'
    }
});

export default Accounts;
