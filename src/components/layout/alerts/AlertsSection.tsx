import React from "react";
import { View, Text } from 'react-native';
import { styles } from './styles';

const alerts = [
    {
        id: '1',
        type: 'warning' as const,
        icon: '!',
        title: 'Over capacity',
        description: 'Foundry Works · Assembly Hall 121 / 100',
        timeAgo: '2m',
    },
    {
        id: '2',
        type: 'info' as const,
        icon: '!',
        title: 'Unusual pattern',
        description: 'Aria Tower · L4 Open Desk 3× typical for 09:00',
        timeAgo: '26m',
    },
    {
        id: '3',
        type: 'success' as const,
        icon: '✓',
        title: 'Access updated',
        description: 'Northgate Campus · 2 zones added to your access',
        timeAgo: '1h',
    },
];

const alertStyleByType = {
    warning: { icon: styles.iconWarning, text: styles.iconTextWarning },
    info: { icon: styles.iconInfo, text: styles.iconTextInfo },
    success: { icon: styles.iconSuccess, text: styles.iconTextSuccess },
};

export function AlertsSection() {
    return (
        <View>
            <View style={styles.headerRow}>
                <Text style={styles.sectionLabel}>ALERTS</Text>
                <Text style={styles.activeCount}>{alerts.length} active</Text>
            </View>

            {alerts.map((alert) => (
                <View key={alert.id} style={styles.card}>
                    <View style={[styles.icon, alertStyleByType[alert.type].icon]}>
                        <Text style={[styles.iconText, alertStyleByType[alert.type].text]}>
                            {alert.icon}
                        </Text>
                    </View>

                    <View style={styles.body}>
                        <Text style={styles.title}>{alert.title}</Text>
                        <Text style={styles.description}>{alert.description}</Text>
                    </View>

                    <Text style={styles.time}>{alert.timeAgo}</Text>
                </View>
            ))}
        </View>
    );
};