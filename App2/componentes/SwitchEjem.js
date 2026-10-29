import { View,Text,Switch,StyleSheet } from "react-native";
export default function SwitchEjem({oscuro,CambiarModo}){
    return(
        <View>
            <Text style={[StyleSheet.titulo,{color:oscuro?'#ffff':'#00000'}]}>Modo Oscuro</Text>
            <Switch value={oscuro}onValueChange={CambiarModo}>
            </Switch>
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
     flex: 1,
    backgroundColor: '#3c7586',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo:{
    fontSize:18,
    fontWeight:'bold',
    marginBottom:8,
  },
});
