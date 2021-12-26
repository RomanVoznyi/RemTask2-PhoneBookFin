import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './Components/Header';
import Fallback from './Components/Fallback';
import { getCurrent } from './redux/auth/auth-operation';
import { isLoggedIn } from './redux/auth/auth-selector';

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
const PhonebookView = lazy(() =>
  import('./Views/PhonebookView' /* webpackChunkName: "phonebook-view" */),
);
const NotFoundView = lazy(() =>
  import('./Views/NotFoundView' /* webpackChunkName: "notfound-view" */),
);

function App() {
  const dispatch = useDispatch();
  const loggedIn = useSelector(state => isLoggedIn(state));

  useEffect(() => {
    dispatch(getCurrent());
  });

  return (
    <div className="App">
      <ToastContainer autoClose={2000} />
      <Header />
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route
            path="/register"
            element={!loggedIn ? <RegisterView /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={!loggedIn ? <LoginView /> : <Navigate to="/" />}
          />
          <Route
            path="/phonebook"
            element={loggedIn ? <PhonebookView /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
