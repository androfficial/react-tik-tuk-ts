import withErrorApi from 'hoc/withErrorApi';
import { Feed, UserProfile } from 'pages';
import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import addMarginRight from 'services/addMarginRight';

import { Header, NotFound } from '..';

const App = () => {
  useEffect(() => {
    addMarginRight();
  }, []);

  return (
    <>
      <Header />
      <main className='page'>
        <section className='page__main main'>
          <div className='main__container _container'>
            <div className='main__wrapper'>
              <Routes>
                <Route path='/' element={<Navigate to='/feed' />} />
                <Route path='/feed' element={<Feed />} />
                <Route path='/@:uniqueName' element={<UserProfile />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default withErrorApi(App);
