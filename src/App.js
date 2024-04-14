import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { HookCakeContainer } from './components/HooksCakeContainer';
import { HookIceCreamContainer } from './components/HookIceCreamContainer';
import CookieContainer from './components/CookieContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HookCakeContainer />
        <CakeContainer />
        <HookIceCreamContainer />
        <CookieContainer />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
