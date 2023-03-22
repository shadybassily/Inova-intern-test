import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const client = new QueryClient();
function App() {
   return (
      <div className="bg-black text-white color-white">
         <QueryClientProvider client={client}>
            <BrowserRouter>
               <Navbar />
               <HomePage />
            </BrowserRouter>
         </QueryClientProvider>
      </div>
   );
}

export default App;
