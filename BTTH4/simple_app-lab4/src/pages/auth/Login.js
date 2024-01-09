// src/pages/auth/Login.js
import { View, Text, StyleSheet, TextInput, Image, Button, Alert, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {useState, useEffect} from 'react';
import { useCurrentUser } from "@context/userContext.js";
import { styles } from "./styles.js";
import { useDispatch, useSelector } from "react-redux";
import { Auth, UserLogin, getUserById } from "@utils/reducer/user.js";
import {UserData} from "@data/user.js";

export function Login({navigation}) {
  // pass: m38rmF$
  // username: johnd
    const [username, setUsername] = useState('johnd');
    const [password, setPassword] = useState('m38rmF$');
    const [data, setData] = useState(UserData);
    const dispatch = useDispatch();
    const state = useSelector((state) => state.user);
    const {user, userId} = state;
    const [currentUser, setCurrentUser] = useCurrentUser();

    const auth = async () =>{
      if (currentUser == null){
        if (username == null && password == null){
          Alert.alert("Error", "Username or password is empty")
        }
        else{
          setData({...data, username: username})
          dispatch(UserLogin({username: username, password: password}))
          setCurrentUser(user)
          Alert.alert("Success", "Login success")
          console.log(currentUser)
        }
      }
      else{
        dispatch(Auth(currentUser))
      }
    }
  useEffect(() => {
    if (user){
      setCurrentUser(user)
    }
  })
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.headerimg}
          source={require("@img/logo.jpg")}
        />
        <Text style={[styles.headertitle]}>Welcome</Text>
      </View>
      <View style ={styles.body}>
        <View style={styles.display}>
          <Icon style={styles.icon} name="envelope-square" size={20} color="black" />
          <TextInput
            style={styles.input}
            placeholder="username"
            placeholderTextColor="black"
            onChangeText={setUsername}
          />
        </View>
        <View style={styles.display}>
          <Icon style={styles.icon} name="unlock-alt" size={25} color="black" />
          <TextInput
            style={styles.input}
            placeholder="password"
            placeholderTextColor="black"
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </View>
        <Text style={styles.displayRight}>Forgot password?</Text>
        <Button style={styles.btnLogin} title="Login" color="orange" onPress={auth}/>
        <Text style={styles.headertitle}>Or Login With </Text>
        <View style={styles.option}>
            <Image style={styles.img} source={require("@img/facebook.png")} />
            <Image style={styles.img} source={require("@img/google.png")} />
        </View>
        <Pressable onPress={() => navigation.navigate('Register')}>
          <Text style={styles.headertitle}>Don't have an account? 
          <Text style={styles.headertitle2}> Sign up here</Text>
          </Text>
          </Pressable>
      </View>
    </View>
  );
}
