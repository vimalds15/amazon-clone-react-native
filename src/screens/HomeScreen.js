import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useRef } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import DeliveryAddressCard from "../components/DeliveryAddressCard";
import CategoryCard from "../components/CategoryCard";
import CarouselCard from "../components/CarouselCard";

const HomeScreen = ({ navigation }) => {
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
  );

  return (
    <View>
      <DeliveryAddressCard />
      <ScrollView style={styles.categoryContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </ScrollView>
      <CarouselCard />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  categoryContainer: {
    flex: 1,
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
});
