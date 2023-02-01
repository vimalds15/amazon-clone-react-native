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
      headerRight:() => (
        <View style={{flexDirection:"row",alignItems:"center",marginRight:10}}>
          <MaterialIcons name='notifications-none' size={26} style={{marginRight:5}}/>
        <MaterialIcons name="search" size={26} />  
        </View>
      ),
      headerStyle:{
        backgroundColor:"rgba(5, 250, 242,0.4)"
      }
    })
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleCont}>
        <Text style={styles.titleText}>Hello, Av Codes</Text>
        <MaterialIcons name='account-circle' color={"gray"} size={30} />
      </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container:{
    padding:15,
  },
  titleText:{
    fontSize:24,
    fontWeight:"bold",
  },
  titleCont:{
    flexDirection:"row",
    justifyContent:"space-between"
  }
})