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
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

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

function ServiceContainer(props){
  return(
    <View
      style={styles.emploeeContainer}
    >
      <View
        style={styles.emploeeCell}
      >
        <View
          style={styles.headerContainer}
        >
          <Image
           source={{uri: 'https://reactjs.org/logo-og.png'}}
           style={{alignSelf : "center",width: 100, height: 100,borderRadius : 8,marginBottom : 5,marginTop : 5,}}
          />
          <Text
            style={styles.employeeHeader}
          >
            {props.employee.name}
          </Text>
        </View>
        <View
          style={styles.shopInfo}
        >
          <Text
            style={styles.shopInfoTextHeader}
          >
            {"Employee Info"}
          </Text>
          <Text
            style={styles.shopInfoText}
          >
            {"Services : "}
          </Text>
          <Text
            style={styles.shopInfoText}
          >
            {"Active Appointments : "}
          </Text>
          <Text
            style={styles.shopInfoTextHeader}
          >
            {"A note !"}
          </Text>
          <Text
            style={styles.shopInfoText}
          >
            {"The note \n ... \n ... \n ... \n..."}
          </Text>
        </View>
      </View>
      <ScrollView
        horizontal={true}
        style = {styles.buttonScrollView}
      >
        <TouchableOpacity
          style={styles.controlButtons}
          onPress={() => toCalendar()}
        >
          <Text>
            {"Employee Profile"}
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.controlButtons}
          onPress={() => toShop()}
        >
          <Text>
            {"Assign Service"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            "fontSize" : 12,
            "textAlign" : "center",
            "marginLeft" : 8,
            "marginTop" : 2,
            "marginBottom" : 2,
            "marginRight" : 8,
            "padding" : 8,
            "borderRadius" : 8,
            "backgroundColor" : "#FF4455FF",
          }}
        >
          <Text>
            {"Delete Employee"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

function ServiceSection(props){

  const [content , setContent] = useState(<ServiceContainer employee={{"name" : "Service Name"}} />);

  return (
    <View
      style={styles.employeeSectionView}
    >
      {content}
    </View>
  );

}

const styles = StyleSheet.create({
  shopView : {
    backgroundColor : '#ff4d4dad',
    borderRadius : 5,
    padding : 15,
    margin : 10,
  },
  shopHeader : {
    alignSelf : "center",
    margin : 5,
    fontSize : 35,
    textAlign : "center",
    color : "#FFFFFFFF",
    fontWeight : "700",
  },
  emploeeContainer : {
    flexDirection : "column",
    borderRadius : 8,
    backgroundColor : "#FFFFFF59",
    marginLeft : 5,
    marginRight : 5,
    marginTop : 5,
    marginBottom : 10,
  },
  emploeeCell : {
    flexDirection : "row",
    borderRadius : 8,
    marginLeft : 5,
    marginRight : 5,
    marginTop : 5,
  },
  headerContainer : {
    flex : 0,
    alignItems : "center",
    width : "45%",
    margin: 2,
  },
  employeeHeader : {
    fontSize : 17,
    textAlign : "center",
    fontWeight : "500",
    textAlign : "left",
    paddingLeft : 10,
    paddingTop : 3,
    paddingBottom : 3,
    margin : 3,
  },
  shopInfo : {
    flex:1,
    alignItems : "center",
  },
  shopInfoTextHeader : {
    textAlign : "center",
    margin : 3,
    color : "#000000FF",
    fontSize : 13,
    fontWeight : 700,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    paddingLeft : 10,
    paddingRight : 10,
  },
  shopInfoText : {
    textAlign : "center",
    margin : 3,
    color : "#000000FF",
    fontSize : 10,
    fontWeight : 700,
  },
  buttonScrollView : {
    width : "100%",
    backgroundColor : "#FFFFFF59",
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
    marginLeft : 8,
    marginTop : 2,
    marginBottom : 2,
    marginRight : 8,
    padding : 8,
    borderRadius : 8,
    backgroundColor : "#884455FF",
  },
});

export default ServiceSection;
