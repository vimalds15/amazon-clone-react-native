import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import DeliveryAddressCard from "../components/DeliveryAddressCard";
import CategoryCard from "../components/CategoryCard";
import CarouselCard from "../components/CarouselCard";
import DealCard from "../components/DealCard";
import { dealData,devicesDealData } from "../data/CarouselData";

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
  ,[]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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

      <View>
        <Text style={styles.dealText}>Electronics devices for home office</Text>
        <View style={styles.dealItemCont}>
        {devicesDealData.map(data =>
        <DealCard img={data.img} text={data.text}  />
        
        )}
        </View>
      </View>

      <View>
        <Text style={styles.dealText}> Up to 60% off | Tools & home improvement</Text>
        <View style={styles.dealItemCont}>
        {dealData.map(data =>
        <DealCard img={data.img} text={data.text}  />
        
        )}
        </View>
      </View>

    </ScrollView>
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
  dealText:{
    fontSize:16,
    fontWeight:"bold",
    marginBottom:20,
    marginLeft:10,
    marginTop:20,
  },
  dealItemCont:{
    flexDirection:"row",
    justifyContent:"space-around",
    flexWrap:"wrap"
  
  },
});
