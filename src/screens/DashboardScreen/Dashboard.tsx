import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, Pressable, ScrollView } from 'react-native';
import { styles } from '../DashboardScreen/styles'
import { AppHeader } from '../../components/layout/app_header/AppHeader';
import { AccessibilityRole } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { colours } from '../../constants/colours';

export function Dashboard() {
    return(
        <SafeAreaView>

            <View>
                <AppHeader />
            </View>

            <LinearGradient
                testID='Summary Box'
                colors={[colours.mint.light, colours.periwinkle.light]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.summaryBox} >

                <View>
                    <Text style={styles.onSiteText}>On Site Now:</Text>
                    <Text style={styles.capacityText}>{/* Hook that calls real-time data */} Out Of X Capacity.</Text>
                </View>

                <View>
                    <Text style={styles.capacityFilledText}>X% Capacity Filled.</Text>
                    <Text style={styles.zoneSiteText}># Zone. # Sites.</Text>
                </View>


            </LinearGradient>

        </SafeAreaView>
    );
};