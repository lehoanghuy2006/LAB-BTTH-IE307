// src/pages/main/Profile/EditProfile.js
import { updateUser } from '@utils/reducer/user.js';
import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect} from 'react';
import {Text, TextInput, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export  const EditProfile = ({navigation}) => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.user);
    const {user} = state;
    const [data, setData] = useState(user);
    console.log(data)
    const update = async () => {
        dispatch(updateUser(data))
        navigation.navigate("ProfileInfo")
    }

    useEffect(() => {
        // headerRight
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={update}>
                    <Icon name="save" size={30} color="#ed3232"></Icon>
                </TouchableOpacity>
            )
        })
        navigation.setOptions({
            headerShown: true
        })
    })

    return (
        <View style={styles.container}>
                <View style={styles.flexbox}>
                    <Text style={[styles.input1, styles.label]}> First Name </Text>
                    <Text style={styles.label}> Lastname </Text>
                </View>
                <View style={styles.flexbox}>
                    <TextInput
                        style={[
                            styles.textInput, styles.input1
                        ]}
                        placeholder="First Name"
                        value={data.name.firstname}
                        onChangeText={(text) => {
                            setData({...data, name:{
                                ...data.name,
                                firstname: text
                            }})
                        }}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Last Name"
                        value={data.name.lastname}
                        onChangeText={(text) => {
                            setData({...data, name:{
                                ...data.name,
                                lastname: text
                            }})
                        }}
                    />
                </View>
                {/* username */}
                <View>
                    <Text style={styles.label}>Username</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Username"
                        value={data.username}
                        onChangeText={(text) => {
                            setData({...data, username: text})
                        }}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Email"
                        value={data.email}
                        onChangeText={(text) => {
                            setData({...data, email: text})
                        }}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Phone Number</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Phone Number"
                        value={data.phone}
                        onChangeText={(text) => {
                            setData({...data, phone: text})
                        }}
                    />
                </View>
                <View>
                    <Text style={styles.label}>House number</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="House number"
                        value={data.address.number}
                        onChangeText={(text) => {
                            setData({...data, address: {
                                ...data.address,
                                number: text
                            }})
                        }}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Street</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Street"
                        value={data.address.street}
                        onChangeText={(text) => {
                            setData({...data, address: {
                                ...data.address,
                                street: text
                            }})
                        }}
                    />
                </View>
                <View>
                    <Text style={styles.label}>City</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="City"
                        value={data.address.city}
                        onChangeText={(text) => {
                            setData({...data, address: {
                                ...data.address,
                                city: text
                            }})
                        }}
                    />
                </View>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white'
    },
    flexbox:{
        // flex 2/3 1/3
        flexDirection: 'row',
        justifyContent: 'left',
        alignItems: 'center',
    },
    input1:{
        flexGrow: 2,
    },
    input2:{
        flexGrow: 1,
    },
    textInput:{
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        padding: 10,
        margin: 10
    },
    label:{
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
    },
})