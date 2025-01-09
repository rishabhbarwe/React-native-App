import React from "react";
import Thanks from "./Thanks";
import SignUp from "./SignUp";
import Login from "./Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<RootStackParamList> ()

export type RootStackParamList = {
    Register: undefined; // No parameters
    Login: { username: string; password: string; name: string }; // Parameters expected
    "Thank you page": { name: string }; // Parameter expected
};
const Mainroute:React.FC= () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Register" component={SignUp}/>
                <Stack.Screen name="Login" component={Login}></Stack.Screen>
                <Stack.Screen name="Thank you page" component={Thanks} />
            </Stack.Navigator>
        </NavigationContainer>

    );
};

export default Mainroute