import { FlatList, Image, StyleSheet, Text, Pre, Pressable } from "react-native";
import React from "react";
// import products from "../data/product";
import { useSelector, useDispatch } from "react-redux";
import { productsSLice } from "../store/productSlice";

const ProductScreen = ({navigation}) => {
const dispatch=useDispatch()
  const products= useSelector(state=>state.products.products)
  return (
    <FlatList
      numColumns={2}
      data={products}
      renderItem={({ item }) => (
        <Pressable onPress={()=>{
        
        dispatch(productsSLice.actions.setSelectedProduct(item.id));
        navigation.navigate("Product Details")
        }} style={styles.itemcontainer}>
          <Image source={{ uri: item.image }} style={styles.image}></Image>
        </Pressable>
      )}
    />
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  itemcontainer: {
    width: "50%",
    padding: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
