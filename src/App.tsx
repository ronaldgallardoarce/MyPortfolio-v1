import { Routes } from 'react-router'
import './App.css'
import { Route } from 'react-router'
import Home from './pages/home'
import MainLayout from './layout/layout'

function App() {

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index path='/' element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
