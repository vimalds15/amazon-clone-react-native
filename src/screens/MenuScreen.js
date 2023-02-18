import { ScrollView, StyleSheet, TextInput, View } from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import MenuItemCard from "../components/MenuItemCard";
import { menuData } from "../data/MenuData";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const MenuScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      header: () => (
        <View
          style={{
            backgroundColor: "rgba(5, 250, 242,0.4)",
            flex: 1,
            flexDirection: "row",
            width: "100%",
            shadowColor: "black",
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.2,
            shadowRadius: 10,
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

          <View></View>
        </View>
      ),
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <LinearGradient colors={["rgba(5, 250, 242,0.4)", "#fff"]}>
        <View style={styles.itemCont}>
          {menuData.map((dat) => (
            <MenuItemCard title={dat.text} img={dat.img} />
          ))}
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerCont: {
    flex: 1,
    height: 400,
    marginTop:50
  },
  itemCont: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    padding:10,
  },
});
