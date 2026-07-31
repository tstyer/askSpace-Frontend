import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, Pressable, ScrollView } from 'react-native';
import { styles } from '../DashboardScreen/styles'

export function Dashboard() {
    return(
        <SafeAreaView>
            <View>
                <Text>Screen renders</Text>
            </View>
        </SafeAreaView>
    );
};