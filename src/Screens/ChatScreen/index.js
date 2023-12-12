import React, {useState} from 'react';
import {View,Text,TextInput,TouchableOpacity, StyleSheet, ScrollView,} from 'react-native';
import {ArrowLeft} from 'iconsax-react-native';
import {fontType, colors} from '../../theme';
import {useNavigation} from '@react-navigation/native';

const ChatScreen = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState('');
  const navigation = useNavigation();

  const handleUpload = () => {
    const dataToUpload = { title, content, image,price,
    };
    console.log('Data to upload:', dataToUpload);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft color={colors.black()} variant="Linear" size={24} />
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={styles.title}>Masukan</Text>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingVertical: 10,
          gap: 10,
        }}>
        <View style={styles.borderDashed}>
          <TextInput
            placeholder="Nama"
            value={title}
            onChangeText={text => setTitle(text)}
            placeholderTextColor={colors.grey(0.6)}
            multiline
            style={styles.titleInput}
          />
        </View>
        <View style={[styles.borderDashed, {minHeight: 250}]}>
          <TextInput
            placeholder="Keluhan"
            value={content}
            onChangeText={text => setContent(text)}
            placeholderTextColor={colors.grey(0.6)}
            multiline
            style={styles.contentInput}
          />
        </View>
        <View style={styles.borderDashed}>
          <TextInput
            placeholder="Image"
            value={image}
            onChangeText={text => setImage(text)}
            placeholderTextColor={colors.grey(0.6)}
            style={styles.contentInput}
          />
        </View>
        <View style={styles.borderDashed}>
          <TextInput
            placeholder=""
            value={price}
            onChangeText={text => setPrice(text)}
            placeholderTextColor={colors.grey(0.6)}
            style={styles.contentInput}
          />
        </View>
      </ScrollView>
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.uploadButton} onPress={handleUpload}>
          <Text style={styles.buttonLabel}>Upload</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    position: 'absolute',
    zIndex: 1000,
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    height: 64,
    paddingHorizontal: 8,
    backgroundColor: '#FFF',
  },
  headerStart: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  back: {
    padding: 8,
  },
  headerEnd: {
    flex: 1,
    paddingRight: 8,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  detailText: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  imageStyle: scrollY => ({
    resizeMode: 'contain',
    height: 300,
    width: 425,
    borderRadius: 16,
    alignSelf: 'center',
    transform: [
      {
        translateY: scrollY,
      },
      {
        scale: scrollY.interpolate({
          inputRange: [-300, 0],
          outputRange: [2, 1],
        }),
      },
    ],
  }),

  cardContentImage: {
    paddingHorizontal: 16,
    marginTop: 50,
  },
  cardContentText: {
    paddingHorizontal: 20,
    borderRadius: 50,
    backgroundColor: '#02acf5',
    marginTop: -20,
  },
  titleText: {
    color: '#000',
    fontSize: 24,
    fontWeight: '700',
    marginLeft: 16,
    marginTop: 30,
    marginVertical: 8,
  },
  descText: {
    color: '#000',
    fontSize: 16,
    marginLeft: 16,
    textAlign: 'justify',
    lineHeight: 25,
  },
}); 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  title: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 16,
    color: 'black',
  },
  borderDashed: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: 'grey(0.4)',
  },
  titleInput: {
    fontSize: 16,
    fontFamily: fontType['Pjs-SemiBold'],
    color: 'black',
    padding: 0,
  },
  contentInput: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Regular'],
    color: 'black',
    padding: 0,
  },
  bottomBar: {
    backgroundColor: 'white',
    alignItems: 'flex-end',
    paddingHorizontal: 24,
    paddingVertical: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  uploadButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'blue',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    fontSize: 14,
    fontFamily: fontType['Pjs-SemiBold'],
    color: 'white',
  },
});
export default ChatScreen;