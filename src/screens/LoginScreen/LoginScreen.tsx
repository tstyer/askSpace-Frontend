import { GlobalStyles } from '../../styles/GlobalStyles';
import { View, Text, Button, Pressable } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar';
import { loginButton, signUpButton } from '../../components/buttons/loginButtons/loginButtonStyles'


export default function LoginScreen() {
    console.log('LoginScreen rendered');
    return (
    <SafeAreaView style={GlobalStyles.screen}>
        <View style={styles.logo}></View>
                
                    <View>
                        <Text style={styles.heading}>askSpace</Text>
                    </View>

                    <View /* view for the main button area */>
                        <Pressable loginButton></Pressable>
                        <Pressable signUpButton></Pressable>
                    </View>
                      
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>from</Text>
                        <Text style={styles.footerBrand}>Onavi</Text>
                    </View>
                
                      <StatusBar style="auto" />
    </SafeAreaView>
    )    
}