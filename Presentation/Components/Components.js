import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,ImageBackground } from 'react-native';
import { dateStyle, ImageCardStyles } from '../../Styles';
import { useNavigation } from '@react-navigation/native';

export const ImageCard = ({title,uri}) => {
    const navigation = useNavigation()
    const onPress = () => {
        navigation.navigate("ImageView",{uri : uri})
    }

    
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
    <View style={ImageCardStyles.card}>
      {/* Image Background */}
      <ImageBackground
        source={{ uri: uri }}
        style={ImageCardStyles.imageBackground}
        resizeMode="cover"
        imageStyle={ImageCardStyles.imageStyle}
      >
        <View style={ImageCardStyles.overlay} />
      </ImageBackground>

      {/* Title Section */}
      <View style={ImageCardStyles.titleContainer}>
          <Text style={ImageCardStyles.title} numberOfLines={1} ellipsizeMode="tail">
            {title}
          </Text>
     </View>
    </View>
  </TouchableOpacity>
  );
};

export const Date = ({date}) => {
    return (
        <View style={dateStyle.dateContainer}>
        <Text style={dateStyle.dateText}>{date}</Text>
      </View>
    )
}

