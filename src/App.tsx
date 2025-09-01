import { Routes } from 'react-router'
import './App.css'
import { Route } from 'react-router'
import Home from './pages/home'
import MainLayout from './layout/layout'
import { useResolvedTheme } from './hooks/useResolvedTheme'

function App() {
  const {
    resolved
  } = useResolvedTheme()

  if (!resolved) return null;

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index path='/' element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
