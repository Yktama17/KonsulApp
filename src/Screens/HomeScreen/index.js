import React, {useState, useRef} from 'react';
import {Dimensions,ScrollView,StyleSheet,TextInput,View,StatusBar,Text,Image,TouchableOpacity,Animated,} from 'react-native';
import {SearchNormal1,Bag2,Snapchat,Bookmark,More,} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';

const win = Dimensions.get('window');

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

const Status = () => {
  return <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'}></StatusBar>;
};

export default function App() {
  const [Press, setPress] = useState(1);

  const animatedValue = useRef(new Animated.Value(0)).current;

  const opacity = animatedValue.interpolate({
    inputRange: [0, 200],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const scale = animatedValue.interpolate({
    inputRange: [0, 200],
    outputRange: [1, 0.5],
    extrapolate: 'clamp',
  });
  const navigation = useNavigation();
  return (
    <ScrollView
      style={styles.container}
      onScroll={Animated.event(
        [{nativeEvent: {contentOffset: {y: animatedValue}}}],
        {useNativeDriver: false},
      )}
      scrollEventThrottle={16}>
      <Status />
      <Animated.View
        style={[
          styles.header,
          {opacity, transform: [{scale}]},
        ]}></Animated.View>

      {/* ... (unchanged code) */}
      <View style={styles.searchContainer}>
        <SearchNormal1 variant="Linear" color="grey" style={{marginLeft: 12}} />
        <TextInput
          style={styles.search}
          placeholder="Cari Solusi"
          placeholderTextColor={'grey'}></TextInput>
      </View>

      <View style={styles.fiturContainer}>
        {/* ... (unchanged code) */}
        <TouchableOpacity style={styles.fiturContainer2}>
          <Bag2 size={32} variant="Linear" color="black" />
          <Text style={styles.fiturText}>Beli Obat</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.fiturContainer2}
          onPress={() => navigation.navigate('Chat')}  
        >
          <Snapchat size={32} variant="Linear" color="black" />
          <Text style={styles.fiturText}>Chat Dokter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.fiturContainer2}>
          <Bookmark size={32} variant="Linear" color="black" />
          <Text style={styles.fiturText}>Buat Janji</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.categoryContainer,
            {backgroundColor: Press == 1 ? '#e8fee4' : '#f3f3f3'},
          ]}
          onPress={() => setPress(1)}>
          <More size={32} variant="Linear" color="black" />
          <Text
            style={[
              styles.category,
              {
                fontWeight: Press == 1 ? '600' : 'normal',
                color: Press == 1 ? '#005D17' : 'black',
              },
            ]}>
            More
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal style={styles.iklanContainer}>
        <View style={styles.iklanContainer2}>
          <Text style={styles.iklanHeader}>Cek Kesehatan</Text>
          <Image
            style={styles.iklanImage}
            source={{
              uri: 'https://images.unsplash.com/photo-1547082688-9077fe60b8f9?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}
          />
          <Text style={styles.iklanTextHeader}>
            Cek Kesehatan Melalui Gadget Anda
          </Text>
          <Text style={styles.iklanTextSponsored}>KonsulApps</Text>
        </View>
        <View style={styles.iklanContainer2}>
          <Text style={styles.iklanHeader}>Artikel Kami</Text>
          <Image
            style={styles.iklanImage}
            source={{
              uri: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}
          />
          <Text style={styles.iklanTextHeader}>Kegiatan Worshop Online</Text>
          <Text style={styles.iklanTextSponsored}>KonsulApps</Text>
        </View>
      </ScrollView>

      <View style={styles.buttonBar}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: 200,
    backgroundColor: '#236b23',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    backgroundColor: 'white',
    elevation: 3,
    marginHorizontal: 32,
    borderRadius: 10,
    marginTop: -110,
  },
  search: {
    marginHorizontal: 8,
    color: 'black',
    width: win.width - 112,
  },
  fiturContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 80,
    backgroundColor: 'white',
    elevation: 3,
    marginHorizontal: 2,
    borderRadius: 10,
    marginTop: 20,
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
  categoryContainer: {
    marginHorizontal: 32,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  category: {
    marginHorizontal: 4,
    color: 'black',
    fontSize: 12,
  },
  iklanContainer: {
    marginTop: 16,
    height: 300,
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
    width: win.width - 64,
    height: 212,
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
  buttonBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    backgroundColor: 'white',
    elevation: 3,
    borderRadius: 10,
    marginHorizontal: 2,
  },
});
