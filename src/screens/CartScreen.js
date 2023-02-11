import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import DeliveryAddressCard from "../components/DeliveryAddressCard";
import CartItem from "../components/CartItem";

const CartScreen = ({navigation}) => {
  useEffect(() =>
    navigation.setOptions({
      headerTitle: "",
      header: () => (
        <View
          style={{
            backgroundColor: "rgba(5, 250, 242,0.4)",
            flex: 1,
            flexDirection: "row",
            width: "100%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "80%",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#b8baba",
              margin: 15,
              paddingLeft: 15,
              backgroundColor: "white",
              borderRadius: 5,
              overflow: "hidden",
              height: 40,
            }}
          >
            <MaterialIcons name="search" color={"gray"} size={20} />
            <TextInput
              style={{
                outline: "none",
                width: "92%",
                height: "90%",
                borderWidth: 0,
                paddingLeft: 10,
                backgroundColor: "white",
                paddingBottom: 2,
              }}
              placeholder="Search Amazon.in"
              placeholderTextColor="gray"
            />
          </View>

          <View
            style={{
              // flex:1,
              flexDirection: "row",
              alignItems: "center",
              height: "100%",
              justifyContent: "center",
              width: "10%",
            }}
          >
            <MaterialIcons name="mic-none" size={26} />
          </View>

					<View>
					</View>

        </View>
      ),
    })
  ,[]);

  return (
    <View style={styles.container} >
      <DeliveryAddressCard />
      <View style={styles.subCont}>
        <Text style={styles.titleText}>Subtotal</Text>
        <Text style={styles.priceText}>₹948.00</Text>
      </View>
      <View style={styles.deliveryTextCont}>
        <MaterialIcons name="verified" color={"teal"} size={20} style={{backgroundColor:"white"}} />
        <Text style={{color:"teal",marginLeft:5}}>Your order is eligible for FREE Delivery. Select this option at checkout.</Text>
      </View>
      <View style={styles.buyBtn}>
        <Pressable style={styles.btnCont}>
          <Text style={styles.btnText}>Proceed to buy (2 items)</Text>
        </Pressable>
      </View>
      <ScrollView contentContainerStyle={{flexGrow:1,marginTop:10}} showsVerticalScrollIndicator={false} >
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </ScrollView>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  subCont:{
    padding:10,
    flexDirection:"row",
    alignItems:"center"
  },
  titleText:{
    fontSize:22,
    fontWeight:"600",
  },
  priceText:{
    fontWeight:"bold",
    fontSize:24,
    marginLeft:10
  },
  deliveryTextCont:{
    padding:10,
    flexDirection:"row"
  },
  btnCont:{
    marginLeft:"5%",
    marginRight:"5%",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"gold",
    paddingTop:10,
    paddingBottom:10,
    borderRadius:5,
    marginTop:10,
    marginBottom:10
  },
  btnText:{
    fontWeight:"600"
  },
  buyBtn:{
    borderBottomWidth:1,
    borderColor:"gray"
  }
})