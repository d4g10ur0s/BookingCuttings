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

function ServiceForm(props){

  const nameInput = <TextInput style={styles.infoInput} placeholder={"Name"} placeholderTextColor={"#000"} onChangeText={(text) => usernameCheck(text)}/>;
  const durationInput = <TextInput style={styles.infoInput} placeholder={"Duration"} placeholderTextColor={"#000"} onChangeText={(text) => passwordCheck(text)}/>;
  const costInput = <TextInput style={styles.infoInput} placeholder={"Cost"} placeholderTextColor={"#000"} onChangeText={(text) => passwordCheck(text)}/>;

  return(
    <View
      style={styles.employeeForm}
    >
      <Text
        style={styles.employeeFormHeader}
      >
        {"New Service"}
      </Text>
      {nameInput}
      {durationInput}
      {costInput}
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => props.toSubmit()}
      >
        <Text>
          {"Submit"}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

function EmployeeForm(props){

  const nameInput = <TextInput style={styles.infoInput} placeholder={"Name"} placeholderTextColor={"#000"} onChangeText={(text) => usernameCheck(text)}/>;
  const surnameInput = <TextInput style={styles.infoInput} placeholder={"Surname"} placeholderTextColor={"#000"} onChangeText={(text) => passwordCheck(text)}/>;
  const emailInput = <TextInput style={styles.infoInput} placeholder={"Email"} placeholderTextColor={"#000"} onChangeText={(text) => passwordCheck(text)}/>;
  const phoneInput = <TextInput style={styles.infoInput} placeholder={"Phone Num."} placeholderTextColor={"#000"} onChangeText={(text) => passwordCheck(text)}/>;

  return(
    <View
      style={styles.employeeForm}
    >
      <Text
        style={styles.employeeFormHeader}
      >
        {"New Employee"}
      </Text>
      {nameInput}
      {surnameInput}
      {emailInput}
      {phoneInput}
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => props.toSubmit()}
      >
        <Text>
          {"Submit"}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

function EmployeeContainer(props){
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

function EmployeeSection(props){

  const [content , setContent] = useState(<EmployeeContainer employee={{"name" : "Name Surname"}} />);

  return (
    <View
      style={styles.employeeSectionView}
    >
      {content}
    </View>
  );

}

function AddForm(props): JSX.Element {

  return (
    <TouchableOpacity
      style={styles.controlButtons}
      onPress={() => props.toForm()}
    >
      <Text>
        {props.text}
      </Text>
    </TouchableOpacity>
  );

}

function ShopSection(): JSX.Element {

  const [content , setContent] = useState(<EmployeeSection />);
  const [employeeForm , setEmployeeForm] = useState(null);
  const [shopname , setShopname] = useState("Shopname");
  const [addForm, setAddForm] = useState(<AddForm text={"Add Employee"} toForm={toEmployeeForm}/>);
  const [formExistence, setFormExistence] = useState(false);

  function toShop(){
    setContent(<EmployeeSection />);
    setAddForm(<AddForm text={"Add Employee"} toForm={toEmployeeForm}/>);
    setEmployeeForm(null);
    setFormExistence(false);
  }

  useEffect(() => {
    setFormExistence(!formExistence);
    console.log(formExistence);
  })

  function toEmployeeForm(){
    if(!formExistence){
      setEmployeeForm(<EmployeeForm />);
    }else{
      setEmployeeForm(null);
    }
  }
  function toServiceForm(){
    if(!formExistence){
      setEmployeeForm(<ServiceForm />);
    }else{
      setEmployeeForm(null);
    }
    setFormExistence(!formExistence);
  }

  function toServices(){
    setContent(null);
    setAddForm(<AddForm text={"Add Service"} toForm={toServiceForm}/>);
    setFormExistence(false);
    setEmployeeForm(null);
  }

  function toClients(){
    setContent(null);
  }

  return (
    <View
      style={styles.shopView}
    >
      <Text
        style={styles.shopHeader}
      >
        {shopname}
      </Text>
      <ScrollView
        horizontal={true}
        style = {styles.buttonScrollView}
      >
        {addForm}
        <TouchableOpacity
          style={styles.controlButtons}
          onPress={() => toShop()}
        >
          <Text>
            {"Show Employees"}
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.controlButtons}
          onPress={() => toServices()}
        >
          <Text>
            {"Show Services"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.controlButtons}
          onPress={() => toClients()}
        >
          <Text>
            {"Show Clients"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
      {employeeForm}
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
  employeeForm : {
    alignItems : "center",
    borderRadius : 8,
    backgroundColor : "#FFFFFF59",
    marginLeft : 5,
    marginRight : 5,
    marginTop : 5,
    marginBottom : 10,
    paddingBottom : 5,
  },
  employeeFormHeader : {
    fontSize : 20,
    textAlign : "center",
    fontWeight : "500",
    textAlign : "left",
    paddingLeft : 10,
    paddingTop : 3,
    paddingBottom : 3,
    margin : 3,
  },
  infoInput : {
    width : 150,
    color : "#000000FF",
    backgroundColor : "#FFFFFF59",
    paddingTop : 5,
    paddingBottom : 5,
    paddingRight : 5,
    paddingLeft : 10,
    margin : 2,
    borderRadius : 8,
  },
  submitButton : {
    fontSize : 10,
    textAlign : "center",
    marginLeft : 8,
    marginTop : 2,
    marginBottom : 2,
    marginRight : 8,
    padding : 8,
    borderRadius : 8,
    backgroundColor : "#554488FF",
  },
});

export default ShopSection;
