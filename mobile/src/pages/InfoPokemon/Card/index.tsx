import { SvgUri } from 'react-native-svg';
import { View, Text, Center, Progress } from 'native-base';
import { pokemonData } from '../../../redux/pokemon/reducers';
import { colors } from './style';

interface CardProps {
    data: pokemonData;
}

interface StatusPercentages {
    hp: number;
    attack: number;
    defense: number;
    'special-attack': number;
    'special-defense': number;
    speed: number;
}

export function Card({ data }: CardProps) {
    const statusPercentage: StatusPercentages = {
        hp: 0,
        attack: 0,
        defense: 0,
        'special-attack': 0,
        'special-defense': 0,
        speed: 0,
    };

    for (let count = 0; count < data.stats.length; count++) {
        const result = parseInt(data.stats[count].base_stat);

        statusPercentageCount(result, count);
    }

    function statusPercentageCount(num: number, position: number) {
        switch (position) {
            case 0:
                statusPercentage['hp'] = (num / 255) * 100;
                break;
            case 1:
                statusPercentage['attack'] = (num / 190) * 100;
                break;
            case 2:
                statusPercentage['defense'] = (num / 230) * 100;
                break;
            case 3:
                statusPercentage['special-attack'] = (num / 194) * 100;
                break;
            case 4:
                statusPercentage['special-defense'] = (num / 230) * 100;
                break;
            case 5:
                statusPercentage['speed'] = (num / 160) * 100;
                break;
        }
    }
    return (
        <View
            backgroundColor={
                colors[data.types[0].type.name as keyof typeof colors]
            }
            paddingBottom={4}
            borderRadius={6}
            borderWidth={2}
            marginBottom={4}
        >
            <Center>
                <Text color="white" bold fontSize={40} marginBottom={5}>
                    {data.name}
                </Text>

                <SvgUri
                    width={340}
                    height={340}
                    style={{ backgroundColor: 'white' }}
                    uri={data.sprites.other.dream_world.front_default}
                />
            </Center>

            <View paddingX={6}>
                <Text color="#d4d4d4" bold fontSize={30} marginBottom={2}>
                    Status:
                </Text>

                {data.stats.map((item) => {
                    return (
                        <View
                            display="flex"
                            justifyContent="space-between"
                            flexDirection="row"
                            alignItems="center"
                            key={item.stat.name}
                        >
                            <Text
                                color="#d4d4d4"
                                paddingX={2}
                                fontSize={18}
                                key={item.stat.name}
                            >
                                {item.stat.name} - {item.base_stat}
                            </Text>
                            <Progress
                                width={40}
                                size="sm"
                                value={
                                    statusPercentage[
                                        item.stat
                                            .name as keyof typeof statusPercentage
                                    ]
                                }
                            />
                        </View>
                    );
                })}
            </View>
        </View>
    );
}
