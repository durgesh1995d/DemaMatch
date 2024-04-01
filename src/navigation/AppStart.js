import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen';
import CreateMatch from '../screen/CreateMatch';
import ScheduleMatch from '../screen/SheduleMatch';
import AddTeam from '../screen/AddTeam';

const Stack = createNativeStackNavigator();

const AppStart = () => {
  return (
    <Stack.Navigator name={'AppStart'}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CreateMatch" component={CreateMatch} />
      <Stack.Screen name="ScheduleMatch" component={ScheduleMatch} />
      <Stack.Screen name="Add Team" component={AddTeam} />
    </Stack.Navigator>
  );
};
export default AppStart;
