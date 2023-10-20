/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CounterScreen from './src/features/counter/screens/CounterScreen';
import ImageListScreen from './src/features/image-list/screens/ImageListScreen';
import FormScreen from './src/features/form/screens/FormScreen';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Counter" component={CounterScreen} />
        <Stack.Screen name="ImageList" component={ImageListScreen} />
        <Stack.Screen name="Form" component={FormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
