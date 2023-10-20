import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import FieldBase, {FieldBaseProps} from './FieldBase';
import {useField} from 'formik';
import {Dropdown} from 'react-native-element-dropdown';

type DropdownFieldProps = FieldBaseProps & {
  name: string;
  data: {label: string; value: string}[];
};

const DropdownField = ({label, name, data}: DropdownFieldProps) => {
  const [value, meta, helpers] = useField(name);

  const handleChange = (value: string) => {
    helpers.setValue(value);
  };
  return (
    <FieldBase label={label} name={name}>
      <Dropdown
        style={styles.dropdown}
        data={data}
        labelField="label"
        valueField="value"
        value={meta.value}
        onChange={data => handleChange(data.value)}
      />
    </FieldBase>
  );
};

export default DropdownField;

const styles = StyleSheet.create({
  dropdown: {
    height: 32,
    width: 200,
    borderWidth: 1,
    borderColor: '#a8a8a8',
    paddingLeft: 4,
  },
});
