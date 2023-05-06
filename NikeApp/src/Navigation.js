import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import ProductScreen from './screens/ProductScreen'
import {createStackNavigator} from "@react-navigation/stack"
import ShoppigCart from './screens/ShoppigCart'
import ProductdetailsScreen from './screens/ProductdetailsScreen'
import {FontAwesome5} from "@expo/vector-icons"
const Navigation = () => {

    const Stack= createStackNavigator()
  return (
    
      <NavigationContainer>
        <Stack.Navigator screenOptions={{contentStyle:{backgroundColor:"red"}}}>
            <Stack.Screen name="Products" component={ProductScreen}
                options={({navigation})=>(    {headerRight:()=>(<Pressable onPress={()=>navigation.navigate("Cart")} style={{flexDirection:"row"}}><FontAwesome5  name="shopping-cart" size={18} color="gray"/>
                <Text style={{marginLeft:5, fontWeight:"500"}}>1</Text></Pressable>)})
                
            } />
            <Stack.Screen name="Cart" component={ShoppigCart}
        
           
          
            
            />
            <Stack.Screen name="Product Details" component={ProductdetailsScreen}   options={{presentation:"modal"}} />

        </Stack.Navigator>
      </NavigationContainer>
    
  )
}

export default Navigation

const styles = StyleSheet.create({})