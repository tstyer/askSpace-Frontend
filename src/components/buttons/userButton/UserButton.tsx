import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

type UserButtonProps = {
    initials: string;
};

export function UserButton({ initials }: UserButtonProps) {
    return (
        <View style={styles.circle}>
            <Text style={styles.initials}>{initials}</Text>
        </View>
    );
};