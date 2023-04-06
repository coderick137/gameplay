import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { Singin } from '../screens/Singin';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        cardStyle: {
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