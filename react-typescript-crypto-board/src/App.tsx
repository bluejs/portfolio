import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HomePage } from './components/HomePage';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient} >
      <HomePage />
    </QueryClientProvider >
  );
}

export default App;
