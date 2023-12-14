import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

const ProfileScreen = ({ navigation }) => {
  const [user, setUser] = useState({
    name: "John Doe",
    photo: null,
    birthday: "2000-01-01",
    gender: "male",
  });

  useEffect(() => {
    // Get the user data from the backend
    fetch("/api/users/me")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.photo}
        source={user.photo}
      />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.birthday}>{user.birthday}</Text>
      <Text style={styles.gender}>{user.gender}</Text>
      <Button
        title="Ubah"
        onPress={() => navigation.navigate("EditProfile")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  birthday: {
    fontSize: 16,
  },
  gender: {
    fontSize: 16,
  },
});

export default ProfileScreen;
