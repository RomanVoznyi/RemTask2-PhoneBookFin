import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Fallback from './Components/Fallback';
import { getError } from './redux/auth/auth-selector';
import { getCurrent } from './redux/auth/auth-operation';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomeView = lazy(() =>
  import('./Views/HomeView' /* webpackChunkName: "home-view" */),
);
const RegisterView = lazy(() =>
  import('./Views/RegisterView' /* webpackChunkName: "register-view" */),
);
const LoginView = lazy(() =>
  import('./Views/LoginView' /* webpackChunkName: "login-view" */),
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrent());
  });

  return (
    <div className="App">
      <ToastContainer autoClose={2000} />
      <Header />
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route path="/register" element={<RegisterView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/" element={<HomeView />} />
        </Routes>
      </Suspense>
      {getError.status && <p>{getError.message}</p>}
    </div>
  );
}

export default App;
