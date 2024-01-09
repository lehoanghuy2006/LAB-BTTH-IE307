// src/pages/product/ProductDetail.js
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {useLayoutEffect} from 'react';
export function ProductDetail ({route, navigation}) {
    const {data} = route.params;
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: data.title,
        })
    }, [navigation])
    return (
        <View style={styles.container}>
            <Image source={{uri: data.image}} style={styles.productImg}/>
            <Text style={styles.productTitle}>{data.title}</Text>
            <View style={styles.productInfo}>
                <View>
                <Text style={styles.price}>${data.price}</Text>
                <Text>{data.rating.rate}<Icon name="star" size={20} color="#ffff34"/>({data.rating.count} review)</Text>
                </View>
                <TouchableOpacity>
                    <Icon name="plus-circle" size={30} color="hotpink"/>
                </TouchableOpacity>
            </View>
            <Text style={styles.description}>{data.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        borderRadius: 10,
        backgroundColor: 'aliceblue',
        paddingLeft: 10,
        paddingRight: 10,
    },
    productImg:{
        height: '50%',
        width: '100%',
    },
    productInfo:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    price:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
    },
    productTitle:{
        fontSize: 16,
        fontWeight: 'bold',
    },
    description:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    }
})