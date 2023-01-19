import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export const InDrillScreen = () => {
    return (
        <>
            <View style={styles.column}>
                <View style={styles.row}>
                    <Text>PATTERN</Text>
                    <Text>Riding Pine</Text>
                </View>
                <View style={styles.row}>
                    <Text>TUTOR</Text>
                    <Text>5 hole</Text>
                </View>
                <View style={styles.row}>
                    <Text>TIMEOUT</Text>
                    <Text>7 seconds</Text>
                </View>
            </View>
            <View>
                <Text>TOP LEFT</Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    column: {
        flexDirection: 'column',
    },
});
