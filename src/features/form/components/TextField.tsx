import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import FieldBase, {FieldBaseProps} from './FieldBase';
import {useField} from 'formik';

type TextFieldProps = FieldBaseProps & {
  name: string;
};

const TextField = ({name, label}: TextFieldProps) => {
  const [value, meta, helpers] = useField(name);
  const handleChange = (new_text: string) => {
    helpers.setValue(new_text);
  };

  return (
    <FieldBase label={label} name={name}>
      <TextInput
        style={styles.input}
        onChangeText={handleChange}
        value={meta.value}
      />
    </FieldBase>
  );
};

export default TextField;

const styles = StyleSheet.create({
  input: {
    height: 32,
    width: 200,
    borderWidth: 1,
    borderColor: '#a8a8a8',
  },
});
