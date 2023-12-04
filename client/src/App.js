import './App.css';
import Header from './Components/Header';
import Layout from './Components/Layout';
import Post from './Components/Post';
import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

// BrowserRouter е в index.js 
function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<IndexPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
            </Route>
        </Routes>


    );
}

export default App;
