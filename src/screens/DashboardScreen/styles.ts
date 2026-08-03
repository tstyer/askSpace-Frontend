import React from "react";
import { StyleSheet } from "react-native";
import { colours } from "../../constants/colours";
import { fonts } from "../../constants/fonts";

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colours.surface.cloud,
    },

    gradientBox: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.6)',
        marginHorizontal: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 5,
    },

    summaryBox: {
        flexDirection: 'row',
        width: 'auto',
        height: 'auto',
        justifyContent: 'space-between',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 20,
        
    },

    onSiteText: {
        fontFamily: fonts.semiBold,
        fontSize: 13,
    },

    capacityText: {
        fontFamily: fonts.regular,
        fontSize: 16,
    },

    capacityFilledText: {
        fontFamily: fonts.regular,
        fontSize: 13,
    },

    zoneSiteText: {
        fontFamily: fonts.regular,
        fontSize: 13,
    },


})
