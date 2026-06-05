import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
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
    color: '#0E7490',
    letterSpacing: -0.8,
    marginBottom: 8,
  },
  button: {
    position: 'absolute',
    borderRadius: "16px",
    backgroundColor: '#2ec27e',
    margin: "10px", 
  },
  loginText: {

  },
  signUpButton: {

  },
  signUpText: {

  },
    footer: {
    position: 'absolute',
    bottom: 54,
    alignItems: 'center',
  },
footerText: {
  fontSize: 12,
  fontFamily: 'Inter_400Regular',
  color: '#14B8A6',
  marginBottom: 4,
},
  footerBrand: {
    fontSize: 18,
    color: '#14B8A6',
    fontWeight: '700',
    letterSpacing: -0.4,
  },
})