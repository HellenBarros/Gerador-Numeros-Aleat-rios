import React, {useState} from 'react';
import{ SafeAreaView, 
        TouchableOpacity,
        StyleSheet,
        Text} from 'react-native';
//safeareaview local seguro para aparecer componentes na tela
const App = () =>{

  const [numero, setNumero] = useState('0');

  function handleNumero(){
    const novo_numero = Math.floor(Math.random() * 10);
    setNumero(novo_numero)
  }

  return(
    <SafeAreaView style={style.container}>
      <Text style={style.numero}>{numero}</Text>
      <TouchableOpacity onPress={handleNumero}  style={style.botao}>
        <Text>Gerar Número</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex:1, //Tela toda
    justifyContent:'center',
    alignItems:'center',
  },
  numero:{
    fontSize: 38,
    color:'white',
    fontWeight: 'bold',
  },
  botao:{
    backgroundColor:'white',
    width:'80%', //tamanho da linha branca
    paddingHorizontal: 5,
    paddingVertical: 10, //largura da linha
    borderRadius: 5, //bordas arredondadas 
    justifyContent: 'center',
    alignItems:'center',
    marginTop:10, //afastar do numeo
  },
});
export default App;