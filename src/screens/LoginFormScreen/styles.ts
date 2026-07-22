import React from "react";
import { StyleSheet } from "react-native";
import { colours } from "../../constants/colours";

export const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo: {
        height: 140,
        width: 140,
    },
    // Add emailBox and passwordBox together as inputBox - set as constant
    inputBox: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#F7F5F5',
        color: '#F8F9FC',
        backgroundColor: colours.brand.mint,
        shadowColor: '#A3ABF5',
        shadowOffset: {
        width: 0,
        height: 3,
        },
        // Android
        elevation: 5,

        // both
        shadowOpacity: 0.2,
        paddingVertical: 8,
        paddingHorizontal: 12
    },

    passwordBox: {
        marginTop: 6
    },

    loginBtn: {
        alignItems: 'center',
        width: 100,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#F7F5F5',
        color: '#F8F9FC',
        backgroundColor: colours.brand.mint,
        shadowColor: '#A3ABF5',
        marginTop: 16,

        shadowOffset: {
        width: 0,
        height: 3,
        
        },

        // Android
        elevation: 5,

        // both
        shadowOpacity: 0.2,
        paddingVertical: 8,
        paddingHorizontal: 12
    },

    loginBtnText: {
        color: '#22263A',
        fontFamily: 'Inter_600SemiBold',
    },

    pressable: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 24,
    },

    forgotPass: {
        color: colours.brand.periwinkle, 
        fontSize: 12,
        opacity: 20,  
    },

    primaryButton: {
        backgroundColor: colours.brand.periwinkle,
    },

    secondaryButton: {
        backgroundColor: colours.brand.mint,
    },

    text: {
        color: colours.text.primary,
    },
})