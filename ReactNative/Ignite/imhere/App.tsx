import Home from "./src/screens/home";
import { StatusBar } from "react-native";

export default function App() { //função inicial padrão tem nome app
  return ( //onde ficam os elementos, não pode retornar mais de um da pra usar <> </> 
    <>
      <StatusBar barStyle="light-content" backgroundColor="#c8a2c8" />
      <Home />
    </>
  );
}

//export sem o default (nomeada) pode exportar mais de um elemento que pode ser escolhido, 
//no default não escolhe mas os 2 tipo podem ser usados juntos
//StatusBar altera a barra superior do celular, barStyle altera o estilo da barra