import { NativeBaseProvider } from 'native-base';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import Routes from './src/routes';
export default function App() {
    return (
        <Provider store={store}>
            <NativeBaseProvider isSSR={false}>
                <Routes />
            </NativeBaseProvider>
        </Provider>
    );
}
