import { BrowserRouter, Route } from 'react-router-dom';

import { Button } from './components/Button'
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import './styles/global.scss';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/rooms/new" component={NewRoom} />
    </BrowserRouter>
  );
}

export default App;
