import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Componentes del proyecto
import Index from './src/views/Index/index';
import Resultados from './src/views/Resultados/resultados';
import QuizCiencias from './src/views/Ciencias/cienciasquiz';
import QuizLenguaje from './src/views/Lenguaje/lenguajequiz';
import MathQuiz from './src/views/Matematica/mathquiz';
import { backgroundColor } from 'styled-system';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name ="Index" component={Index}/>
          <Stack.Screen name ="Resultados" component={Resultados}/>
          <Stack.Screen name ="QuizCiencias" component={QuizCiencias}/>
          <Stack.Screen name ="QuizLenguaje" component={QuizLenguaje}/>
          <Stack.Screen name ="MathQuiz" component={MathQuiz} options={{title: 'Test de matemáticas'}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}