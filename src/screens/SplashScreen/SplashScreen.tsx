import { SafeAreaView } from'react-native-safe-area-context';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Styles from '../../assets/styles/GlobalStyles.js';

export default function SplashScreen() {
    return (
        <SafeAreaView style={styles.container}>
        
              <View style={styles.logo} />
              <Text style={styles.heading}>askSpace</Text>
              
              <View style={styles.footer}>
                <Text style={styles.footerText}>from</Text>
                <Text style={styles.footerBrand}>Onavi</Text>
              </View>
        
              <StatusBar style="auto" />
        
        </SafeAreaView>
    )
}