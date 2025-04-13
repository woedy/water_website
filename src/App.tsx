import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';

import DefaultLayout from './layout/DefaultLayout';
import SignUp from './pages/Authentication/SignUp';
import SignIn from './pages/Authentication/SignIn';


const hiddenOnRoutes = [
  '/',
  '/signup',
  '/verify-user',

];

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  // Determine if the current route should skip the layout
  const shouldUseDefaultLayout = !hiddenOnRoutes.includes(location.pathname);

  return loading ? (
    <Loader />
  ) : shouldUseDefaultLayout ? (
    <DefaultLayout hiddenOnRoutes={hiddenOnRoutes}>
      <Routes>
 
     
    
      </Routes>
    </DefaultLayout>
  ) : (
    <>
      <Routes>
   

        <Route
          index
          element={
            <>
              <PageTitle title="Sign In | Clean Water Ghana" />
              <SignIn />
            </>
          }
        />

        <Route
          path="/signup"
          element={
            <>
              <PageTitle title="Sign Up | Clean Water Ghana" />
              <SignUp />
            </>
          }
        />



   


   

  


      </Routes>
    </>
  );
}

export default App;
