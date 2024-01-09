import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import GoogleIcon from '../../assets/svg/google.svg';
import FacebookIcon from '../../assets/svg/facebook.svg';
import {units} from '../../themes/Units'


const SocialMediaCard = () => {
  return (
    <View style= {styles.container}>
    <TouchableOpacity style={styles.socialIcon}  >
    <FacebookIcon />
    </TouchableOpacity>
    <TouchableOpacity style={styles.socialIcon} >
    <GoogleIcon />
    </TouchableOpacity>
    </View>
  );
};

export default SocialMediaCard;

const styles = StyleSheet.create({
  container : {
    flexDirection: "row", 
    marginTop: 15, 
    justifyContent: 'center', 
    marginBottom: 5,
    alignItems : 'center',
  },

  socialIcon : {
    padding: 15,
    // width: 150,
    // height: 150,
    // borderWidth : 1,
  }

});
