import { Text, View, StyleSheet } from "react-native"

export default function App() { //função inicial padrão tem nome app
  return ( //onde ficam os elementos, não pode retornar mais de um da pra usar <> </> 
    //para usar tag na linha style={{  flex: 1, backgroundColor: '#131016'  }}
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>
      <Text style={styles.eventDate}>
        Domingo, 24 de Novembro de 2024
      </Text>
    </View>
    //<view> = como se fosse uma div
    //para criar componentes precisa o arquivo estar em extensão tsx
    //key = identificador unico
  )
}

const styles = StyleSheet.create({ //objeto com as regras, equivalente a usar um arquivo separado para os estilos
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24 //no react não uma unidade de medida, em android e IOS tem uma unidade idependente de densidade de pixels, renderiza os elementos de forma proporcional
    //por isso não coloca a unidade que e um tamanho independente de pixel
  },

  eventName: {
    color: '#fdfcfe',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },

  eventDate: {
    color: '#6b6b6b',
    fontSize: 16
  }
});