import React from "react";
import { View, Text } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from '../../components/loginComponents/Header';


export function LoginFormScreen() {
    return(

        <SafeAreaView>
            <View>
                <Header />
            </View>
        </SafeAreaView>

    )
}