import { Routes, Route } from 'react-router-dom'
import { LoginPage } from "./pages/login"
import { HomePage } from "./pages/home"
import { SignUpPage } from "./pages/sign"
import { ProfilePage } from "./pages/profile"
import { SettingsPage } from "./pages/settings"
import { ProtectedRoute } from './Context/ProtectedRoute'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/register' element={<SignUpPage/>} />
      <Route
        path='/profile'
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }
      />
      <Route
        path='/settings'
        element={
          <ProtectedRoute>
            <SettingsPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
