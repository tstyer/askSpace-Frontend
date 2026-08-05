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
        borderWidth: 0.5,
        borderColor: '#B6AAF5',
        marginHorizontal: 8,
        shadowColor: '#8E98F6',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.50,
        shadowRadius: 10,
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
        color: colours.text.primary,
        fontFamily: fonts.semiBold,
        fontSize: 13,
    },

    number: {
        fontFamily: fonts.bold,
        fontSize: 32,
        color: '#000'
    },

    capacityText: {
        fontFamily: fonts.regular,
        fontSize: 12,
        color: colours.text.primary
    },

    rightColumn: {
        justifyContent: 'space-between',
    },

    capacityFilledText: {
        fontFamily: fonts.regular,
        fontSize: 12,
        color: colours.text.primary
    },

    zoneSiteText: {
        fontFamily: fonts.regular,
        fontSize: 12,
        color: colours.text.primary,
    },


})
