import React, { useEffect, useState } from 'react';
import {Text} from 'react-native';
import QuizeSingleChoice from "react-native-react-native-quiz-single-choice";
//import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';

export default function MathQuiz ({ navigation }) {

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  
  async function getQuestions(){
    const response = await fetch("http://localhost/DAMA/proyectoFinal/endpoints/getQuestionsById.php?id=4", {
      method: 'GET',
      headers:{
        Accept: "application/json",
        'Content-Type': 'application/json',
        mode: "no-cors"
      }
    }).then((response)=>response.json()).then((responseJson)=>{
      setData(responseJson.items);
      
    }).catch((error)=>{
      alert(error)
    }).finally(()=>{
      setIsLoading(false)
    })
  }
  useEffect(() => {
    getQuestions()
  }, []);

  if(isLoading){
    return(
      <Text>Cargando...</Text>
    )
  }else{
    return (
      <QuizeSingleChoice
        containerStyle={{ backgroundColor: "#010225", paddingTop: 30 }}
        questionTitleStyle={{ fontSize: 22, color: "#FFF" }}
        responseStyle={{
          borderRadius: 15,
          backgroundColor: "#404576"
        }}
        responseTextStyle={{ fontSize: 12, fontWeight: "normal" }}
        selectedResponseStyle={{
          borderRadius: 15,
          backgroundColor: "#FFF701",
        }}
        selectedResponseTextStyle={{
          fontSize: 14,
          fontWeight: "normal",
          color: "#000"
        }}
        responseRequired={true}
        nextButtonText={"Next"}
        nextButtonStyle={{ backgroundColor: "#0750D8" }}
        nextButtonTextStyle={{ color: "#FFF" }}
        prevButtonText={"Prev"}
        prevButtonStyle={{ backgroundColor: "#fa5541" }}
        prevButtonTextStyle={{ color: "#FFF" }}
        endButtonText={"Done"}
        endButtonStyle={{ backgroundColor: "#06d755" }}
        endButtonTextStyle={{ color: "#FFF" }}
        buttonsContainerStyle={{ marginTop: "auto", backgroundColor: "#010225" }}
        onEnd={(results) => {
          let contador = 0;
          results.map((res)=>{
            if(res.isRight){
              contador++;
            }
          })
          
          
          
          console.log(results);
          navigation.navigate('Resultados', {
            resultados: results
          })
        }}
        data={data}
      />
    );
  }

  
  
};