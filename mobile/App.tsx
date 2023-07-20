import { NativeBaseProvider } from 'native-base';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from './src/routes';

export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <Provider store={store}>
            <NativeBaseProvider isSSR={false}>
                <Routes />
            </NativeBaseProvider>
        </Provider>
    );
}
