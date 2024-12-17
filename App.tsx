import { StatusBar } from 'react-native'; //para deixar visivel a barra de status do celular
import { Home } from './src/screens/Home'

export default function App() {
  return (
    <>
    <StatusBar
       barStyle='light-content' 
       backgroundColor='transparent'
       translucent={true}
    />
      <Home />
    </>
  );
}
