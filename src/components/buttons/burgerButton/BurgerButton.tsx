import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from './styles';

export function BurgerButton() {

    <SafeAreaView style={styles.burgerOuter}>

        <view style={styles.topLineOuter}>
            <View style={styles.topLine} />
        </view>
        
        <view style={styles.bottomLineOuter}>
            <View style={styles.middleLine} />
        </view>

        <view style={styles.bottomLineOuter}>
            <View style={styles.bottomLine} />
        </view>
       
    </SafeAreaView>

};