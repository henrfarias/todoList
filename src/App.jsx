import Routes from './routes';
import GlobalStyle from './styles/GlobalStyle';
import { TodoProvider } from './context/TodoList';

function App() {
  return (
    <>
    <GlobalStyle />
    <TodoProvider>
      <Routes />
    </TodoProvider>
  </>
  )
}

export default App;
