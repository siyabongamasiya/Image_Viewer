import React from 'react';
import { View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { ImageViewStyles } from '../../Styles';

const ImageViewScreen = ({route}) => {
  const navigation = useNavigation();
  const { uri } = route.params;

  const handleShare = () => {
    console.log('Share button pressed');
  };

  return (
    <SafeAreaView style={ImageViewStyles.container}>
      {/* Top Bar with Back Button */}
      <View style={ImageViewStyles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Main Image */}
      <Image
        source={{uri : uri}} 
        style={ImageViewStyles.image}
        resizeMode = "contain"
      />

      {/* Bottom Bar with Share Button */}
      <View style={ImageViewStyles.bottomBar}>
        <TouchableOpacity onPress={handleShare}>
          <Ionicons name="share-social" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};



export default ImageViewScreen;
