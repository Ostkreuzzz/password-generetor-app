import { Main } from '@components/Main';
import { GlobalProvider } from 'ContextProvider/GlobalContext';

export function App() {
  return (
    <GlobalProvider>
      <Main />
    </GlobalProvider>
  );
}
