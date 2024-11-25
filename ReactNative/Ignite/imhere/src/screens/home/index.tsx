import { Text, View, TextInput, TouchableOpacity, ScrollView } from "react-native";
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

            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    participants.map(participant => (
                        <Participant key={participant} name={participant} onRemove={() => handleParticipantRemove(participant)}></Participant>
                    ))
                }
            </ScrollView>

        </View>
        //<view> = como se fosse uma div
        //para criar componentes precisa o arquivo estar em extensão tsx
        //key = identificador unico
        //keyboardType = muda o teclado quando o usuário for digitar no input
        //<TouchableOpacity> = região clicavel 
        //onPress = faz algo quando é pressionado 
        //por padrão o flex-direction e em column
        //ScrollView = barra de rolagem, showsVerticalScrollIndicator={false} = esconde a barra de rolagem
    )
}