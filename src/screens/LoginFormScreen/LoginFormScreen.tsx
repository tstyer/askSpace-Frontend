import React, { useState } from "react";
import { View, Text, TextInput, Pressable, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from '../../components/loginComponents/Header';
import { Footer } from '../../components/loginComponents/Footer';
import { GlobalStyles } from "../../styles/GlobalStyles";

/* 
# login state will be written here first
# it will then be transferred over to be a separate hook
*/




export function LoginFormScreen() {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    return(

        <SafeAreaView style={GlobalStyles.screen}>
            <View>
                <Header />
            </View>

            <View style={styles.formContainer}>

                <View>
                    <TextInput 
                    style={[styles.emailBox, GlobalStyles.regularFont]}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    />
                </View>

                <View>
                    <TextInput 
                    style={[styles.passwordBox, GlobalStyles.regularFont]}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword} // onChangeText means to update email when the user types in something new
                    secureTextEntry
                    />
                </View>

                <Pressable style={styles.pressable}>
                    <Text style={styles.forgotPass}>Forgot Password?</Text>
                </Pressable>

            </View>
           

            <View>
                <Footer />
            </View>
        </SafeAreaView>

    )
}


/* 
value={email} - this is the use state initial value of ""
when a user type, is is entered into onChangeText... 
whatever value is then entered into onChangeText then subsequently updates value={email}
*/