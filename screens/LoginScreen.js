import * as React from 'react';
import {Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import firebase from 'firebase'

export default class LoginScreen extends React.Component{
   constructor(){
    super();
    this.state={
      emailid: '',
      password: ''
    }
  }
  
   login=async(email, password)=>{
    const response = await firebase.auth().signInWithEmailAndPassword(email,password);
    if(response){
      this.props.navigation.navigate('Write A Story')
    }else{
      Alert.alert('Enter Email And Password')
    }
  }
  
  render(){
    return(
      <View style={styles.container}>
      <Image
                source={require("../assets/BedTimeStories.jpg")}
                style={{width:400, height: 150}}/>
                <View>
                <TextInput 
              style={styles.inputBox}
              placeholder="abc@example.com"
              onChangeText={
                (text)=>{
                  this.setState({
                    emailid: text
                  })
                }
                
              }
              keyboardType='email-address'
              />

              <TextInput
              style={styles.inputBox}
              placeholder="Password"
              onChangeText={
                (text)=>{
                  this.setState({
                    password:text
                  })
                }
              }
              secureTextEntry = {true}
              />
</View>
<View>
<TouchableOpacity style={{height: 30, width: 100, borderWidth: 1,marginTop: 20, paddingTop: 5, borderRadius: 10, backgroundColor: '#FBC02D'}} onPress={()=>{
  this.login(this.state.emailid, this.state.password);

}}>
<Text style = {{textAlign: "center", fontWeight: "bold", color: "white"}}>Login</Text>

</TouchableOpacity>

</View>

      </View>
    )
  }
}
const styles = StyleSheet.create({
   container: {
      
      alignItems: 'center'
    },
    inputBox:{
      width: 300,
      height: 40,
      borderWidth: 1.5,
      margin: 10,
      paddingLeft: 10,
      fontSize: 20
    },
})