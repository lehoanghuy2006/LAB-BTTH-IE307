// src/pages/product/Banner.js
import Carousel from 'react-native-reanimated-carousel';
import {Dimensions, Text, View, Image, StyleSheet} from 'react-native'

const data = [
    "https://img.freepik.com/premium-vector/special-offer-black-friday-banner-template_488814-112.jpg",
    "https://images.remotehub.com/d42c62669a7711eb91397e038280fee0/original_thumb/ec1eb042.jpg?version=1618112516",
    "https://cdn.vectorstock.com/i/preview-1x/14/27/dairy-product-horizontal-web-banner-vector-45811427.jpg",
    "https://img.freepik.com/premium-vector/special-offer-black-friday-banner-template_488814-112.jpg"
]

export function Banner(){
    const {width, height} = Dimensions.get('window')
    return (
            <Carousel
                data={data}
                renderItem={({item}) => {
                    return (
                        <Image source={{uri: item}} style={{height: "100%", width: "100%"}}/>
                    )
                }}
                width={width}
                height={height/3}
                loop
                autoplay
                autoplayInterval={1000}
            />
    )
}
