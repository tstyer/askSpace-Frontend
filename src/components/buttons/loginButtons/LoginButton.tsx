import React from "react";
import { View, Pressable, Text } from 'react-native';
import { loginButtons } from './loginButtonStyles'; 

export function LoginButton() {
    return ( 
    <Pressable style={loginButtons.loginButton}>
        <Text style={loginButtons.text}>Login</Text>
    </Pressable> )
}