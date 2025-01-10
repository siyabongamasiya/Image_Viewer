import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';

export class Repository {

    
    fetchImagesByDate = async (directoryUri) => {
  try {
    // Fetch media assets
    const media = await MediaLibrary.getAssetsAsync({
      mediaType: MediaLibrary.MediaType.photo,
      first: 100, // Number of images to fetch at a time
      sortBy: [MediaLibrary.SortBy.creationTime],
    });

    const categorizedImages = {};

    // Categorize images by date
    media.assets.forEach((asset) => {
      const fileDate = new Date(asset.creationTime).toISOString().split('T')[0];
      if (!categorizedImages[fileDate]) {
        categorizedImages[fileDate] = [];
      }
      categorizedImages[fileDate].push({
        image: asset.uri,
        title: asset.filename,
      });
    });

    return categorizedImages;
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
      };


      prepareSectionListData = async (directoryUri) => {
        try {
          const categorizedImages = await this.fetchImagesByDate(directoryUri);
      
          if (!categorizedImages) return [];
      
          // Convert categorizedImages object to SectionList-compatible format
          const sections = Object.keys(categorizedImages).map((date) => ({
            title: date,
            data: categorizedImages[date], // The array of image objects for that date
          }));
      
          return sections;
        } catch (error) {
          console.error("Error preparing SectionList data:", error);
          return [];
        }
      };
}