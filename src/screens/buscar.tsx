import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  Image,   
  SafeAreaView,
  ScrollView,
  TextInput,} from 'react-native';
import {  Card, Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const users = [
  {
    name: 'brynn',
    abogado: 'Pablo Araya',
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
  {
    name: 'thot leader',
    abogado: 'Pablo Araya',
    avatar:'https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
  },
  {
    name: 'jsa',
    abogado: 'Pablo Araya',
    avatar: 'https://images.pexels.com/photos/355036/pexels-photo-355036.jpeg?h=350&auto=compress&cs=tinysrgb',
  },
  {
    name: 'talhaconcepts',
    abogado: 'Pablo Araya',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    name: 'andy vitale',
    abogado: 'Pablo Araya',
    avatar: 'https://images.unsplash.com/photo-1546539782-6fc531453083?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
  },
  {
    name: 'katy friedson',
    abogado: 'Pablo Araya',
    avatar:'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg',
  },
  ];

function Buscar() {
  const [buscar, setbuscar] = useState('');
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image style={styles.logo} source={require('../img/logo.png')} />
      <Text style={styles.title}>Buscar Cita</Text>
      <SafeAreaView style={styles.container}>
      <ScrollView >
        <Text style={styles.text}>
        <Card wrapperStyle={styles.card}>
        <Icon name="magnify" size={24} color="#666" style={{  position:'absolute',right:0 }} />
        <TextInput
        inlineImageLeft='magnify'
        placeholder="Buscar"
        onChangeText={setbuscar}
        defaultValue={buscar}
      />
          <Card.Divider />
          {users.map((u, i) => {
            return (
              <View key={i} style={styles.user}>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={{ uri: u.avatar }}
                />
                <Text style={styles.name}><Text style={{fontWeight:'bold'}}>{`Cliente: ` }
                </Text>{u.name}</Text>
                <Text style={styles.name}> <Text style={{fontWeight:'bold'}}>{`Abogado: ` }</Text> {u.abogado}</Text>
              </View>
            );
          })}
        </Card>
        </Text>
      </ScrollView>
    </SafeAreaView>

    </View>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 50,
    marginTop: 50
  },
  card:{
    margin:20
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop:20
  },
  text: {
    fontSize: 20,
    alignSelf: 'center',
   textAlign:'justify',
   marginHorizontal: 20

  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 20,
    height: 30,
    marginTop:10
  },
  image: {
    width: 50,
    height: 50,
    margin: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default Buscar