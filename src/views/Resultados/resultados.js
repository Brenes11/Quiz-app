import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { ListItem, Avatar } from "react-native-elements";
import { DataTable } from 'react-native-paper';
import { style } from 'styled-system';

export default function Resultados({ route, navigation }) {
  const { resultados } = route.params;
  let resultado = 0;
  let total = 0;
  resultados.map((res) => {
    if (res.isRight) {
      resultado++;
    }
    total++;
  })
  return (
    <View style={styles.container}>
      <Text>resultados</Text>
      <DataTable>
        <DataTable.Header>
        <DataTable.Title style={styles.cell}>Pregunta</DataTable.Title>
        <DataTable.Title style={styles.answer}>Respuesta Correcta</DataTable.Title>
        <DataTable.Title style={styles.answer}>Tu respuesta</DataTable.Title>
      </DataTable.Header>

      {resultados.map((element, i) => (
        <DataTable.Row key={i}>
        <DataTable.Cell style={styles.cell}>{element.question}</DataTable.Cell>
        <DataTable.Cell style={styles.answer}>{element.answer}</DataTable.Cell>
        <DataTable.Cell style={styles.answer}>{element.response}</DataTable.Cell>
      </DataTable.Row>
      ))}
      </DataTable>
      <Text>Puntuación final: {resultado} / {total}</Text>
      <Button
        title="inicio"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:15,
    paddingTop:30,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  cell:{height:20},
  answer:{maxWidth:170}
});