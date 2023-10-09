import {
  Text,
  View,
  StyleSheet,
  Touchable,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import React, {FunctionComponent} from 'react';
import {ImageEntity} from '../entities/image';

interface ImageItemProps {
  image: ImageEntity;
}

const ImageItem: FunctionComponent<ImageItemProps> = ({image}) => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.card}>
        <Image source={{uri: image.thumbnailUrl}} style={styles.image}></Image>
        <View style={styles.textSection}>
          <Text style={styles.titleText}>{image.title}</Text>
          <Text style={styles.normalText}>
            faldngjkndfjkgnjdfn enrgdjfsg erkgnjjskdfgn srlkfgj kdsf.
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ImageItem;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 90,
    flexDirection: 'row',
    borderRadius: 5,
    marginStart: 16,
    marginEnd: 16,
    marginTop: 8,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  textSection: {
    flex: 1,
    marginStart: 16,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  normalText: {
    fontSize: 14,
    fontWeight: 'normal',
    color: 'grey',
  },
});
