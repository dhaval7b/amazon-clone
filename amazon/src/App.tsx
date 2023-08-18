import { ThemeProvider } from '@mui/material';
import React from 'react';
import { theme } from './shared/utils/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/Register.page';
import SignInPage from './pages/SignInPage';
import HomePage from './pages/Home.page';


function App() {
  return (
    <ThemeProvider theme={theme}> 
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={<RegisterPage />} /> 
          <Route path='/signin' element={<SignInPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
