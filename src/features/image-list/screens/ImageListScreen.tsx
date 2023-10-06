import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  ScrollView,
  Button,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../../app/hooks';
import {fetchImages, selectImageList} from '../redux/imageListSlice';

const ImageListScreen = () => {
  const imageList = useAppSelector(selectImageList);
  const dispatch = useAppDispatch();

  const handleGetListImage = () => {
    dispatch(fetchImages());
  };
  return (
    <ScrollView>
      <View style={{height: 15}} />
      <Button title="Get Data" onPress={handleGetListImage}></Button>
      {imageList.status == 'loading' && (
        <ActivityIndicator size={'large'} style={{alignSelf: 'center'}} />
      )}
      {imageList.listImage.map(value => {
        return (
          <View key={value.id}>
            <Text>{value.title}</Text>
            <Image
              source={{uri: value.thumbnailUrl}}
              style={{
                width: 120,
                height: 120,
              }}></Image>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default ImageListScreen;
