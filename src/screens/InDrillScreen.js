import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import React from 'react';
import Button from '../components/Button.js';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

export const InDrillScreen = () => {
    return (
        <>
            <View style={styles.drillInfo}>
                <View style={styles.row}>
                    <Text style={styles.drillTitle}>Riding Pine</Text>
                </View>
                <View style={styles.drillSubtitle}>
                    <Text>5 hole</Text>
                    <Text>7 seconds</Text>
                </View>
            </View>
            <View style={styles.targetTextContainer}>
                <Text style={styles.netTargetText}>TOP LEFT</Text>
            </View>
            <View style={styles.row}>
                <Image
                    style={styles.image}
                    source={require('../../assets/hockeynet/targets/top-left.png')}
                />
            </View>
            <View style={styles.row}>
                <Text style={styles.shotsLeft}>Shots left:</Text>
                <Text style={styles.shotsLeft}>5</Text>
            </View>
            <View style={styles.row}>
                <Button
                    style={{
                        width: WIDTH * 0.8,
                    }}
                    mode='contained'
                    onPress={() => console.log('Pressed')}
                    labelStyle={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        lineHeight: 30,
                    }}
                >
                    CANCEL
                </Button>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    row: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        // flexWrap: 'wrap',
    },
    column: {
        flexDirection: 'column',
    },
    drillInfo: {
        flexDirection: 'column',
        // borderColor: 'red',
        // borderWidth: 3,
        marginTop: HEIGHT * 0.065,
        marginBottom: HEIGHT * 0.025,
    },
    drillTitle: {
        fontSize: 30,
        fontWeight: '600',
    },
    drillSubtitle: {
        fontSize: 18,
        fontWeight: '400',
        alignContent: 'space-between',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: WIDTH * 0.25,
    },
    targetTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'green',
        borderWidth: 5,
        height: HEIGHT * 0.25,
        width: WIDTH * 0.88,
    },
    netTargetText: {
        borderColor: 'red',
        borderWidth: 3,
        fontSize: 80,
        fontWeight: '900',
        // textAlign: 'center',

        // flexShrink: 1,
        // flexWrap: 'wrap',

        // lineHeight: 70,
    },
    image: {
        width: WIDTH * 0.97,
        resizeMode: 'contain',
        height: HEIGHT * 0.3,
        marginTop: HEIGHT * 0.025,
    },
    shotsLeft: {
        fontSize: 30,
        // fontWeight: '600',
    },
});
