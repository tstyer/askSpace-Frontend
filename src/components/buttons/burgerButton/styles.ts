import { StyleSheet } from "react-native";
import { colours } from '../../../constants/colours';
import { SafeAreaView } from "react-native-safe-area-context";

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
        backgroundColor: colours.brand.periwinkle
    },

    /* middleLineOuter: {

    },
    */

    middleLine: {
        width: 26,
        height: 5,
        marginBottom: 1.5,
        borderRadius: 25,
        backgroundColor: colours.brand.periwinkle
    },

    bottomLineOuter: {
        alignItems: 'flex-end', // pushes the item to the far right
    },

    bottomLine: {
        width: 16,
        height: 5,
        borderRadius: 25,
        backgroundColor: colours.brand.periwinkle
    }
});