import React, { Component } from 'react';
import { Dimensions, ScrollView, StyleSheet, TextInput, View, StatusBar, Text, Image } from 'react-native';
import { SearchNormal1, Snapchat, BookSaved, Home2, Profile } from 'iconsax-react-native';
import logo from './src/Asset/PIC2.png';

const win = Dimensions.get('window');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />
        <View style={styles.header}></View>
        <Image style={styles.logoHeader} source={logo} />
        <View style={styles.searchContainer}>
          <SearchNormal1 variant="Linear" color="grey" style={{ marginLeft: 12 }} />
          <TextInput
            style={styles.search}
            placeholder='Cari Solusi'
            placeholderTextColor={'grey'}
            value={this.state.searchInput}
            onChangeText={text => this.setState({ searchInput: text })}
          />
        </View>
        <View style={styles.fiturContainer}>
          <FiturItem icon={Snapchat} text="Chat Dokter" />
          <FiturItem icon={BookSaved} text="Buat Janji" />
          <FiturItem icon={Home2} text="Home Care" />
          <FiturItem icon={Profile} text="Profile" />
        </View>
        <ScrollView horizontal style={styles.iklanContainer}>
          <IklanItem
            header="Cek Kesehatan"
            imageUri="https://images.unsplash.com/photo-1547082688-9077fe60b8f9?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            textHeader="Cek Kesehatan Melalui Gadget Anda"
            textSponsored="KonsulApps"
          />
          <IklanItem
            header="Worshop"
            imageUri="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            textHeader="Kegiatan Worshop Online"
            textSponsored="KonsulApps"
          />
        </ScrollView>
      </ScrollView>
    );
  }
}

class FiturItem extends Component {
  render() {
    const { icon: Icon, text } = this.props;
    return (
      <View style={styles.fiturContainer2}>
        <Icon size={54} color="black" />
        <Text style={styles.fiturText}>{text}</Text>
      </View>
    );
  }
}

class IklanItem extends Component {
  render() {
    const { header, imageUri, textHeader, textSponsored } = this.props;
    return (
      <View style={styles.iklanContainer2}>
        <Text style={styles.iklanHeader}>{header}</Text>
        <Image style={styles.iklanImage} source={{ uri: imageUri }} />
        <Text style={styles.iklanTextHeader}>{textHeader}</Text>
        <Text style={styles.iklanTextSponsored}>{textSponsored}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  header: {
    height: 136,
    backgroundColor: '#8BCB98',
  },

  logoHeader: {
    width: win.width,
    height:128,
    resizeMode: 'contain',
    position: 'absolute',
    alignSelf: 'center',
    top: 8,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    backgroundColor: 'white',
    elevation: 3,
    marginHorizontal: 32,
    borderRadius: 10,
    marginTop: 12,
  },

  search: {
    marginHorizontal: 8,
    color: 'grey',
    width: win.width-112,
  },

  categoryContainer: {
    marginHorizontal: 32,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },

  categoryContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    borderRadius: 16,
    padding: 6,
    marginHorizontal: 4,
  },
  
  category: {
    marginHorizontal: 4,
    color: 'black',
    fontSize: 12,
  },

  fiturContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 112,
    marginHorizontal: 32,
  },

  fiturContainer2: {
    alignItems: 'center',
    marginTop: 14,
  },

  fiturText: {
    color: 'black',
    marginTop: 6,
    fontSize: 12,
  },

  iklanContainer: {
    marginTop: 16,
    height:300,
    marginHorizontal: 8,
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

export default App;
