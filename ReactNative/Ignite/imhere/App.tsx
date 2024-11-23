import { Text, View } from "react-native"

export default function App() { //função inicial padrão tem nome app
  return ( //onde ficam os elementos, não pode retornar mais de um da pra usar <> </> 
    //para usar tag na linha style={{}}
    <View style={{
      flex: 1,
      backgroundColor: '#131016'
    }}>
      <Text>React Native</Text>
      <Text>JavaScript</Text>
    </View>
    //<view> = como se fosse uma div
    //para criar componentes precisa o arquivo estar em extensão tsx
    //key = identificador unico
  )
}
