import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Linking, Button } from 'react-native';
import 'react-native-gesture-handler';



class Player extends Component {
    render() {

        return(
            <View style={styles.MainContainer} >
                <Image source={require('../assets/graduation_cover.gif')} style={styles.CoverLogo} />
                <Text style={styles.SongName}> Everything I am </Text>
                <Text style={styles.ArtistName}> Kanye West, DJ Premier </Text>

                {/* <View style={StyleSheet.MiddleContainer}> */}
                <TouchableOpacity onPress={() => { }} style={styles.MiddleContainer} activeOpacity={0.5}>

                    <Image source={require('../assets/design_elements/shuffle_icon.png')} style={styles.ActionIcon} />
                    <Image source={require('../assets/design_elements/love_icon.png')} style={styles.ActionIcon} />
                    <Image source={require('../assets/design_elements/play_icon.png')} style={styles.MiddleActionIcon} />
                    <Image source={require('../assets/design_elements/next_icon.png')} style={styles.ActionIcon} />
                    <Image source={require('../assets/design_elements/repeat_icon.png')} style={styles.ActionIcon} />

                </TouchableOpacity>

                <TouchableOpacity onPress={() => { }} style={styles.BottomContainer} activeOpacity={0.5}> 
                    <Image source={require('../assets/design_elements/slider_icon.png')} style={styles.SliderIcon} />
                </TouchableOpacity>
                {/* </View> */}

            </View>


        );
    }
}

const styles = StyleSheet.create({ 
    MainContainer: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        backgroundColor: '#08112f'
    },
    MiddleContainer: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        marginTop: 410, //moves the action icons closer to the middle, for some reason
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    BottomContainer: {
        flex:1,
        marginBottom: 100,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'flex-end',
        // margin: 20
    },
    CoverLogo: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
        flex: 1,
        position: 'absolute',
        // alignItems: 'center',
        // justifyContent: 'center',
        margin: 30,
        borderRadius: 20,
        marginTop: 120
    },
    SongName: {
        flex: 1,
        color: "#fff",
        position: 'absolute',
        // marginTop: 200,
        // textAlign: 'right',
        // fontSize: 30,
        fontWeight: 'bold',
        fontSize: 30,
        // marginLeft: 780,
        marginTop: 370,

    },
    ArtistName: {
        flex: 1,
        color: "#808080",
        position: 'absolute',
        // marginTop: 200,
        // textAlign: 'right',
        // fontSize: 30,
        // fontWeight: 'bold',
        fontSize: 15,
        // marginLeft: 780,
        marginTop: 410,
    },
    ActionIcon: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 40,
        // position: 'absolute',
        opacity: 0.7,
        // marginTop: 500
        // margin: 100,

    },
    MiddleActionIcon: {
        width: 90,
        height: 90,
        resizeMode: 'contain',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 40,
        opacity: 0.8,
    },
    SliderIcon: {
        width: 510,
        height: 70,
        resizeMode: 'contain',
        // flex: 1,
        // alignItems:'center',
        // justifyContent: 'center',
        // margin: 40,
    }
})

export default Player;