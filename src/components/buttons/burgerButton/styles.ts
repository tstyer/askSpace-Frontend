import { StyleSheet } from "react-native";
import { colours } from '../../../constants/colours';


export const styles = StyleSheet.create({

    safeAreaView: {
        margin: 8,
    },
    
    topLineOuter: {
        alignItems: 'flex-start',
    },

    topLine: {
        width: 16,
        height: 5,
        marginBottom: 1.5,
        borderRadius: 25,
        backgroundColor: colours.mint.main,
        shadowColor: '#8E98F6',
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 3,
        shadowOpacity: 0.3,
        borderColor: colours.border.third,
        borderWidth: 0.05,
    },

    /* middleLineOuter: {

    },
    */

    secondLine: {
        width: 26,
        height: 5,
        marginBottom: 1.5,
        borderRadius: 25,
        backgroundColor: colours.mint.main,
        shadowColor: '#8E98F6',
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 3,
        shadowOpacity: 0.3,
        borderColor: colours.border.third,
        borderWidth: 0.05,
    },

    thirdLine: {
        width: 40,
        height: 5,
        marginBottom: 1.5,
        borderRadius: 25,
        backgroundColor: colours.mint.main,
        shadowColor: '#8E98F6',
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 3,
        shadowOpacity: 0.3,
        borderColor: colours.border.third,
        borderWidth: 0.05,
    },

});