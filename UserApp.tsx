import React, { useState, useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import ShopSection from "./Shop.tsx"

function DayCell(props){
  return(
    <TouchableOpacity
      style={styles.dayCell}
    >
      <Text>
        {props.text}
      </Text>
    </TouchableOpacity>
  )
}

function DayName(props){
  return(
    <Text
      style={styles.dayName}
    >
      {props.dname}
    </Text>
  )
}

function CustomCalendar(props){

  const [month , setMonth] = useState(new Date().toLocaleString('default', { month: 'long' }));
  const [days , setDays] = useState([]);
  const [daycells , setDayCells] = useState([]);

  useEffect(() => {
    if(days.length==0){
      var daynames = [];
      var arr = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
      for( i in arr){
        daynames.push(<DayName dname={arr[i]} />)
      }
      var date = new Date();
      var firstDay = new Date(date.getFullYear(), date.getMonth(), 2).toLocaleString('default', { weekday: 'short' });
      var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).toLocaleString('default', { weekday: 'short' });
      firstDay=firstDay.split(',');
      lastDay=lastDay.split(',');
      var ts = 0;
      var counter = 0;
      var te = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
      var tcontent = [];
      var f = true;
      while( counter < 35 ){
        if(counter <= 7 && f){
          if(arr[counter] == firstDay[0]){
            tcontent.push(<DayCell text={1} />)
            ts = counter;
            f = false;
          }else{
            //prepei na pros8esw kena
            tcontent.push(<DayCell text={" "} />)
          }
        }else if (counter-ts+1 <= te){
          //edw akoma vazw meres
          tcontent.push(<DayCell text={counter-ts+1} />)
        }else{
          //prepei na pros8esw kena
          console.log("a")
          tcontent.push(<DayCell text={" "} />)
        }
        counter+=1;
      }
      setDays(daynames.slice());
      setDayCells(tcontent);
    }//else{setDays(null);}
  });
  return (
    <View
      style={styles.calendarView}
    >
      <Text
        style={styles.calendarHeader}
      >
        {month}
      </Text>
      <View
        style={styles.daysView}
      >
        {days}
      </View>
      <View
        style={{"flex":1,"flexDirection" : "row","alignSelf":"center","padding" : 5, "marginLeft" : 5,"marginRight" : 5,}}
      >
      {daycells.slice(0,7)}
      </View>
      <View
        style={{"flex":2,"flexDirection" : "row","alignSelf":"center","padding" : 5, "marginLeft" : 5,"marginRight" : 5,}}
      >
      {daycells.slice(7,14)}
      </View>
      <View
        style={{"flex":3,"flexDirection" : "row","alignSelf":"center","padding" : 5, "marginLeft" : 5,"marginRight" : 5,}}
      >
      {daycells.slice(14,21)}
      </View>
      <View
        style={{"flex":4,"flexDirection" : "row","alignSelf":"center","padding" : 5, "marginLeft" : 5,"marginRight" : 5,}}
      >
      {daycells.slice(21,28)}
      </View>
      <View
        style={{"flex":5,"flexDirection" : "row","alignSelf":"center","padding" : 5,}}
      >
      {daycells.slice(28,35)}
      </View>
    </View>
  );

}

function UserApp(): JSX.Element {

  const [content , setContent] = useState(<CustomCalendar />);

  function toShop(){
    setContent(<ShopSection />);
  }

  function toCalendar(){
    setContent(<CustomCalendar />);
  }

  return (
    <View
    >
      <View
        style = {styles.buttonView}
      >
        <TouchableOpacity
          style={styles.controlButtons}
          onPress={() => toCalendar()}
        >
          <Text>
            {"Calendar"}
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.controlButtons}
          onPress={() => toShop()}
        >
          <Text>
            {"Shop"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.controlButtons}
        >
          <Text>
            {"Options"}
          </Text>
        </TouchableOpacity>
      </View>
      {content}
    </View>
    );
}

const styles = StyleSheet.create({
  calendarView : {
    backgroundColor : '#ff4d4dad',
    borderRadius : 5,
    padding : 15,
    margin : 10,
  },
  calendarHeader : {
    alignSelf : "center",
    margin : 5,
    fontSize : 35,
    textAlign : "center",
    color : "#FFFFFFFF",
    fontWeight : 700,
  },
  daysView : {
    alignSelf : "center",
    flex : 0,
    flexDirection : 'row',
    borderRadius : 8,
    padding : 5,
    marginLeft : 5,
    marginRight : 5,
    marginTop : 5,
    marginBottom : 10,
    backgroundColor : "#FFFFFF59",
    color : "#000000FF",
  },
  dayName : {
    backgroundColor : "#884455FF",
    fontSize : 15,
    margin : 2,
    paddingTop : 3,
    paddingBottom : 3,
    paddingRight : 10,
    paddingLeft : 10,
    borderRadius : 8,
  },
  dayCell : {
    width : 45,
    backgroundColor : "#884455FF",
    fontSize : 15,
    margin : 2,
    padding : 10,
    borderRadius : 8,
  },
  buttonView : {
    width : "95%",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection : "row",
    backgroundColor : "#ff4d4dad",
    paddingLeft : 7,
    paddingRight : 7,
    paddingTop : 2,
    paddingBottom : 2,
    marginTop : 10,
    marginBottom : 2,
    alignSelf : "center",
    borderRadius : 8,
  },
  controlButtons : {
    fontSize : 12,
    textAlign : "center",
    margin : 5,
    padding : 8,
    borderRadius : 8,
    backgroundColor : "#884455FF",
  },
});

export default UserApp;
