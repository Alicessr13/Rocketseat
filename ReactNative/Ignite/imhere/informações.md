To run your project, navigate to the directory and run one of the following npm commands.

- cd imhere
- npm run android
- npm run ios # you need to use macOS to build the iOS project - use the Expo app if you need to do iOS development without a Mac
- npm run web

criar = npx create-expo-app --template

não usar caminho da pasta com caracteres especiais (Ex: C:/área de trabalho/projeto)

evitar espaços em branco e caracteres especiais no nome do projeto (Ex: C:/users/joão)

não criar projetos em pastas sincronizadas (ex: one drive google drive)

npm i = instala a pasta node_modules de novo

npx expo start = inicia o projeto

hooks = use estados e outros recursos do react sem escrever uma classe, exemplo: useState(armazena estado), useEffect
nome do hook começa com use e em camelCase exemplo: useNomeDoHook

estudar imutabilidade react (substitui o valor antigo pelo novo valor, influencia novas renderizações)

antes dos componentes aparecerem na tela eles são renderizados

componente renderiza quando a aplicação e acionada ou quando o estado/propriedade muda, depois da renderização inicial ele renderiza somente o que muda
