import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions,} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage ,Button} from 'react-native-elements'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
var width = Dimensions.get('window').width;
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type:null,
                titre:null,
    num_portions :null,
    etape:null,
    temps:null,
    incredients:null


};}


        render() {
    return (
      <View style={styles.container}>

          <TextInput  placeholder="titre"
                      underlineColorAndroid={'transparent'}//去掉下划线
                      style={styles.username}
              //将文本写入state
                      onChangeText={(titre) => this.setState({
                          titre:titre
                          })


                      }
              />
          <TextInput  placeholder="num_portions"
                      underlineColorAndroid={'transparent'}
                      style={styles.username}
                      onChangeText={(num_portions) => this.setState({
                              num_portions:num_portions
                          })


                      }

          />

          <TextInput  placeholder="etape"
                      underlineColorAndroid={'transparent'}
                      style={styles.username}
                      onChangeText={(etape) => this.setState({
                              etape:etape
                          })


                      }

          />

          <TextInput  placeholder="temps"
                      underlineColorAndroid={'transparent'}
                      style={styles.username}
                      onChangeText={(temps) => this.setState({
                              temps:temps
                          })


                      }

          />
          <TextInput  placeholder="incredients"
                      underlineColorAndroid={'transparent'}
                      style={styles.username}
                      onChangeText={(incredients) => this.setState({
                              incredients:incredients
                          })
                      }

          />


          //将文本写入state
                      onChangeText={(user_text) => this.setState({test:user_text})}
          />
          {/*<TextInput  placeholder="密码"*/}
                      {/*secureTextEntry={true}//隐藏输入内容*/}
                      {/*underlineColorAndroid={'transparent'}*/}
                      {/*style={LoginStyles.username}*/}
                      {/*onChangeText={(pass_text) => this.setState({pass_text})}/>*/}
          <RadioForm
              radio_props={  [{label: 'petit-déjeuner', value: 'petit-déjeuner' },
                  {label: 'entrée', value: 'entrée' },{label: 'plat', value: 'plat' },
                  {label: 'collation', value: 'collation' },{label: 'dessert', value:'dessert'}
              ]}
              initial={0}
              onPress={(value) => {this.setState({type:value})}}
          />
          <Button
              title='BUTTON' onPress={




                  this.f.bind(this,this.state.recette)

          } />


      </View>


    );
  }

f() {
    var recette={
        type:this.state.type,
        titre:this.state.titre,
        num_portions :this.state.num_portions,
        etape:this.state.etape,
        temps:this.state.temps,
        incredients:this.state.incredients
    }

    fetch('http://192.168.1.63:8080', {
        method: 'POST',
        body: JSON.stringify({recette:recette}), // must match 'Content-Type' header

        headers: {
            'content-type': 'application/json'
        },
    }).then(function(response) {
        response.json().then(function(data){
            console.log(data);
        });
    }).catch(function(e) {
        console.log("Oops, error");
    });
}


}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    username: {
      height:60,
        width:width-64,//居中，宽度为屏幕宽度-32，这样左右都有16的边距
        borderRadius: 40,//输入框边界圆角度数
        borderColor: 'skyblue',//输入框边界颜色
        marginBottom:16,
        paddingLeft:10,//这里是为了在圆角之后输入
        padding:0,//去掉Android默认的padding
        borderWidth: 1,
        alignSelf:'center'//自身居中
    },

});
