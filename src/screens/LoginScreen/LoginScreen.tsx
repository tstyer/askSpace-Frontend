import { GlobalStyles } from '../../styles/GlobalStyles';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar';


export default function LoginScreen() {
    console.log('LoginScreen rendered');
    return (
    <SafeAreaView style={GlobalStyles.screen}>
        <View style={styles.logo}></View>
                
                    <View>
                        <Text style={styles.heading}>askSpace</Text>
                    </View>

                    <View /* view for the main button area */>
                        <Button title="Log In" style={styles.button}></Button>
                        <Button title="Sign Up"></Button>
                    </View>
                      
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>from</Text>
                        <Text style={styles.footerBrand}>Onavi</Text>
                    </View>
                
                      <StatusBar style="auto" />
    </SafeAreaView>
    )    
}