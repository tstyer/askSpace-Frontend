import { SafeAreaView } from'react-native-safe-area-context';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GlobalStyles } from '../../styles/GlobalStyles';
import { styles } from './styles';

export default function SplashScreen() {
    return (
        <SafeAreaView style={GlobalStyles.screen}>

            <View style={styles.logo}></View>
        
            <View>
                <Text style={styles.heading}>askSpace</Text>
            </View>
              
            <View style={styles.footer}>
                <Text style={styles.footerText}>from</Text>
                <Text style={styles.footerBrand}>Onavi</Text>
            </View>
        
              <StatusBar style="auto" />
        
        </SafeAreaView>
    )
}