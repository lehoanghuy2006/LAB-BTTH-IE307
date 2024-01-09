// src/pages/product/ProductItem.js
import {Text, View, Button, Image, StyleSheet, TouchableOpacity, Alert} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux'
import {AddToCart} from '@utils/reducer/user.js'
export function ProductItem ({data}) {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.user);
    const {error, message, cart} = state;
    const add =() =>{
        if (cart.products.find((item) => item.productId == data.id)){
            Alert.alert("Error", "Product already in cart")
        }
        else{
            dispatch(AddToCart(
                {
                    productId: data.id,
                    quantity: 1,
                }
            ))
        }
    }
    return (
    <View style={styles.container}>
        <Image source={{uri: data.image}} style={styles.productImg}/>
        <Text style={styles.productTitle}>
            {/* substring */}
            {data.title.length > 50 ? data.title.substring(0, 50) + "..." : data.title}
        </Text>
        <View style={styles.productInfo}>
            <View>
            <Text style={styles.price}>${data.price}</Text>
            <Text>{data.rating.rate}<Icon name="star" size={20} color="#ffff34"/>({data.rating.count})</Text>
            </View>
            <TouchableOpacity onPress={()=>{
                add()
            }}>
                <Icon name="plus-circle" size={30} color="hotpink"/>
            </TouchableOpacity>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        borderRadius: 10,
        backgroundColor: 'aliceblue',
        padding: 10,
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
        fontSize: 14,
        fontWeight: 'bold',
    },
})