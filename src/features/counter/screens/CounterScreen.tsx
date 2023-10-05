import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation, ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const CounterScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const handleNavigateToScreenTwo = () => {
    navigation.navigate('ImageList');
  };
  return (
    <View>
      <Text>CounterScreen</Text>
      <View
        style={{
          marginTop: 600,
        }}>
        <Button
          title="Navigate screen 2"
          onPress={handleNavigateToScreenTwo}></Button>
      </View>
    </View>
  );
};

export default CounterScreen;
