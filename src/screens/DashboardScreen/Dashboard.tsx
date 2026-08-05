import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, Pressable, ScrollView } from 'react-native';
import { styles } from '../DashboardScreen/styles'
import { AppHeader } from '../../components/layout/app_header/AppHeader';
import { AccessibilityRole } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { colours } from '../../constants/colours';
import { AlertsSection } from '../../components/layout/alerts/AlertsSection';

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
                style={styles.gradientBox} >

                <View style={styles.summaryBox}>
                    <View>
                        <Text style={styles.onSiteText}>ON SITE NOW</Text>
                        {/* below number will be a hook that updates */}
                        <Text style={styles.number}>999</Text>
                        <Text style={styles.capacityText}>{/* Hook that calls real-time data */} Out Of X Capacity.</Text>
                    </View>

                    <View style={styles.rightColumn}>
                        <Text style={styles.capacityFilledText}>X% Capacity Filled.</Text>
                        <Text style={styles.zoneSiteText}># Zone. # Sites.</Text>
                    </View>
                </View>

                <View>
                    <AlertsSection />
                </View>


            </LinearGradient>

        </SafeAreaView>
    );
};