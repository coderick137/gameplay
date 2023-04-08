import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Singin } from '../screens/Singin';

import { theme } from '../global/styles/theme';

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: theme.colors.secondary100
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