import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useFonts,
         Inter_400Regular,
         Inter_600SemiBold,
         Inter_700Bold }
from '@expo-google-fonts/inter';

export default function App() {
  const [fontsLoaded] = useFonts({
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
});

if (!fontsLoaded) {
  return null;
}
  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>

      <View style={styles.logo} />
      <Text style={styles.heading}>askSpace</Text>
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>from</Text>
        <Text style={styles.footerBrand}>Onavi</Text>
      </View>

      <StatusBar style="auto" />

    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A7D6C6',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  logo: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 8,
    borderColor: '#2ec27e',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 120,
    marginBottom: 22,
  },

  heading: {
    fontSize: 34,
    fontFamily: 'Inter_700Bold',
    color: '#ffffff',
    letterSpacing: -0.8,
    marginBottom: 8,
  },

  footer: {
    position: 'absolute',
    bottom: 54,
    alignItems: 'center',
  },

footerText: {
  fontSize: 12,
  fontFamily: 'Inter_400Regular',
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