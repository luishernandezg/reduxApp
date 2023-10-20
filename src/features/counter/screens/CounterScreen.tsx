import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation, ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAppDispatch, useAppSelector} from '../../../app/hooks';
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  selectCount,
} from '../redux/counterSlice';
import {AsyncButton} from '../components/AsyncButton';

const CounterScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const handleNavigateToScreenTwo = () => {
    navigation.navigate('ImageList');
  };
  const handleNavigateToForm = () => {
    navigation.navigate('Form');
  };
  // redux
  const [incrementAmount, setIncrementAmount] = useState('2');

  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector(selectCount);
  const status = useAppSelector(state => state.counter.status);
  const dispatch = useAppDispatch();
  return (
    <View>
      <Text>CounterScreen</Text>
      <View
        style={{
          marginTop: 100,
        }}>
        <View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => dispatch(increment())}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <Text style={styles.value}>{count}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => dispatch(decrement())}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TextInput
              style={styles.textbox}
              value={incrementAmount}
              keyboardType="numeric"
              onChangeText={setIncrementAmount}
            />
            <View>
              <TouchableOpacity
                style={styles.button}
                onPress={() =>
                  dispatch(incrementByAmount(Number(incrementAmount) || 0))
                }>
                <Text style={styles.buttonText}>Add Amount</Text>
              </TouchableOpacity>
              <AsyncButton
                style={styles.button}
                disabled={status !== 'idle'}
                onPress={() =>
                  dispatch(incrementAsync(Number(incrementAmount) || 0))
                }>
                <Text style={styles.buttonText}>Add Async</Text>
              </AsyncButton>
            </View>
          </View>
        </View>
        <Button
          title="Navigate to list"
          onPress={handleNavigateToScreenTwo}></Button>
        <Button
          title="Navigate to form"
          onPress={handleNavigateToForm}></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  value: {
    fontSize: 78,
    paddingHorizontal: 16,
    marginTop: 2,
    color: 'rgb(112, 76, 182)',
  },
  button: {
    backgroundColor: 'rgba(112, 76, 182, 0.1)',
    borderRadius: 2,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 4,
    margin: 2,
  },
  buttonText: {
    color: 'rgb(112, 76, 182)',
    fontSize: 32,
    textAlign: 'center',
  },
  textbox: {
    fontSize: 48,
    padding: 2,
    width: 64,
    textAlign: 'center',
    marginRight: 8,
    borderWidth: 1,
    justifyContent: 'center',
    color: 'rgb(112, 76, 182)',
  },
});

export default CounterScreen;
