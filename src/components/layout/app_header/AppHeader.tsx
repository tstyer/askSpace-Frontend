import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, Pressable, Image } from 'react-native';
import { styles } from './styles';
import { BurgerButton } from "../../buttons/burgerButton/BurgerButton";
import { UserButton } from "../../buttons/userButton/UserButton";

export function AppHeader() {
    return(
        <SafeAreaView style={styles.screen}>
 
            {/* left burger */}
            <Pressable>
                
                <View>
                    <BurgerButton />
                </View>

            </Pressable>

            {/* middle logo */}
                <View>
                    <Image source={require('../../../assets/images/askspace_logo_transparent.png')} style={styles.logo}>

                    </Image>

                </View>

            {/* right end user */}
             <Pressable>
                <View>
                    {/* Will change depending on who's signed in in future */}
                    <UserButton initials="TS" /> 
                </View>
            </Pressable>

        </SafeAreaView>
    );
};