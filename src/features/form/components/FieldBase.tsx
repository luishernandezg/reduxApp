import {View, Text, StyleSheet} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {ErrorMessage} from 'formik';

export type FieldBaseProps = {
  label: string;
  name: string;
};

const FieldBase = ({
  label,
  name,
  children,
}: PropsWithChildren<FieldBaseProps>) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {children}
      <ErrorMessage 
        component={Text} 
        name={name} 
      />
    </View>
  );
};

export default FieldBase;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  label: {
    fontSize: 14,
    color: '#a8a8a8',
  },
  error: {
    fontSize: 14,
    color: 'red',
  },
});
