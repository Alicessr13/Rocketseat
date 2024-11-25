import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({ //objeto com as regras, equivalente a usar um arquivo separado para os estilos
    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 24 //no react não uma unidade de medida, em android e IOS tem uma unidade idependente de densidade de pixels, renderiza os elementos de forma proporcional
      //por isso não coloca a unidade que e um tamanho independente de pixel
    },
  
    eventName: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48
    },
  
    eventDate: {
      color: '#6b6b6b',
      fontSize: 16
    },

    input: {
        flex: 1,
        backgroundColor: '#1f1e25',
        height: 56,
        borderRadius: 5,
        color: '#fff',
        padding: 16,
        fontSize: 16,
        marginRight: 12
    },

    buttonText: {
        color: '#fff',
        fontSize: 24
    },

    button:{
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#A020F0',
        alignItems: 'center',
        justifyContent: 'center'
    },

    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42
    },

    listEmptyText: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center'
    }
  });