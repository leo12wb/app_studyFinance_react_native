import { createNativeStackNavigator } from '@react-navigation/native-stack';

import  Welcome  from "../pages/Welcome";
import  Home  from "../pages/Home";
import  Grafic  from "../pages/Grafic";

const Stack = createNativeStackNavigator();

export default function Routes() {
  
  return (
    <Stack.Navigator>
        <Stack.Screen 
         name="Welcome" 
         component={Welcome} 
         options={{ headerShown: false}}
        />

        <Stack.Screen 
           name="Home" 
           component={Home}
           options={{ headerShown: false}}
         />

        <Stack.Screen 
           name="Grafic" 
           component={Grafic}
           //options={{ headerShown: false}}
         />
    </Stack.Navigator>
  );
}