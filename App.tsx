import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.logo}>
        <View style={styles.innerLogo} />
      </View>

      <Text style={styles.heading}>askSpace</Text>

      <Text style={styles.subheading}>Get Occupancy Insights, Instantly.</Text>

      <View style={styles.footer}>
        <Text style={styles.footerText}>by</Text>
        <Text style={styles.footerBrand}>Onavi</Text>
      </View>

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

  logo: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 8,
    borderColor: '#7b9cff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22,
  },

  innerLogo: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#2ec27e',
  },

  heading: {
    fontSize: 34,
    color: '#022b3a',
    fontWeight: '800',
    letterSpacing: -0.8,
    marginBottom: 8,
  },

  subheading: {
    fontSize: 16,
    color: '#1f7a83',
    letterSpacing: -0.2,
  },

  footer: {
    position: 'absolute',
    bottom: 54,
    alignItems: 'center',
  },

  footerText: {
    fontSize: 12,
    color: '#5c6f7a',
    marginBottom: 4,
  },

  footerBrand: {
    fontSize: 18,
    color: '#022b3a',
    fontWeight: '700',
    letterSpacing: -0.4,
  },
});