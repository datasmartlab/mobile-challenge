import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import {
    Text,
    VStack,
    HStack,
    Divider,
    View,
    Button,
    CloseIcon,
} from 'native-base';
import { DeleteDialog } from './DeleteDialog';
import { RootState } from '@Redux/store';
import { upperCaseFirstCharacter } from '@Functions';
import { useNavigation } from '@react-navigation/native';
import { PokemonScreenNavigationProp } from '@Routes/index';


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
                <HStack key={index} paddingX={6} justifyContent="space-between">
                    <View
                        display="flex"
                        flexDirection="row"
                        justifyContent='space-between'
                        width='100%'
                    >
                        <Text fontSize={35} bold>Nome</Text>
                        <Text fontSize={35} bold>Ações</Text>
                    </View>
                </HStack>
                {data.length?(
                    <View>
                        {data.map((item, index) => {
                            return (
                                <HStack key={index} justifyContent="space-around">
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
                            )
                        })}
                    </View>
                
                ):(
                    <View display='flex' alignItems='center' justifyContent='center' >
                        <Text textAlign='center' fontSize={30} bold color='red.500'>
                            Nenhum Pokémon na lista
                        </Text>
                    </View>
                )
            }
           </VStack>
            {isOpen ? (
                <DeleteDialog index={index} isOpen={isOpen} onClose={onClose} />
            ) : null}
        </View>
    );
}
