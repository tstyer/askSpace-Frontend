import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>askSpace</Text>
      <Text style={styles.subheading}>Get Occupancy Insights, Instantly.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edf2fb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontFamily: 'Inter',
    fontSize: 24,
    color: '#022b3a',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subheading: {
    fontFamily: 'Inter',
    fontSize: 16,
    color: '#1f7a83',
  },
});
