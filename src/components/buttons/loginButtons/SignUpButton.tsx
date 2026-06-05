import React from "react";
import { loginButtons } from './loginButtonStyles';
import { Pressable, Text } from "react-native";

export function SignUpButton() {
    return ( 
        <Pressable style={loginButtons.signUpButton}>
            <Text style={loginButtons.text}>Sign Up</Text>
        </Pressable> )
};