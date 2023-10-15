import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image } from 'react-native';

const App = () => {
  const fontType = {
    'Pjs-ExtraLight' : 'PlusJakartaSans-ExtraLight',
    'Pjs-Light' : 'PlusJakartaSans-Light',
    'Pjs-Regular' : 'PlusJakartaSans-Regular',
    'Pjs-Medium' : 'PlusJakartaSans-Medium',
    'Pjs-SemiBold' : 'PlusJakartaSans-SemiBold',
    'Pjs-Bold' : 'PlusJakartaSans-Bold',
    'Pjs-ExtraBold' : 'PlusJakartaSans-ExtraBold',
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./src/Asset/PIC2.png')} style={styles.logo} />
        <Text style={styles.headerText}>Aplikasi Konsultasi</Text>
      </View>

      <View style={styles.main}>
        <Text style={{ fontFamily: fontType['Pjs-Regular'] }}>Selamat Datang!</Text>
        <Text style={{ fontFamily: fontType['Pjs-Regular'] }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec urna vel ligula mollis accumsan
        </Text>

        <View style={styles.form}>
          <TextInput
            placeholder="Nama"
            style={{ fontFamily: fontType['Pjs-Regular'] }}
          />
          <TextInput
            placeholder="Keluhan"
            style={{ fontFamily: fontType['Pjs-Regular'] }}
          />
          <Button
            title="Kirim"
            style={{ fontFamily: fontType['Pjs-Regular'] }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#4CAF50',
    padding: 20,
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginRight: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
  },
  main: {
    margin: 20,
    alignItems: 'center',
  },
  title: {
    color: '#333',
    fontSize: 24,
    marginBottom: 10,
  },
  subtitle: {
    color: '#666',
    fontSize: 10,
    textAlign: 'center',
    marginBottom: 20,
  },
  form: {
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    borderRadius: 5,
    padding: 10,
  },
  footer: {
    backgroundColor: '#333',
    padding: 10,
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
  },
});

export default App;
