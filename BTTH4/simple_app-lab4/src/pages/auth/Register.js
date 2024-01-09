// src/pages/auth/Register.js
import { View, Text, StyleSheet, TextInput, Image, Button, Alert, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {useState, useEffect} from 'react';
import { useCurrentUser } from "@context/userContext.js";
import { styles } from "./styles.js";
import { useDispatch, useSelector } from "react-redux";
import { UserRegister } from "@utils/reducer/user.js";
import { UserData } from "@data/user.js";

export function Register({navigation}) {
    const [data, setData] = useState(UserData);
    const dispatch = useDispatch();
    const state = useSelector((state) => state.user);
    const {user, userId} = state;
    const [currentUser, setCurrentUser] = useCurrentUser();
    const register = async () => {
      if (data == null){
        Alert.alert("Error", "Please fill all the form")
      }
      else{
        await dispatch(UserRegister(data))
        await setCurrentUser(data)
        console.log(user)
        console.log(currentUser)
        Alert.alert("Success", "Login success")
      }
    }
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.headerimg}
          source={require("@img/react-icon.png")}
        />
        <Text style={[styles.headertitle]}>Create New Account</Text>
      </View>
      <View style ={styles.body}>
      <View style={styles.display}>
          <Icon style={styles.icon} name="user" size={20} color="black" />
          <TextInput
            style={styles.input}
            placeholder="User Name"
            placeholderTextColor="black"
            onChangeText={(text)=>{
              setData({...data, username: text})
            }}
          />
        </View>
        <View style={styles.display}>
          <Icon style={styles.icon} name="envelope-square" size={20} color="black" />
          <TextInput
            style={styles.input}
            placeholder="email"
            placeholderTextColor="black"
            onChangeText={(text)=>{
              setData({...data, email: text})
            }}
          />
        </View>
        <View style={styles.display}>
          <Icon style={styles.icon} name="unlock-alt" size={25} color="black" />
          <TextInput
            style={styles.input}
            placeholder="password"
            placeholderTextColor="black"
            onChangeText={(text)=>{
              setData({...data, password: text})
            }}
            secureTextEntry={true}
          />
        </View>
        <Button style={styles.btnLogin} title="Create" color="orange" onPress={register}/>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={styles.headertitle}>Already have an account?
          <Text style={styles.headertitle2}> Login now!</Text></Text>
          </Pressable>
      </View>
    </View>
  );
}
