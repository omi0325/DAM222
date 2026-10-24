/*Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Text,Button} from 'react-native';
import { useState } from 'react';
import Tarjetas from './Tarjetas';
import SafeScreen from './SafeScreen';
import PressableScreen from './PressableScreen';
import AlertScreen from './AlertScreen';
import FlatListScreen from './FlatListScreen';
import ImageScreen from './ImageScreen';
import ModalScreen from './ModalScreen';
import ActivityScreen from './ActivityScreen';
/* Zona main */
export default function MenuScreen() {
    const[screen,setScreen]=useState('menu');
    switch(screen){
        case 'tarjetas':
            return <Tarjetas/>
        case 'safescreen':
            return <SafeScreen/>
        case 'PressableScreen':
            return <PressableScreen/>
        case 'AlertScreen':
            return <AlertScreen/>
        case 'FlatListScreen':
            return <FlatListScreen />
            case 'ImageScreen':
                return <ImageScreen/>
            case 'ModalScreen':
                return <ModalScreen/>
        case 'ActivityScreen':
            return <ActivityScreen/>
        case 'menu':
            default:
            return (
                <View style={styles.container}>
                <Text>Menu de Practicas</Text>
                <Button title='Tarjetas' onPress={()=>setScreen('tarjetas')}></Button>
                <Button title='SafeAreaView' onPress={()=>setScreen('safescreen')}></Button>
                <Button title='PressableScreen' onPress={()=>setScreen('PressableScreen')}></Button>
                <Button title='AlertScreen' onPress={()=>setScreen('AlertScreen')}></Button>
                <Button title='FlatListScreen' onPress={()=>setScreen('FlatListScreen')}></Button>
                <Button title='ImageScreen' onPress={()=>setScreen('ImageScreen')}></Button>
                <Button title='ModalScreen' onPress={()=>setScreen('ModalScreen')}></Button>
                <Button title='ActivityScreen' onPress={()=>setScreen('ActivityScreen')}></Button>
                <StatusBar style="auto" />
                </View>
            );
    }
}
/* Zona de estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
     flex: 1,
    backgroundColor: '#3c7586',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
