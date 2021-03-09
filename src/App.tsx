import { registerRootComponent } from 'expo';
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default class App extends Component<{}> {

  render() {
    return (
      <View style={styles.MainContainer}>

        <TouchableOpacity style={styles.SpotifyStyle} activeOpacity={0.5}>

          <Image
            source={require('../assets/spotify_logo.png')}
            style={styles.ImageIconStyle}
          />

          <View style={styles.SeparatorLine} />

          <Text style={styles.TextStyle}> Login Using Spotify </Text>

        </TouchableOpacity>


        <TouchableOpacity style={styles.AppleMusicStyle} activeOpacity={0.5}>

          <Image
            source={require('../assets/applemusic_logo.png')}
            style={styles.ImageIconStyle}
          />

          <View style={styles.SeparatorLine} />

          <Text style={styles.TextStyle}> Login Using Apple Music </Text>

        </TouchableOpacity>


        <TouchableOpacity style={styles.SoundCloudStyle} activeOpacity={0.5}>

          <Image
            source={require('../assets/soundcloud_logo.png')}
            style={styles.ImageIconStyle}
          />

          <View style={styles.SeparatorLine} />

          <Text style={styles.TextStyle}> Login Using SoundCloud </Text>

        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
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

  }

});


registerRootComponent(App);