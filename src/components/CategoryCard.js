import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CategoryCard = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{height:60,width:40,resizeMode:"cover"}}
      source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1uenD_Xlrb9YWq5JHjQsUNt_2ZMFmWgKiW2SBAcJjhYfgW3cqcOb1f27RuyfxplBJR_w&usqp=CAU"}} />
      <Text>Prime</Text>
    </View>
  )
}

export default CategoryCard

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        marginRight:20
    }
})