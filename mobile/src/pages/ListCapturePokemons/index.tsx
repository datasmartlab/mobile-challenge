import {
    Text,
    VStack,
    HStack,
    Divider,
    View,
    Button,
    CloseIcon,
} from 'native-base';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { upperCaseFirstCharacter } from '../../functions';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PokemonScreenNavigationProp } from '../../routes';
import { useState } from 'react';
import { DeleteDialog } from './DeleteDialog';

export function ListCapturePokemons() {
    const navigation = useNavigation<PokemonScreenNavigationProp>();

    const data = useSelector(
        (state: RootState) => state.pokemons.chosenPokemon,
    );
    const [isOpen, setIsOpen] = useState(false);
    const [index, setIndex] = useState(0);
    const onClose = () => setIsOpen(false);

    return (
        <View>
            <VStack marginTop={3} space={3} divider={<Divider />}>
                {data.map((item, index) => {
                    return (
                        <HStack paddingX={6} justifyContent="space-between">
                            <Text fontSize={30}>
                                {upperCaseFirstCharacter(item.name)}
                            </Text>
                            <View
                                display="flex"
                                flexDirection="row"
                                style={{ gap: 20 }}
                            >
                                <Button
                                    colorScheme="success"
                                    onPress={() => {
                                        navigation.navigate('pokemon', {
                                            url: item.url,
                                        });
                                    }}
                                >
                                    <Text color="white">Infomações</Text>
                                </Button>
                                <TouchableOpacity
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                    onPress={() => {
                                        setIndex(index);
                                        setIsOpen(!isOpen);
                                    }}
                                >
                                    <CloseIcon size={8} color="red.500" />
                                </TouchableOpacity>
                            </View>
                        </HStack>
                    );
                })}
            </VStack>
            {isOpen ? (
                <DeleteDialog index={index} isOpen={isOpen} onClose={onClose} />
            ) : null}
        </View>
    );
}
