import { Inter_300Light_Italic } from "@expo-google-fonts/inter";
import { StyleSheet } from "react-native";

export const loginButtons = StyleSheet.create({
    loginButton: {
        backgroundColor: '#2ec27e',
        borderRadius: 8,
        width: '100%',
        maxWidth: 240,
        alignItems: 'center',
    },

    signUpButton: {
        marginTop: 12,
        backgroundColor: '#2ec27e',
        borderRadius: 8,
        width: '100%',
        maxWidth: 240,
        alignItems: 'center',
    },

    text: {
        fontSize: 32,
        color: '#0E7490',
        fontFamily: 'Inter_400Regular',
        padding: 8,
    },
})