import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, Pressable, ScrollView } from 'react-native';
import { styles } from '../DashboardScreen/styles'
import { AppHeader } from '../../components/layout/app_header/AppHeader';

export function Dashboard() {
    return(
        <SafeAreaView>

            <View>
                <AppHeader />
            </View>
            
        </SafeAreaView>
    );
};