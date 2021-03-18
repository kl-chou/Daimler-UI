import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Accounts from './Accounts';

const Stack = createStackNavigator();
const App = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Login" component={Accounts} />
        <Stack.Screen name="Song" component={Home} options={{ title: 'Mercedes Song Player' }} />
      </Stack.Navigator>
        {/* Rest of your app code */}
      </NavigationContainer>
    );
  };


function Home ({navigation}) {
// class Home extends Component {
    // render() {
        return (
            <View style={styles.MainContainer}>
                <View style={styles.TopContainer}> 

                    <TouchableOpacity onPress={() => { }} style={styles.TouchableStyle} activeOpacity={0.5}>
                        <Image
                            source={require('../assets/player.png')}
                            style={styles.PlayerLogo}
                        />
                        {/* <figcaption class="caption">Text below the image</figcaption> */}
                        <Text style={styles.PlayerStyle}> Player </Text>

                    {/* </TouchableOpacity> */}


                    {/* <TouchableOpacity onPress={() => { }} style={styles.TouchableStyle} activeOpacity={0.5}> */}

                        <Image
                            source={require('../assets/library.png')}
                            style={styles.PlayerLogo}
                        />
                        <Text style={styles.LibraryStyle}> Library </Text>


                        <Image
                            source={require('../assets/search.png')}
                            style={styles.PlayerLogo}
                        />  
                        <Text style={styles.SearchStyle}> Search </Text>
                        <Text style={styles.RecentStyle}> Recently Played: </Text>


                    {/* <TouchableOpacity style={styles.Player} activeOpacity={0.5}> */}
                        {/* <Image
                        source={require('../assets/spotify_logo.png')}
                        style={styles.ImageIconStyle}
                        /> */}
                        {/* <View style={styles.SeparatorLine} /> */}
                        {/* <Text style={styles.TextStyle}> Login Using Facebook </Text> */}
                    {/* </TouchableOpacity> */}

                        {/* <Button
                        title="Enter"
                        onPress={() => navigation.navigate('Login')}
                        /> */}

                    </TouchableOpacity>



                </View>

                <View style={styles.BottomContainer}> 
                <TouchableOpacity onPress={() => { }} style={styles.TouchableStyle} activeOpacity={0.5}>
                    <Image
                        source={require('../assets/song_1.png')}
                        style={styles.SongLogo}
                    />  
                    
                    <Image
                        source={require('../assets/song_2.png')}
                        style={styles.SongLogo}
                    />
                    
                    <Image
                        source={require('../assets/song_3.png')}
                        style={styles.SongLogo}
                    />
                    <Image
                        source={require('../assets/song_4.png')}
                        style={styles.SongLogo}
                    />    
                    <Image
                        source={require('../assets/song_5.png')}
                        style={styles.SongLogo}
                    />                             
                </TouchableOpacity>






                </View>


                {/* bottom container*/}
            </View>
        ); 
    // };
}

const styles = StyleSheet.create({
    Player: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#08112f'
    },
    PlayerLogo: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // left: 60,
        // marginLeft: 150,
        // top: 40,
        // margin: 53,
        // marginTop: 5
        margin: 100
    },
    SongLogo: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // left: 60,
        // marginLeft: 150,
        // top: 40,
        // margin: 53,
        // marginTop: 5
        margin: 40
    },
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#08112f'
    },

    TopContainer: {
        flex: 1,
        flexDirection: 'column',
        // alignItems: 'space-around',
        // alignItems: 'start',
        // left: 10,
        justifyContent: 'center',
        // alignItems: 'center',
        margin: 50
    },

    BottomContainer: {
        flex: 1, 
        flexDirection: 'row',
        margin: 50,
        alignItems: 'flex-end'

    },

    TouchableStyle: {
        flexDirection: 'row'
    },

    ImageIconStyle: {
        flex: 1,
        height: '100%',
        width: '100%'
    },

    PlayerStyle: {
        flex: 1,
        color: "#fff",
        position: 'absolute',
        // marginTop: 200,
        // textAlign: 'right',
        // fontSize: 30,
        fontWeight: 'bold',
        fontSize: 40,
        marginLeft: 90,
        marginTop: 300,
    },
    LibraryStyle: {
        flex: 1,
        color: "#fff",
        // justifyContent: 'center',
        // position: 'absolute',
        // marginTop: 200,
        // textAlign: 'right',
        // fontSize: 30,
        // marginLeft: 200,
        position: 'absolute',
        fontWeight: 'bold',
        fontSize: 40,
        marginLeft: 450,
        marginTop: 300,
    },
    SearchStyle: {
        flex: 1,
        color: "#fff",
        position: 'absolute',
        // marginTop: 200,
        // textAlign: 'right',
        // fontSize: 30,
        fontWeight: 'bold',
        fontSize: 40,
        marginLeft: 780,
        marginTop: 300,
    },
    RecentStyle: {
        flex: 1,
        color: "#fff",
        position: 'absolute',
        // marginTop: 200,
        // textAlign: 'right',
        // fontSize: 30,
        fontWeight: 'bold',
        fontSize: 30,
        // marginLeft: 20,
        marginTop: 430,
    },
    

})

export default App;
