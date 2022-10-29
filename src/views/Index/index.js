import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Index({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido</Text>
        <Button style={styles.button}
        title="Quiz de Ciencias"
        onPress={()=>navigation.navigate('QuizCiencias')}
        />
        <Button style={styles.button}
        title="Quiz de matemáticas"
        onPress={()=>navigation.navigate('MathQuiz')}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:25,
    color: '#000000'
  },
  button:{
    paddingBottom:20,
  }
});