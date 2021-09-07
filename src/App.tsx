import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

import {AuthContextProvider} from './contexts/AuthContext'
import { Room } from './pages/Rooms';
import { AdminRoom } from './pages/AdminRoom';

// dentro do parametro do createContext estou armazenando somente o tipo de dado que será armazenado. no caso uma string





function App() {

  return (
    // todo provider precisa de um valor inicial
    <BrowserRouter>
    {/* exact = por padrão sempre vai ser true, quando for false precisamos especificar (exact ={false}) */}
    <AuthContextProvider>
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/rooms/new" component={NewRoom} />
    <Route path="/rooms/:id" component={Room} />


    <Route path="/admin/rooms/:id" component={AdminRoom} />
    </Switch>{/*vai buscar apenas por uma rota e não vai permitir que sejam exibidas mais do q uma */}
    </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
