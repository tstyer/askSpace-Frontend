import { StyleSheet } from "react-native";
import { colours } from '../../../constants/colours';

export const styles = StyleSheet.create({
    
    topLineOuter: {
        alignItems: 'flex-start',
    },

    topLine: {
        width: 5,
        height: 3,
        marginBottom: 1.5,
        borderRadius: 25,
        backgroundColor: colours.brand.periwinkle
    },

    /* middleLineOuter: {

    },
    */

    middleLine: {
        width: 10,
        height: 3,
        marginBottom: 1.5,
        borderRadius: 25,
        backgroundColor: colours.brand.periwinkle
    },

    bottomLineOuter: {
        alignItems: 'flex-end', // pushes the item to the far right
    },

    bottomLine: {
        width: 5,
        height: 3,
        marginTop: 1.5,
        borderRadius: 25,
        backgroundColor: colours.brand.periwinkle
    }
});