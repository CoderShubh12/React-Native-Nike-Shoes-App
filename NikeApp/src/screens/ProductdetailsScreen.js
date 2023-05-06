import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import product from '../data/product'

const ProductdetailsScreen = ({navigation}) => {

  const products= product[0];
  const {width}=useWindowDimensions();

  const addtoCart=()=>{
    navigation.navigate("Cart")
  }
  return (
    <View>
      <ScrollView>


      <FlatList  data={products.images}
      renderItem={({item})=>(
        <Image source={{uri: item}}
        style={{width:width, aspectRatio:1}}/>
        
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        />
      <View style={{padding:20}}>

      <Text style={styles.title}>{products.name}</Text>
      <Text style={styles.price}>${products.price}</Text>
      <Text style={styles.description}>{products.description}</Text>
      
     
      </View>

  
</ScrollView>
<Pressable onPress={addtoCart} style={styles.button}>
  <Text style={styles.buttonText}>Add to Cart</Text>
</Pressable>


    </View>
  )
}

export default ProductdetailsScreen

const styles = StyleSheet.create({
  
  title:{
    fontSize:34,
    fontWeight:400,
    marginVertical:20

  },
  price:{
    fontSize:16,
    fontWeight:"500",
    letterSpacing:2

  },
  description:{
    marginVertical:10,
    fontSize:18,
    lineHeight:30,
    fontWeight:'300'

  },
  button:{
    position:'absolute',
    backgroundColor:'black',
    bottom:30,
    width: "90%",
    alignSelf:"center",
    padding:20,
    borderRadius:100,
    alignItems:'center'



    

  },
  buttonText:{
    color:"white",
    fontWeight:500,
    fontSize:16

  }


})