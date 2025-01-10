//expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-vector-icons @react-native-masked-view/masked-view
//npm install @react-navigation/native-stack

//npx expo install expo-file-system

import { StyleSheet } from "react-native";
export const background = "#FOFOFO"
export const primary = "#007BFF"
export const onprimary = "#FFFFFF"



export const ImageCardStyles = StyleSheet.create({
    card: {
      width: 150, 
      height: 150, 
      borderRadius: 20,
      overflow: 'hidden',
      backgroundColor: '#ffffff',
      margin: 10,
      elevation: 5, // Shadow for Android
    },
    imageBackground: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    imageStyle: {
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.3)', // Optional dark overlay
    },
    titleContainer: {
      backgroundColor: primary, // Blue background color
      paddingVertical: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      color: onprimary,
      fontSize: 22,
      fontWeight: 'bold',
    },
  });

  export const dateStyle = StyleSheet.create({
    dateContainer: {
        backgroundColor: '#007AFF',
        padding: 10,
        marginTop : 50,
        marginBottom: 10,
        borderRadius: 10,
      },
      dateText: {
        color: onprimary,
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
      }
  })


export const homeScreenStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent : "center",
      alignItems : "center",
      backgroundColor: background,
    },
    headerContainer: {
      backgroundColor: background,
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
    sectionHeader: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#FFF',
    },
    itemContainer: {
      backgroundColor: '#FFFFFF',
      paddingVertical: 10,
      paddingHorizontal: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#E0E0E0',
    },
    itemText: {
      fontSize: 16,
      color: '#333',
    },
    emptyText: {
      textAlign: 'center',
      marginTop: 20,
      fontSize: 16,
      color: '#888',
    },
  });


  export const splashScreenStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff', // Customize background color if needed
    },
    logo: {
      width: 150, // Adjust width of logo
      height: 150, // Adjust height of logo
      resizeMode: 'contain',
    },
  });

  export const ImageViewStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: primary, 
    },
    topBar: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 60,
      justifyContent: 'center',
      paddingHorizontal: 16,
      backgroundColor: primary,
      zIndex: 10,
    },
    bottomBar: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: primary, 
    },
    image: {
      flex: 1,
      width: '100%',
      height: '100%',
      marginTop: 60,
      marginBottom: 60,
    },
  });
  