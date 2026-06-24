import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    // Add emailBox and passwordBox together as inputBox - set as constant
    emailBox: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.85)',
        color: '#F8F9FC',
        backgroundColor: '#14B8A6',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.2,
        paddingVertical: 8,
        paddingHorizontal: 12
    },
    passwordBox: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.85)',
        color: '#F8F9FC',
        backgroundColor: '#14B8A6',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        // Android
        elevation: 5,
        shadowOpacity: 0.2,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginTop: 6
    },
    pressable: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 12,
    },
    forgotPass: {
        color: '#5B5BD6',   
       

    }
})