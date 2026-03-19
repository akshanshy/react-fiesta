import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Registration from './pages/Registration.jsx'
import Ongoing from './pages/Ongoing.jsx'
import Upcoming from './pages/Upcoming.jsx'
import Past from './pages/Past.jsx'
import ProtectedRoute from "./components/ProtectedRoute";
import Admin from "./pages/Admin";

function useBodyPageClass() {
  const location = useLocation()

  useEffect(() => {
    const path = location.pathname
    const pageClass =
      path === '/'
        ? 'page-home'
        : path === '/contact'
          ? 'page-contact'
          : path === '/login'
            ? 'page-login'
            : path === '/signup'
              ? 'page-signup'
              : path === '/registration'
                ? 'page-registration'
                : path === '/ongoing'
                  ? 'page-ongoing'
                  : path === '/upcoming'
                    ? 'page-upcoming'
                    : path === '/past'
                      ? 'page-past'
                      : null

    document.body.classList.remove(
      'page-home',
      'page-contact',
      'page-login',
      'page-signup',
      'page-registration',
      'page-ongoing',
      'page-upcoming',
      'page-past'
    )
    if (pageClass) document.body.classList.add(pageClass)
  }, [location.pathname])
}

export default function App() {
  useBodyPageClass()

  return (
  <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/contact" element={<Contact />} />
<Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup />} />

<Route
  path="/admin"
  element={
    <ProtectedRoute>
      <Admin />
    </ProtectedRoute>
  }
/>

<Route
  path="/registration"
  element={
    <ProtectedRoute>
      <Registration />
    </ProtectedRoute>
  }
/>

<Route
  path="/ongoing"
  element={
    <ProtectedRoute>
      <Ongoing />
    </ProtectedRoute>
  }
/>

<Route
  path="/upcoming"
  element={
    <ProtectedRoute>
      <Upcoming />
    </ProtectedRoute>
  }
/>

<Route
  path="/past"
  element={
    <ProtectedRoute>
      <Past />
    </ProtectedRoute>
  }
/>

      {/* legacy html filenames */}
      <Route path="/index.html" element={<Navigate to="/" replace />} />
      <Route path="/contact.html" element={<Navigate to="/contact" replace />} />
      <Route path="/login.html" element={<Navigate to="/login" replace />} />
      <Route path="/signup.html" element={<Navigate to="/signup" replace />} />
      <Route path="/registration.html" element={<Navigate to="/registration" replace />} />
      <Route path="/ongoing.html" element={<Navigate to="/ongoing" replace />} />
      <Route path="/upcoming.html" element={<Navigate to="/upcoming" replace />} />
      <Route path="/past.html" element={<Navigate to="/past" replace />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

