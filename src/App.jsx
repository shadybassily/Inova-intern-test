import HomePage from './pages/HomePage';

import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const client = new QueryClient();
function App() {
   return (
      <div className='bg-black text-white color-white'>
         <QueryClientProvider client={client}>
            <BrowserRouter>
               <HomePage />
            </BrowserRouter>
         </QueryClientProvider>
      </div>
   );
}

export default App;
