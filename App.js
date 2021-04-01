import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import nutri from './assets/nutrialuslogo.png'
import useFetch from './Hooks/UseFetch';


export default function App() {

  const { data } = useFetch(`https://0q27loouph.execute-api.us-east-1.amazonaws.com/`);
  const { name, phone, email, image } = !!data && data;
  const next = () => {
    window.location.replace('');

  }

  return (
    <View style={styles.container}>

      <SafeAreaProvider>

        <Header
          leftComponent={{ icon: 'menu', color: '#F87113' }}
          centerComponent={<Image style={{ width: 160, height: 25, marginBottom: 15, borderRadius: 5 }} source={nutri} />}
          rightComponent={{ icon: 'home', color: '#F87113' }}
          containerStyle={{ width: 380, backgroundColor: 'white' }}
        />

      </SafeAreaProvider>


      <View style={styles.centeredView} >

        <Text>Nombre: {name}</Text>
        <Text>Número de teléfono: {phone}</Text>
        <Text>Email: {email}</Text>

        <Image
          style={{ width: 100, height: 100, marginBottom: 15, borderRadius: 5 }}
          source={image}
        />


        <Button
          title="Siguiente"
          color="#f194ff"
          onPress={next}
        />
      </View>
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({


  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#264653',

  },
  centeredView: {
    display: 'flex',
    flexFlow: 'column',
    width: 300,
    padding: 10,
    boxShadow: 20, color: 'grey',
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 250

  },




});
