import React from 'react';

import { Text, View, StyleSheet } from 'react-native';

export default function Header({appName}) {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{appName}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#0088ff',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#fff',
    },
});