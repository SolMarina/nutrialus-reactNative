import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import nutri from './assets/nutrialuslogo.png';
import { DataTable } from 'react-native-paper';
import useFetch from './Hooks/UseFetch';
import envelope from './assets/envelope-fill.svg'
import person from './assets/person-circle.svg'
import telephone from './assets/telephone-fill.svg'

export default function App() {
  
  const {data} = useFetch(`https://0q27loouph.execute-api.us-east-1.amazonaws.com/`);
  const { name, phone, email, image } = !!data && data;
  
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

        <Image
          style={{ width: 150, height: 150, marginTop: 10, borderRadius: 5, marginBottom: 10 }}
          source={{ uri: image }}

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
    marginBottom: 150,
    shadowColor: 'grey',
    shadowRadius: 15


  },

  tableView: {
    width: 360,

  },



});
