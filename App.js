import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DataTable } from 'react-native-paper';
import nutri from './assets/nutrialuslogo.png';
import envelope from './assets/envelope-fill.svg';
import person from './assets/person-circle.svg';
import telephone from './assets/telephone-fill.svg';

export default function App() {
  const [data, setData] = useState({});
  const { name, phone, email, image } = data;

  useEffect(() => {
    patients();
  }, [])

  const patients = async () => {
    const url = 'https://0q27loouph.execute-api.us-east-1.amazonaws.com/'
    const resp = await fetch(url);
    const json = await resp.json();
    setData(json);
  }

  return (
    <View style={styles.container}>
      <SafeAreaProvider>
        <Header
          leftComponent={{ icon: 'menu', color: '#F87113' }}
          centerComponent={<Image style={{ width: 160, height: 25, marginBottom: 15, borderRadius: 5 }} source={nutri} />}
          rightComponent={{ icon: 'home', color: '#F87113' }}
          containerStyle={{ width: 390, backgroundColor: 'white' }}
        />
      </SafeAreaProvider>
      <View style={styles.centeredView} >

        <Text style={{ color: '#F87113' }}>Información Personal</Text>

        <DataTable style={styles.tableView}>
          <DataTable.Row>
            <DataTable.Cell ><Text style={{ color: '#264653' }}><Image source={person} style={{ width: 16, height: 16 }} /> Nombre:</Text></DataTable.Cell>
            <DataTable.Cell><Text style={{ color: '#264653', fontSize: 13 }}>{name}</Text></DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row >
            <DataTable.Cell><Text style={{ color: '#264653' }}><Image source={telephone} style={{ width: 16, height: 16 }} />  Teléfono:</Text></DataTable.Cell>
            <DataTable.Cell ><Text style={{ color: '#264653', fontSize: 13 }}>{phone}</Text></DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell><Text style={{ color: '#264653' }}><Image source={envelope} style={{ width: 16, height: 16 }} /> Email:</Text></DataTable.Cell>
            <DataTable.Cell ><Text style={{ color: '#264653', fontSize: 12 }} >{email}</Text></DataTable.Cell>
          </DataTable.Row>
        </DataTable>
        <View>
          <Image
            style={{ width: 150, height: 150, marginTop: 10, borderRadius: 5, marginBottom: 10 }}
            source={{ uri: image }}
          />
        </View>
        <Button
          onPress={patients}
          title="Siguiente"
          color="#F87113"
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
    flexDirection: 'column',
    width: 350,
    padding: 10,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 180,
    shadowColor: 'grey',
    shadowRadius: 15
  },

  tableView: {
    width: 360,

  },


});
