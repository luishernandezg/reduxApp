import {View, Text, StyleSheet, Image} from 'react-native';
import React, {FunctionComponent} from 'react';

interface ErrorGenericProp {
  message: string;
  action: () => any;
}
const GenericErrrorScreen: FunctionComponent<ErrorGenericProp> = ({
  message,
  action,
}) => {
  return (
    <View style={styles.centered}>
      <Image
        style={styles.imagen}
        source={require('../../assets/img/error-img.png')}
      />
      <Text style={styles.title}>Lo sentimos algo salio mal.</Text>
      <Text style={styles.subtitle}>{message}</Text>
    </View>
  );
};

export default GenericErrrorScreen;

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imagen: {
    height: 150,
    width: 150,
  },
  title: {
    fontSize: 18,
    marginVertical: 2,
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
  },
});
