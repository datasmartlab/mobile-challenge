import { Toast, Text, View } from 'native-base';

interface alertProps {
    message: string;
    duration?: number;
    color: 'success' | 'error' | 'warning';
}

export function Alert({ color, message, duration = 5000 }: alertProps) {
    return Toast.show({
        placement: 'top',
        duration,
        render: () => {
            return (
                <View bg={`${color}.600`} p={2} rounded="md" mb={5}>
                    <Text color="white" fontSize={20}>
                        {message}
                    </Text>
                </View>
            );
        },
    });
}
