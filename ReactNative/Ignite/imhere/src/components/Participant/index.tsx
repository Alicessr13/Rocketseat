import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props = { //tipando o name de props
    name: string;
    onRemove: () => void;
}

export function Participant(props: Props) { //props = propriedades, arquivo tsx leva em consideração a tipagem
    return (
        <View style={styles.container}>
            <Text style={styles.name}>
                {props.name}
            </Text>

            <TouchableOpacity style={styles.button} onPress={props.onRemove}>
                <Text style={styles.buttonText}>
                    -
                </Text>
            </TouchableOpacity>
        </View>
    );
}

// export function Participant({ name }: Props) { //props = propriedades, arquivo tsx leva em consideração a tipagem
//     return (
//         <View style={styles.container}>
//             <Text style={styles.name}>
//                 {name}
//             </Text>

//             <TouchableOpacity style={styles.button}>
//                 <Text style={styles.buttonText}>
//                     -
//                 </Text>
//             </TouchableOpacity>
//         </View>
//     );
// }