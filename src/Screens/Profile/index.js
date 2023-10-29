import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity,ScrollView,Dimensions } from 'react-native';


const win = Dimensions.get('window')

const ProfileScreen = () => {
  return (
    <ScrollView style={ styles.container }>
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
      <ScrollView horizontal style={ styles.iklanContainer }>
        <View style={ styles.iklanContainer2 }>
          <Text style={ styles.iklanHeader }>Cek Kesehatan</Text>
          <Image style={styles.iklanImage} source={{ uri: 'https://images.unsplash.com/photo-1547082688-9077fe60b8f9?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
          <Text style={ styles.iklanTextHeader }>Cek Kesehatan Melalui Gadget Anda</Text>
          <Text style={ styles.iklanTextSponsored }>KonsulApps</Text>
          </View>
          </ScrollView>
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Edit Profil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Pesanan Saya</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Cara Pembayaran</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
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
    alignItems: 'Left',
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
