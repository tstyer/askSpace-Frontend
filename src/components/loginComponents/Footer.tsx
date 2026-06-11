import React from "react"
import { View, Text } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context'
import { GlobalStyles } from "../../styles/GlobalStyles";

export function Footer() {
    return (
    <SafeAreaView style={GlobalStyles.screen}>
        <View style={styles.footer}>
            <Text style={styles.footerText}>by</Text>
            <Text style={styles.footerBrand}>Onavi</Text>
        </View> 
    </SafeAreaView>
    )};