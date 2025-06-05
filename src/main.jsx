import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './pages/auth/SignUp.jsx'
import HomePage from './pages/HomePage.jsx'
import SignIn from './pages/auth/SignIn.jsx'
import ForgotPassword from './pages/auth/ForgotPassword.jsx'
import ResetCode from './pages/auth/ResetCode.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<App />}>
          <Route path={''} element={<HomePage/>}></Route>
          <Route path={'home'} element={<HomePage/>}></Route>
          <Route path={'/auth'}>
            <Route path={'sign-up'} element={<SignUp/>}></Route>
            <Route path={'sign-in'} element={<SignIn/>}></Route>
            <Route path={'forgot-password'} element={<ForgotPassword/>}></Route>
            <Route path={'reset-code'} element={<ResetCode/>}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
