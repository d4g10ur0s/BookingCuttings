/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

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

import UserApp from "./UserApp.tsx"

function ErrorInput(props){
  return (
    <Text
      style={styles.usernameError}
    >
      {props.msg}
    </Text>
  );
}

function LogInForm(props) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState();

  const usernameCheck = (username) => {
    if( username.length < 5){setUsernameError(<ErrorInput msg = {"Username must be over 5 characters long."} />);}
    else{setUsernameError(null);}
    setUsername(username);
  };

  const passwordCheck = (password) => {
    if( password.length < 5){//prepei na ftiaksw ke to regex
      console.log("Error");
    }
    setPassword(password);
  };
  const usernameInput = <TextInput style={styles.logInput} placeholder={"Username"} onChangeText={(text) => usernameCheck(text)}/>;
  const passwordInput = <TextInput style={styles.logInput} placeholder={"Password"} onChangeText={(text) => passwordCheck(text)}/>;

  return (
    <View
     style={styles.logView}
    >
      <View>
        <Text
         style={styles.welcomeHeader}
        >
          {"Welcome"}
        </Text>
      </View>
      <View
       style={styles.logForm}
      >
        <Text
         style={styles.welcomeHeader}
        >
          {"Log In"}
        </Text>
        {usernameInput}
        {usernameError}
        {passwordInput}
        <View
        style={styles.buttonView}
        >
          <TouchableOpacity
           style = {styles.logButton}
           onPress = {() => props.logCallback()}
          >
            <Text>
              {"Log In"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
           style = {styles.signButton}
          >
            <Text>
              {"Sign Up"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

}

function App(): JSX.Element {

  const [content , setContent] = useState(<LogInForm logCallback={logIn}/>);
  function logIn(){
    setContent(<UserApp />);
  }

  return (
    <ScrollView
    contentInsetAdjustmentBehavior="automatic"
    >
      {content}
    </ScrollView>
    );
}

const styles = StyleSheet.create({
  logView : {
    flex : 1,
    alignSelf : "center",
    padding : 5,
  },
  welcomeHeader : {
    textAlign : "center",
    fontSize : 35,
    fontWeight : 700,
    margin : 15,
    color : "#FFFFFFFF",
  },
  logForm : {
    width : 300,
    backgroundColor : '#ff4d4dad',
    borderRadius : 5,
    padding : 15,
  },
  logInput : {
    borderRadius : 8,
    padding : 10 ,
    fontSize : 15,
    marginLeft : 15,
    marginRight : 15,
    marginTop : 5,
    marginBottom : 10,
    backgroundColor : "#FFFFFF59",
    color : "#000000FF",
  },
  logButton : {
    alignSelf : "center",
    backgroundColor : "#5544FFFF",
    margin : 5,
    paddingRight : 15,
    paddingLeft : 15,
    paddingTop : 5,
    paddingBottom : 5,
    borderRadius : 8,
  },
  signButton : {
    alignSelf : "center",
    backgroundColor : "#e65c00FF",
    margin : 5,
    paddingRight : 15,
    paddingLeft : 15,
    paddingTop : 5,
    paddingBottom : 5,
    borderRadius : 8,
  },
  buttonView : {
    margin : 15,
    alignSelf : "center",
    flex : 1,
    flexDirection : "row",
  },
  usernameError : {
    fontSize : 10,
    textAlign : "left",
    marginTop : 1,
    marginBottom : 5,
    paddingLeft : 15,
    color : "#FF5555FF",
  },
});

export default App;
