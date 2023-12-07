import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ChatScreen = () => {
  const [nama, setNama] = useState('');
  const [domisili, setDomisili] = useState('');
  const [keluhan, setKeluhan] = useState('');

  const navigation = useNavigation();

  const handleKonsultasi = () => {
    // Logika untuk mengirimkan data konsultasi
    console.log('Nama:', nama);
    console.log('Domisili:', domisili);
    console.log('Keluhan:', keluhan);
    // Anda dapat menambahkan logika untuk mengirim data ini ke server atau melakukan tindakan lain sesuai kebutuhan

    // Setelah mengirimkan data, kembali ke layar sebelumnya (atau sesuaikan dengan navigasi yang diinginkan)
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nama:</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan nama Anda"
        value={nama}
        onChangeText={(text) => setNama(text)}
      />

      <Text style={styles.label}>Domisili:</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan domisili Anda"
        value={domisili}
        onChangeText={(text) => setDomisili(text)}
      />

      <Text style={styles.label}>Keluhan:</Text>
      <TextInput
        style={styles.input}
        placeholder="Jelaskan keluhan Anda"
        multiline
        numberOfLines={4}
        value={keluhan}
        onChangeText={(text) => setKeluhan(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleKonsultasi}>
        <Text style={styles.buttonText}>Kirim Konsultasi</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: '#236b23',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ChatScreen;
