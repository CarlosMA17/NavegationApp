import { createDrawerNavigator } from "@react-navigation/drawer";
import SettingsScreen from "../SettingsScreen";

const drawer = createDrawerNavigator()

export function DrawerNavigator() {
    
    return (
        <drawer.Navigator>
            <drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        </drawer.Navigator>
    )
}