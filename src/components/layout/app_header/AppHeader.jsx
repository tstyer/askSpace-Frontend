import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, Pressable } from 'react-native';
import { Styles } from './styles';
import { BurgerButton } from "../../buttons/burgerButton/BurgerButton";

export function AppHeader() {
    return(
        <SafeAreaView>
 
        {/* left menu bars, middle logo, right initials/user */}
            <Pressable>
                
                <View>
                    <BurgerButton />
                </View>

                <View>


                </View>


                <View>

                </View>

            </Pressable>

            

        </SafeAreaView>
    );
};