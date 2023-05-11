import React, {useState}  from 'react';
import { View, Text,Image,StyleSheet, Button, Alert,Pressable } from 'react-native';

const styles = StyleSheet.create({
 logo:{
    width: 80,
    height: 50,
    top: -100
 },
 button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#34d5eb',
    width: 200,
    margin: 10
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  pressablePressed: {
    transform: [{ scale: 0.95 }],
  },
})

function HomeScreen({ navigation }) {
  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Image style={styles.logo } source={require('../img/logo.png')} /> 
      <Text>Home Screen</Text>

    <Pressable style={styles.button} onPress={() => navigation.navigate('Agendar')}>
        <Text style={styles.text}>Agendar Cita</Text>
    </Pressable>
    <Pressable style={styles.button} onPress={() => navigation.navigate('Servicios')}>
        <Text style={styles.text}>Servicios</Text>
    </Pressable>
    <Pressable style={styles.button} onPress={() => navigation.navigate('Buscar')}>
        <Text style={styles.text}>Buscar Cita</Text>
    </Pressable>
      
    </View>
  );
}

export default HomeScreen