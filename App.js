import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,KeyboardAvoidingView,Button} from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      name: '',
      email: '',
      password: ''
    }
  }

  userRegister =() =>{
        const {name} = this.state;
        const {email} = this.state;
        const {password} = this.state;


        fetch('http://192.168.1.101:3000/user',{
          method: 'post',
          headers: {
            'Accept' : 'application/json',
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({
          name: name,
          email: email,
          password: password
        })
        
        })
        .then((response)=>response.json())
        .then((responseJson)=>{
          alert(responseJson.data);



        })
        .catch((error)=>{
          console.error(error);

        })



    
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>

   
      <View style={styles.container}>

      <TextInput style={styles.textInput} placeholder="name"
       onChangeText = { name => this.setState({name})} />
      <TextInput  style={styles.textInput} placeholder="email"
       onChangeText = { email => this.setState({email})} />
      <TextInput  style={styles.textInput} placeholder="password" secureTextEntry={true}
       onChangeText = { password => this.setState({password})} />
     
      <Button onPress={this.userRegister} title="Sign Up" style={styles.btn}/>



      </View>
      </KeyboardAvoidingView>
   
          
    );
  }  

}

const styles = StyleSheet.create({
  wrapper: {
    flex:1,
},
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : '#2896d3',
    paddingLeft: 40,
    paddingRight: 40
  },

  textInput:{
    alignSelf: 'stretch',
    padding: 16,
    marginBottom: 20,
    backgroundColor: '#fff'

},
btn: {
  alignSelf: 'stretch',
  backgroundColor: '#01c853',
  padding: 20,
  alignItems: 'center'

}
});
