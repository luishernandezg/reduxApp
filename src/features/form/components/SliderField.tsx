import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import FieldBase, {FieldBaseProps} from './FieldBase';
import {useField} from 'formik';
import {Slider} from '@miblanchard/react-native-slider';

type SliderFieldProps = FieldBaseProps & {
  name: string;
};

const SliderField = ({label, name}: SliderFieldProps) => {
  const [value, meta, helpers] = useField(name);

  const handleChange = (value: number[]) => {
    helpers.setValue(value[0]);
  };
  return (
    <FieldBase label={label} name={name}>
      <Slider
        containerStyle={styles.slider}
        minimumValue={0}
        maximumValue={100}
        step={1}
        value={meta.value}
        onSlidingComplete={handleChange}
      />
    </FieldBase>
  );
};

export default SliderField;

const styles = StyleSheet.create({
  slider: {
    height: 24,
    width: 200,
  },
});
