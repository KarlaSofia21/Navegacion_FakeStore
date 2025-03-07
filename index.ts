import { registerRootComponent } from 'expo';

import App from './app-temp';
import Login from './app-temp/Screens/Login';
import Tienda from './app-temp/Screens/Tienda';
import ListaProductos from './app-temp/Screens/ListaProductos';
import Pronostico from './app-temp/Screens/Pronostico';
import LoginCuna from './app-temp/Screens/LoginCuna';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(LoginCuna);