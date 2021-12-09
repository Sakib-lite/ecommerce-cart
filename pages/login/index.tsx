import type { NextPage } from 'next';
import { Fragment } from 'react';
import LoginPage from '../../components/user/LoginPage';
import styles from '../../components/svg/blob-scene.module.css';

const Home: NextPage = () => {
  return (
    <Fragment>
      <div className={`${styles.blob} min-h-screen`}>
        <div className='flex justify-around item-center pt-8'>
          <LoginPage />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;