import { useState } from 'react';
import { Animated, Easing } from 'react-native';
import { View } from 'native-base';

export function Loading() {
    const [spinValue] = useState(new Animated.Value(0));

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    Animated.loop(
        Animated.timing(spinValue, {
            toValue: 1000,
            duration: 1000000,
            easing: Easing.linear,
            useNativeDriver: true,
        }),
    ).start();

    return (
        <View
            pointerEvents="none"
            flex={1}
            alignItems="center"
            zIndex={1}
            top="24"
        >
            <Animated.Image
                source={require('../../images/pokeBall.png')}
                style={{
                    width: '70%',
                    resizeMode: 'contain',
                    transform: [{ rotate: spin }],
                }}
            />
        </View>
    );
}
