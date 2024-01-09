// src/pages/loading.js
import {Image, StyleSheet} from 'react-native';

export function Loading() {
    return (
        <Image
        source={require('@img/loading3.gif')}
        style={styles.container}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        height: '50%',
        width: '100%',
    },
});