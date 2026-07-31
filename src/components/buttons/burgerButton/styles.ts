import { BorderRadius } from './../../../../node_modules/lightningcss/node/ast.d';
import { StyleSheet } from "react-native";
import { colours } from '../../../constants/colours';

export const styles = StyleSheet.create({
    burgerOuter: {
        flexDirection: 'column'
    },

    topLineOuter: {
        justifyContent: 'flex-start',
    },

    topLine: {
        width: 5,
        height: 1,
        marginBottom: 1.5,
        borderRadius: 25,
        backgroundColor: colours.brand.periwinkle
    },

    /* middleLineOuter: {

    },
    */
   
    middleLine: {
        width: 10,
        height: 1,
        marginBottom: 1.5,
        borderRadius: 25,
        backgroundColor: colours.brand.periwinkle
    },

    bottomLineOuter: {
        justifyContent: 'flex-end', // pushes the item to the far right
    },

    bottomLine: {
        width: 5,
        height: 1,
        marginTop: 1.5,
        borderRadius: 25,
        backgroundColor: colours.brand.periwinkle
    }
});