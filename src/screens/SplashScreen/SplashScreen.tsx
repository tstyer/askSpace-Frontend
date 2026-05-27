import { SafeAreaView } from'react-native-safe-area-context';
import { StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GlobalStyles } from '../../styles/GlobalStyles';
import { styles } from './SplashScreen';

export default function SplashScreen() {
    return (
        <SafeAreaView style={GlobalStyles.Screen}>
        
            <View>
                <Text style={GlobalStyles.Header}>askSpace</Text>
            </View>
              
            <View style={styles.footer}>
                <Text style={styles.footerText}>from</Text>
                <Text style={styles.footerBrand}>Onavi</Text>
            </View>
        
              <StatusBar style="auto" />
        
        </SafeAreaView>
    )
}