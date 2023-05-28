import React, { useState, useEffect } from 'react';
import {  StyleSheet, TextInput, Text, View, Pressable, Image,  } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DatePicker from '@dietime/react-native-date-picker';



const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 50,
    top: -10
  },
  inputUnderLine: {
    backgroundColor: "white",
    borderBottomWidth: 1,
    padding: 10,
    width: 300,
    margin: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ebebeb',
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',

  },
  dropdown1BtnTxtStyle: {color: '#444', textAlign: 'left'},
  dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},


  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    textTransform: 'uppercase',
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#3e93de',
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
  container: {
    flex: 0.5,
    width: 300,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 20,
    margin: 20,
    borderRadius: 20
  },
})

function Agendar({ navigation }) {
  const [id, setId] = useState('');
  const [nombreCliente, setName] = useState('')
  const [nombreAbogado, setAbogado] = useState('')
  const Abogados = ["Pablo Araya", "Gonzalo Huerta", "Sergio Guerra", "Javier Fernandez"]
  const [date, setDate] = useState(new Date())
  
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const generateRandomID = () => {
    const min = 100000;
    const max = 999999;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber.toString();
  };

  const handleAgendarCita = () => {
    const formData = {
      id,
      nombreCliente,
      nombreAbogado,
      date: formatDate(date), 
    };
    fetch('http://127.0.0.1:8000/agendas/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (response.ok) {
          console.log(formData)
          navigation.navigate('Home');
        } else {

          console.error('Error:', response.status);
        }
      })
      .catch(error => {

        console.error('Error:', error);
      });
  };


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image style={styles.logo} source={require('../img/logo.png')} />
      <Text style={styles.title}>Agendar Cita</Text>
      <TextInput
        style={styles.inputUnderLine}
        placeholder="Id de la cita"
        onChangeText={setId}
        defaultValue={id}
        maxLength={6}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.inputUnderLine}
        placeholder="Nombre del Cliente"
        onChangeText={setName}
        defaultValue={nombreCliente}
      />
      <SelectDropdown
        data={Abogados}
        defaultButtonText={'Selecciona un abogado'}
        buttonStyle={styles.inputUnderLine}
        buttonTextStyle={styles.dropdown1BtnTxtStyle}

        renderDropdownIcon={isOpened => {
          return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
        }}
        
        onSelect={(selectedItem, index) => {
          setAbogado(selectedItem)
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem
        }}
        rowTextForSelection={(item, index) => {
          return item
        }}
      />
     <View style={styles.container}>
            <Text style={{marginBottom:10}}>{date ? date.toLocaleDateString() : "Select date..."}</Text>
            <DatePicker
                markHeight={40}
                value={date}
                height={150}
                startYear={2018}
                endYear={2030}
                onChange={(value) => setDate(value)}
                format="dd-mm-yyyy"
            />
        </View>
      <Pressable
        style={styles.button}
        onPress={handleAgendarCita }
      >
        <Text style={styles.text}>Agendar Cita</Text>
      </Pressable>

    </View>
  );
}


export default Agendar