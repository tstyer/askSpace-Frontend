import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from './styles';

export function BurgerButton() {

    return(
    <SafeAreaView style={styles.safeAreaView}>

        <View style={styles.topLineOuter}>
            <View style={styles.topLine} />
        </View>
        
        <View>
            <View style={styles.middleLine} />
        </View>

        <View style={styles.bottomLineOuter}>
            <View style={styles.bottomLine} />
        </View>
       
    </SafeAreaView>
    );
};