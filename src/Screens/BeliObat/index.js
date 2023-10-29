import React, { useState } from 'react'
import { Dimensions, ScrollView, StyleSheet, TextInput, View, StatusBar, Text, Image, TouchableOpacity} from 'react-native'
import { SearchNormal1, Activity, More, Brush2, Lovely, Milk, Pet, Wind2 } from 'iconsax-react-native';
// import logo from './src/assets/images/image.png'

const win = Dimensions.get('window')

const Status = () => {
  return (
    <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'}></StatusBar>
  )
}

export default function App() {

  const [choose, setChoose] = useState(1)

  return (
    <ScrollView style={ styles.container }>
      <Status />
      <View style={ styles.header }></View>
      {/* <Image style={ styles.logoHeader } source={ logo }/> */}
      <View style={ styles.searchContainer }>
        <SearchNormal1 variant='Linear' color='grey' style={{ marginLeft: 12, }} />
        <TextInput style={ styles.search } placeholder='Contoh : Paracetamol' placeholderTextColor={'grey'}></TextInput>
      </View>
      <Text style={ styles.MenuText }>Beli Sesuai Kebutuhan</Text>
      <View style={ styles.fiturContainer }>
        <TouchableOpacity style={ styles.fiturContainer2 }>
          <Image size={54} variant='Linear' color='black' />
          <Text style={ styles.fiturText }>Ibu & anak</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.fiturContainer2 }>
          <Wind2 size={54} variant='Linear' color='black' />
          <Text style={ styles.fiturText }>Asma</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.fiturContainer2 }>
          <Activity size={54} variant='Linear' color='black' />
          <Text style={ styles.fiturText }>Vitamin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.fiturContainer2 }>
          <Pet size={54} variant='Linear' color='black' />
          <Text style={ styles.fiturText }>Alergi</Text>
        </TouchableOpacity>
      </View>
      <View style={ styles.fiturContainer }>
        <TouchableOpacity style={ styles.fiturContainer2 }>
          <Milk size={50} variant='Linear' color='black' />
          <Text style={ styles.fiturText }>Susu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.fiturContainer2 }>
          <Lovely size={50} variant='Linear' color='black' />
          <Text style={ styles.fiturText }>Kontrasepsi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.fiturContainer2 }>
          <Brush2 size={50} variant='Linear' color='black' />
          <Text style={ styles.fiturText }>Facial</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.fiturContainer2 }>
          <More size={50} variant='Linear' color='black' />
          <Text style={ styles.fiturText }>More</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  header: {
    height: 136,
    backgroundColor: '#00AA13',
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
    marginTop: -80,
  },

  search: {
    marginHorizontal: 8,
    color: 'black',
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
    padding: 8,
    marginHorizontal: 4,
  },
  
  category: {
    marginHorizontal: 4,
    color: 'black',
    fontSize: 12,
  },

  categoryTouch: {
    marginHorizontal: 4,
    color: '#00AA13',
    fontSize: 12,
  },

  fiturContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 112,
    marginTop : 20,
    marginHorizontal: 32,
  },

  fiturContainer2: {
    alignItems: 'center',
    marginTop: 14,
  },

  MenuText:{
  fontWeight : "bold",
  fontSize : 18,
  marginTop: 20,
  marginRight: 50,
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
})