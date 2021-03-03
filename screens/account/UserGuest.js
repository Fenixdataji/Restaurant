import React from 'react'
import { StyleSheet, Text,ScrollView,  Image } from 'react-native'
import {Button} from 'react-native-elements'
import{useNavigation}from '@react-navigation/native'

export default function UserGuest() {
    const navigation =useNavigation()
    return (
        <ScrollView
            centerContent
            Style={styles.viewBody}
        >
            <Image
            source ={require("../../assets/Restaurant-Logo.png")}
            resizeMode = "contain"
            style={styles.image}
        
            />
            <Text style={styles.title}>Consulta tu perfil en Restaurants</Text>
            <Text style={styles.description}>
                ¿Como describirías tu mejor restaurante? Busca y visualiza restaurantes de una forma
                sencilla, cota cúal te ha gustado más y comenta cómo ha sido tu experiencia.
            </Text>
            <Button
            buttonStyle={styles.button}
            title="ver tu perfil"
            onPress={()=> navigation.navigate("login")}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
viewBody:{
    marginHorizontal:50
},
image:{
    height:300,
    width:"100%",
    marginBottom: 10,
},
title:{
    fontWeight: "bold",
    fontSize: 19,
    marginVertical:10,
    textAlign: "center"

},
description:{
    textAlign: "justify",
    marginBottom: 30,
    color: "#9e7474"

},
button:{
    backgroundColor: "#731b1b"
}


})

