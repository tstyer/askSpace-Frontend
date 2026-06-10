import { GlobalStyles } from '../../styles/GlobalStyles';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar';
import { LoginButton } from '../../components/buttons/loginButtons/LoginButton';
import { SignUpButton } from '../../components/buttons/loginButtons/SignUpButton';
import { Header } from '../../components/loginComponents/Header';
import { Footer } from '../../components/loginComponents/Footer';
 

export default function LoginScreen() {
    console.log('LoginScreen rendered');
    return (
    <SafeAreaView style={GlobalStyles.screen}>
        <View>
            <Header />
        </View>
                    <View style={styles.buttonContainer}>
                        <LoginButton />
                        <SignUpButton />
                    </View>
        <View>
            <Footer />
        </View>            
        
        <StatusBar style="auto" />
    </SafeAreaView>
    )
};