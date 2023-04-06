import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Singin } from '../screens/Singin';

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'transparent'
        }
      }}
    >
      <Screen
        name="Singin"
        component={Singin}
      />
      <Screen
        name="Home"
        component={Home}
      />
    </Navigator>
  );
}