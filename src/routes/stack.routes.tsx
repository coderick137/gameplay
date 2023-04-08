import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Singin } from '../screens/Singin';

import { theme } from '../global/styles/theme';
import { AppointmentDetails } from '../screens/AppointmentDetails';

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

      <Screen
        name="AppointmentDetails"
        component={AppointmentDetails}
      />
    </Navigator>
  );
}