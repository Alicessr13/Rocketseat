import { Text, View, TextInput, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { styles } from './styles';
import { Participant } from "../../components/Participant";

export default function Home() {

    const participants = ['Rodrigo', 'Alice', 'Diego', 'Biro', 'Vini', 'Isa', 'Jack', 'Malia', 'Artur', 'Gabi', 'Graziella'];

    function handleParticipantAdd() {
        console.log("Você clicou no botão");
    }

    function handleParticipantRemove(name: string) {
        console.log(`Você clicou no botão remover ${name}`);
    }

    return ( //onde ficam os elementos, não pode retornar mais de um da pra usar <> </> 
        //para usar tag na linha style={{  flex: 1, backgroundColor: '#131016'  }}
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do evento
            </Text>
            <Text style={styles.eventDate}>
                Domingo, 24 de Novembro de 2024
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6b6b6b"
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            {/* <ScrollView showsVerticalScrollIndicator={false}>
                {
                    participants.map(participant => (
                        <Participant key={participant} name={participant} onRemove={() => handleParticipantRemove(participant)}></Participant>
                    ))
                }
            </ScrollView> */}

            <FlatList data={participants} keyExtractor={item => item} renderItem={({ item }) => (
                <Participant key={item} name={item} onRemove={() => handleParticipantRemove(item)}></Participant>
            )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => {
                    return <Text style={styles.listEmptyText}>
                        Adicione participantes da sua lista de presença.
                    </Text>
                }}
            />

        </View>
        //<view> = como se fosse uma div
        //para criar componentes precisa o arquivo estar em extensão tsx
        //key = identificador unico
        //keyboardType = muda o teclado quando o usuário for digitar no input
        //<TouchableOpacity> = região clicavel 
        //onPress = faz algo quando é pressionado 
        //por padrão o flex-direction e em column
        //ScrollView = barra de rolagem, showsVerticalScrollIndicator={false} = esconde a barra de rolagem
        //scrollview quando não cabe na tela ele cria a barra de rolagem, carrega todos os elementos mesmo que não estejam visiveis na tela
        //flatlist adiciona rolagem também, mas só renderiza o que cabe na tela, os outros itens renderiza aos poucos, quando ele aparece na tela, melhor desempenho para listas grandes
    )
}