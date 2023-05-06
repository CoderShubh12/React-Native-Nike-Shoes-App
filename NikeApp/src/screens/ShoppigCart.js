import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import cart from '../data/cart'
import CartListItem from '../components/CartListItem'

const ShoppigCartTotals=()=>{
    return <>
      <View style={styles.totalsContainer}>
            <View style={styles.row}>
                <Text style={styles.text}>SubTotal</Text>
                <Text style={styles.text}>410,00 us$</Text>
        </View>
            <View style={styles.row}>
                <Text style={styles.text}>Delivery</Text>
                <Text style={styles.text}>10,00 us$</Text>
        </View>
            <View style={styles.row}>
                <Text style={styles.textBold}>Total</Text>
                <Text style={styles.textBold}>420,00 us$</Text>
        </View>
        </View></>
}

const ShoppigCart = () => {

    const checkOut=()=>{

    }
  return (
    <>
      <FlatList data={cart} renderItem={({item})=><CartListItem cartItem={item}/>}
      ListFooterComponent={
      
      <ShoppigCartTotals/>}/>
      <Pressable onPress={checkOut} style={styles.button}>
  <Text style={styles.buttonText}>CheckOut</Text>
</Pressable>

    </>

  )
}

export default ShoppigCart

const styles = StyleSheet.create({
    totalsContainer:
    {margin:20,
        padding:10
 ,  
borderColor:"gray",
borderTopWidth:1 },
    row:{
        flexDirection:"row",
        justifyContent:'space-between',
        marginVertical:10
        
    },

    text:{
        fontSize:16,
        color: "gray"
    },
    textBold:{
        fontSize:18,
        color: "gray",
        fontWeight:500
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