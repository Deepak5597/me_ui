import Dashboard from './components/Dashboard';
import { AuthContextProvider } from './contexts/AuthContext';
import { GlobalContextProvider } from './contexts/GlobalContext';
import { ConfigContextProvider } from './contexts/ConfigContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import NotFound from './components/NotFound';
import Login from './components/Login';
import UnAuthorized from './components/UnAuthorized';
import ProtectedRoute from './components/ProtectedRoute';
import Party from './components/Party';
import Redirect from './components/Redirect';

function App() {
  return (
    <BrowserRouter>
      <ConfigContextProvider>
        <GlobalContextProvider>
          <AuthContextProvider>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/unauthorise" element={<UnAuthorized />} />
              <Route element={<Layout />}>
                {/* Protected Routes */}
                <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
                  <Route path="/" exact element={<Redirect pathname="/dashboard" />} />
                  <Route path="/dashboard" exact element={<Dashboard />} />
                  <Route path="/party" element={<Party />}>
                  </Route>
                </Route>
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthContextProvider>
        </GlobalContextProvider>
      </ConfigContextProvider>
    </BrowserRouter>
  );
}

export default App;
