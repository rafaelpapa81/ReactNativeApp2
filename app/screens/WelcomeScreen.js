import React from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground
            style={styles.background} 
            source={require('../assets/background.jpg' )}
        >   
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
                <Text>Sell What You Don't Need</Text>
            </View>
            
            <Button 
                title='Go to Product'
                onPress={() =>
                    navigation.navigate('ViewImage')
                }
            />
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent: "flex-end", // align main axis
        alignItems: "center", // align secondary axis
    },
    loginButton:{
        width: "100%",
        height: 70,
        backgroundColor: '#fc5c65',
    },
    logo:{
        width: 100,
        height: 100,
    },
    logoContainer:{
        position: 'absolute',
        top: 70,
        alignItems: "center", // the logo is not in center postion, because it was reset
    },
    registerButton:{
        width: "100%",
        height: 70,
        backgroundColor: '#4ecdc4',
    },
})

export default WelcomeScreen;