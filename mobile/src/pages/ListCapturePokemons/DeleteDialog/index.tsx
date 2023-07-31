import { AlertDialog, Button, Center } from 'native-base';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { Alert } from '../../../components/Alert/index';
import { actions } from '../../../redux/pokemon/slice';

interface DeleteDialogPorps {
    index: number;
    isOpen: boolean;
    onClose: () => void;
}

export function DeleteDialog({ isOpen, onClose, index }: DeleteDialogPorps) {
    const dispatch = useDispatch();
    const { removePokemonOnList } = actions;
    const cancelRef = useRef(null);

    function RemovePokemon() {
        dispatch(removePokemonOnList(index));
        Alert({
            message: 'O pokémon foi liberado com sucesso!',
            color: 'success',
        });
        onClose();
    }
    return (
        <Center>
            <AlertDialog
                leastDestructiveRef={cancelRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <AlertDialog.Content>
                    <AlertDialog.CloseButton />
                    <AlertDialog.Header>Liberar pokémon</AlertDialog.Header>
                    <AlertDialog.Body>
                        Tem certeza que deseja soltar o pokémon
                    </AlertDialog.Body>
                    <AlertDialog.Footer>
                        <Button.Group space={2}>
                            <Button
                                variant="unstyled"
                                colorScheme="coolGray"
                                onPress={onClose}
                                ref={cancelRef}
                            >
                                Cancel
                            </Button>
                            <Button
                                colorScheme="danger"
                                onPress={RemovePokemon}
                            >
                                Liberar
                            </Button>
                        </Button.Group>
                    </AlertDialog.Footer>
                </AlertDialog.Content>
            </AlertDialog>
        </Center>
    );
}
