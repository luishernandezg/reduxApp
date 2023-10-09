import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  ScrollView,
  Button,
  FlatList,
  Platform,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../../app/hooks';
import {fetchImages, selectImageList} from '../redux/imageListSlice';
import ImageItem from '../components/ImageItem';
import {useEffect} from 'react';

const ImageListScreen = () => {
  const imageList = useAppSelector(selectImageList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // llamado al api
    console.log('useEfect');
    dispatch(fetchImages());
  }, []);

  const handleGetListImage = () => {
    dispatch(fetchImages());
  };
  return (
    <View>
      <FlatList
        data={imageList.listImage}
        keyExtractor={image => String(image.id)}
        renderItem={({item}) => <ImageItem image={item} />}
        ListFooterComponent={
          imageList.status == 'loading' ? (
            <ActivityIndicator
              size="large"
              style={styles.spinner}
              color="#AEAEAE"
            />
          ) : (
            <></>
          )
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === 'android' ? 60 : 60,
  },
});

export default ImageListScreen;
