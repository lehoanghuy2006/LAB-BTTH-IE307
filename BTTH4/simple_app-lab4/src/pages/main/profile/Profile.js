// src/pages/main/Profile/Profile.js
import {Text, View, Button, StyleSheet, Image, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {useCurrentUser} from '@context/userContext.js'
import {Logout} from '@utils/reducer/user.js'
import {useDispatch, useSelector} from 'react-redux'
import {Loading } from '@pages/loading.js'
export function Profile({navigation}) {
    const [currentUser, setCurrentUser] = useCurrentUser();
    const dispatch = useDispatch();
    const state = useSelector((state) => state.user);
    const {user, userId} = state;
    console.log(user)
    return (
    <View style={styles.container}>
        <View style={styles.header}>
            <View style={styles.flebox}>
            <Image style={styles.avatar} source={require('@img/avatar.png')}></Image>
            <Text style={styles.headertitle}>{
                user.name.firstname + " " + user.name.lastname
            }</Text>
            </View>
            <TouchableOpacity onPress={() => {
                navigation.navigate('EditProfile')
            } }>
            <Icon name="edit" size={40} color="#ff0000"></Icon>
            </TouchableOpacity>
        </View>
        <View style={styles.body}>
            <Text style={styles.label}>Name</Text>
            <Text style={styles.text}>{user.name.firstname + " " + user.name.lastname}</Text>
            <Text style={styles.label}>Username</Text>
            <Text style={styles.text}>{user.username}</Text>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.text}>{user.email}</Text>
            <Text style={styles.label}>Phone</Text>
            <Text style={styles.text}>{user.phone}</Text>
            <Text style={styles.label}>Address</Text>
            <Text style={styles.text}>{user.address.number + ', ' + user.address.street + ', ' + user.address.city}</Text>
        </View>
        <Button title="Logout" onPress={() => {
            setCurrentUser(null)
            dispatch(Logout())
        }}></Button>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,

    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headertitle:{
        fontSize: 30,
        fontWeight: 'bold'
    },
    flebox:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10
    },
    label:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    text:{
        fontSize: 20,
        marginBottom: 10
    },
})