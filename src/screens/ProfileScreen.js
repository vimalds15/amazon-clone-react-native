import { StyleSheet, Text, View,Image } from 'react-native'
import React,{useEffect} from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Logo from "../../assets/amazon.png"

const ProfileScreen = ({navigation}) => {

  useEffect(() =>
    navigation.setOptions({
      headerTitle: "",
      headerLeft: () => (
        <Image 
        source={require("../../assets/amazon.png")}
        style={{height:30,width:90,marginLeft:10,backgroundColor:""}}
        />
      ),
      headerStyle:{
        backgroundColor:"rgba(5, 250, 242,0.4)"
      }
    })
  );

  return (
    <View>
      <Text>ProfileScreen</Text>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})