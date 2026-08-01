import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, Pressable, ScrollView } from 'react-native';
import { styles } from '../DashboardScreen/styles'
import { AppHeader } from '../../components/layout/app_header/AppHeader';
import { AccessibilityRole } from 'react-native';

export function Dashboard() {
    return(
        <SafeAreaView>

            <View>
                <AppHeader />
            </View>

            <View>
                
                <View>
                    <Text>On Site Now:</Text>
                    <Text>{/* Hook that calls real-time data */} Out Of X Capacity.</Text>
                </View>

                <View>
                    <Text>X% Capacity Filled.</Text>
                    <Text># Zone. # Sites.</Text>
                </View>
                

            </View>
            
        </SafeAreaView>
    );
};