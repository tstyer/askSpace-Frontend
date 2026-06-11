import React, { useState } from "react";
import { View, Text, TextInput, Pressable, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from '../../components/loginComponents/Header';
import { Footer } from '../../components/loginComponents/Footer';

/* 
# login state will be written here first
# it will then be transferred over to be a separate hook
*/

const [ email, setEmail ] = useState("");


export function LoginFormScreen() {
    return(

        <SafeAreaView>
            <View>
                <Header />
            </View>

            <View>
                <TextInput 
                placeholder="Email"
                />
            </View>

            <View>
                <TextInput
                placeholder="Password"
                value={email}
                onChangeText={setEmail} // onChangeText means to update email when the user types in something new
                />
            </View>

            <Pressable>
                <Text>Forgot Password?</Text>
            </Pressable>

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