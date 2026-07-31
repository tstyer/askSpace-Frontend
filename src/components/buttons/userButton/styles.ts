import { StyleSheet } from "react-native";
import { colours } from '../../../constants/colours';
import { fonts } from '../../../constants/fonts';

export const styles = StyleSheet.create({
    circle: {
        width: 30,
        height: 30,
        borderRadius: 20,
        backgroundColor: colours.brand.periwinkle,
        alignItems: 'center',
        justifyContent: 'center',
    },

    initials: {
        color: '#313d5d',
        fontFamily: fonts.semiBold,
        fontSize: 14,
    },
});