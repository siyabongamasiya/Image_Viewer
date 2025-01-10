import React, { useEffect, useState } from 'react';
import { View, Text, SectionList, FlatList, SafeAreaView } from 'react-native';
import { homeScreenStyles } from '../../Styles';
import { Date, ImageCard } from '../Components/Components';
import { Repository } from '../../Data/Repository/Repository';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system'; 

const HomeScreen = () => {
  const [sections, setSections] = useState([]);
  const [hasPermission, setHasPermission] = useState(null);

  // Request permission on mount
  useEffect(() => {
    const requestPermission = async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };
    requestPermission();
  }, []);

  // Load images once permission is granted
  useEffect(() => {
    const loadImages = async () => {
      const repo = new Repository();
      const data = await repo.prepareSectionListData(FileSystem.documentDirectory);
      setSections(data);
    };

    if (hasPermission) {
      loadImages();
    }
  }, [hasPermission]);

  if (hasPermission === null) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>Requesting permission...</Text>
      </View>
    );
  }

  if (!hasPermission) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>Permission denied. Please enable permissions in settings.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={homeScreenStyles.container}>
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.title}
        renderSectionHeader={({ section }) => (
          <View>
            <Date date={section.title} />
            <FlatList
              data={section.data}
              numColumns={2}
              keyExtractor={(item) => item.title}
              renderItem={({ item }) => (
                <ImageCard title={item.title} uri={item.image} />
              )}
              ListEmptyComponent={<Text>No items available</Text>}
            />
          </View>
        )}
        renderItem={() => null} 
        stickySectionHeadersEnabled={true}
        ListEmptyComponent={
          <Text style={homeScreenStyles.emptyText}>No items available</Text>
        }
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

