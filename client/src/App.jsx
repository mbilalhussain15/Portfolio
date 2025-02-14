import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Layout from './pages/layout.jsx';
import Home from './pages/Home.jsx'; // Your Home component path
import Contact from './pages/Contact.jsx';
import Background from './components/Background/background.jsx';
import Portfolio from './components/Portfolio/portfolio.jsx';


const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/background" element={<Background />} />
            <Route path="/portfolio" element={<Portfolio />} />
            {/* Add other routes here as needed */}
          </Routes>
        </Layout>
      
      </Router>
    </QueryClientProvider>
  );
};

export default App;
