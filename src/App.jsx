import{BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import  Cadastro from './pages/Cadastro'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Header from './components/header'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
