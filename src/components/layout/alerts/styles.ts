import React from "react";
import { StyleSheet } from "react-native";
import { colours } from '../../../constants/colours';
import { fonts } from '../../../constants/fonts';

export const styles = StyleSheet.create({
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 16,
        marginTop: 16,
        marginBottom: 8,
    },

    sectionLabel: {
        fontFamily: fonts.semiBold,
        fontSize: 12,
        letterSpacing: 1,
        color: colours.text.primary,
    },

    activeCount: {
        fontFamily: fonts.regular,
        fontSize: 13,
        color: colours.text.primary,
    },

    card: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 12,
        padding: 16,
        borderRadius: 16,
        backgroundColor: '#FFFFFF',
        marginHorizontal: 16,
        marginBottom: 8,
    },

    icon: {
        width: 28,
        height: 28,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },

    iconWarning: {
        backgroundColor: '#F6D9CC',
    },

    iconTextWarning: {
        color: '#D9704F',
    },

    iconInfo: {
        backgroundColor: colours.periwinkle.light,
    },

    iconTextInfo: {
        color: colours.brand.periwinkle,
    },

    iconSuccess: {
        backgroundColor: colours.mint.light,
    },

    iconTextSuccess: {
        color: '#2F7A5D',
    },

    iconText: {
        fontFamily: fonts.semiBold,
        fontSize: 14,
    },

    body: {
        flex: 1,
        gap: 2,
    },

    title: {
        fontFamily: fonts.semiBold,
        fontSize: 15,
        color: colours.text.primary,
    },

    description: {
        fontFamily: fonts.regular,
        fontSize: 13,
        color: colours.text.primary,
    },

    time: {
        fontFamily: fonts.regular,
        fontSize: 12,
        color: colours.text.primary,
    },
});