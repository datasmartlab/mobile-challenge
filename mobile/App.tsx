import { NativeBaseProvider, Text, Box } from 'native-base';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import { Teste } from './src/pages/teste';

export default function App() {
    return (
        <Provider store={store}>
            <NativeBaseProvider isSSR={false}>
                <Box flex={1} alignItems="center" justifyContent="center">
                    <Teste />
                </Box>
            </NativeBaseProvider>
        </Provider>
    );
}
