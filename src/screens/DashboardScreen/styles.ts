import React from "react";
import { StyleSheet } from "react-native";
import { colours } from "../../constants/colours";
import { fonts } from "../../constants/fonts";

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colours.surface.cloud,
    },

    summaryBox: {
        flexDirection: 'row',
        width: 'auto',
        height: 'auto',
        justifyContent: 'space-between',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.6)',
    },

    onSiteText: {
        fontFamily: fonts.regular
    },

    capacityText: {
        fontFamily: fonts.regular
    },

    capacityFilledText: {
        fontFamily: fonts.regular
    },

    zoneSiteText: {
        fontFamily: fonts.regular
    },


})
