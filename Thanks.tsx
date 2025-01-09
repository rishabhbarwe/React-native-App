import React from "react"
import { View,Text,StyleSheet } from "react-native"
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "./Mainroute";

// type thanskType = {
//     route : {
//         params : {
//             name : string
//         }
//     }
// }

type thanksType = NativeStackScreenProps<RootStackParamList,"Thank you page">

const Thanks:React.FC<thanksType> = ( {route} )=>{
     return(
        <View style={styles.outer}>
            <Text style={styles.text}>
                {route.params.name} thank you for connecting!!!...
            </Text>

        </View>
     )
}

const styles = StyleSheet.create({
    outer : {
        marginTop : 100,
        alignItems : 'center',
        textAlign : 'center'
    },
    text : {
        fontSize : 22,
        fontWeight : '700',
        color : 'red'
    }
})

export default Thanks