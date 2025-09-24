import { Routes } from 'react-router'
import './App.css'
import { Route } from 'react-router'
import Home from './pages/home'
import MainLayout from './layout/layout'
import { useTheme } from './hooks/useResolvedTheme'

function App() {
  const {
    resolvedTheme
  } = useTheme()

  if (!resolvedTheme) return null;

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index path='/' element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
