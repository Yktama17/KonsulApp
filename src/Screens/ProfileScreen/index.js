import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const win = Dimensions.get('window');

const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleEditProfile = () => {
    // Tambahkan logika untuk menangani tombol Edit Profil
    console.log('Edit Profil');
  };

  const handleMyOrders = () => {
    // Tambahkan logika untuk menangani tombol Pesanan Saya
    console.log('Pesanan Saya');
  };

  const handlePaymentMethods = () => {
    // Tambahkan logika untuk menangani tombol Cara Pembayaran
    console.log('Cara Pembayaran');
  };

  const handleInviteFriends = () => {
    // Tambahkan logika untuk menangani tombol Invite Teman
    console.log('Invite Teman');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.profileImageContainer}>
          <Image
            style={styles.profileImage}
            source={{ uri: 'https://editorial.femaledaily.com/wp-content/uploads/2023/07/Haerin-2.png' }}
          />
        </View>
        <View style={styles.userInfoContainer}>
          <Text style={styles.userName}>Kang Haerin</Text>
        </View>
      </View>

      <ScrollView horizontal style={styles.iklanContainer}>
        {/* ... */}
      </ScrollView>

      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem} onPress={handleEditProfile}>
          <Text style={styles.menuItemText}>Edit Profil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={handleMyOrders}>
          <Text style={styles.menuItemText}>Pesanan Saya</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={handlePaymentMethods}>
          <Text style={styles.menuItemText}>Cara Pembayaran</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={handleInviteFriends}>
          <Text style={styles.menuItemText}>Invite Teman</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },

  header: {
    height: 200,
    backgroundColor: '#236b23',
  },
  
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5, // Efek elevasi untuk kotak header
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  profileImageContainer: {
    padding : 0,
    flex: 1,
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  userInfoContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuContainer: {
    alignItems: 'left',
    padding: 10,
  },
  menuItem: {
    backgroundColor: 'lightgray',
    width: 200,
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    alignItems: 'center', 
  },
  menuItemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  iklanContainer2: {
    marginTop: 2,
    marginHorizontal: 8,
  },

  iklanHeader: {
    color: 'black',
    fontWeight: '500',
    fontSize: 22,

  },

  iklanImage: {
    marginTop: 6,
    borderRadius: 15,
    width: win.width-64,
    height:212,
  },

  iklanTextHeader: {
    fontSize: 16,
    marginTop: 6,
    color: 'black',
    fontWeight: 'bold',
  },

  iklanTextSponsored: {
    marginTop: 2,
    color: 'grey',
  },
});

export default ProfileScreen;
