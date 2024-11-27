import { Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from "react-native";
import { styles } from './styles';
import { Participant } from "../../components/Participant";
import { useState } from "react";

export default function Home() {

    //const [estado, atualizaEstado] = useState();
    const [participants, setParticipants] = useState<string[]>([]);
    //<string[]> = define o tipo do array
    const [participantName, setParticipantName] = useState('');

    function handleParticipantAdd() {
        if (participants.includes(participantName)) {
            return Alert.alert("Participante Existente", "Já existe um participante com esse nome");
            //return para/stop a função
        }

        //alterações nas variaveis tradicionais/simples não gera renderização para refletir nas váriaveis 
        setParticipants(prevState => [...prevState, participantName]);
        // setparticipants + função que acessa o conteudo atual do estado e cria um novo array com o conteudo atual mais o conteudo novo
        // ... para desestruturar, coloca o novo valor no mesmo nivel do que ja tinha

        setParticipantName('');
    }

    function handleParticipantRemove(name: string) {
        //return console.log(participants.filter(participant => participant !== name));



        //primeira posição titulo, segunda a mensagem, terceira botões da pra colocar um array com as condições
        Alert.alert("Removendo", `Remover o participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
                //retorna para o estado todos os participantes menos o do filtro
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ]);
        console.log(`Você clicou no botão remover ${name}`);
    }

    function handleState(value: string) {

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
                    onChangeText={setParticipantName}//pode passar só o nome da função que atualiza o estado
                    //onChangeText={text => setParticipantName(text)}
                    //dispara evento quando o texto do input muda, consigo alterar o texto atual do input

                    value={participantName}
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