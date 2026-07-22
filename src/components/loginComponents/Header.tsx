import React from "react"
import { View, Text } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context'
import { GlobalStyles } from "../../styles/GlobalStyles";

export function Header() {
    return (
    <SafeAreaView style={GlobalStyles.screen}>
        <View style={styles.logo}></View>   
            <View>
                <Text style={styles.heading}>AskSpace</Text>
            </View> 
    </SafeAreaView>
    )};


