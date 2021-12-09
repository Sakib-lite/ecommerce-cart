import { useRouter } from 'next/router';
import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../utils/store/ui-slice';

export default function LoginModal() {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <Fragment>
      <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none h-screen w-full'>
        <div className='bg-gray-400 rounded-lg shadow relative dark:bg-gray-700 shodow-2xl'>
          <div className='flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600 px-10 py-10'>
            <div className='p-6 pt-0 text-center'>
              <svg
                className='w-14 h-14 text-gray-400 dark:text-gray-200 mx-auto mb-4'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              <h3 className='text-lg font-semibold text-white mb-5 dark:text-gray-400'>
                Sorry!!! you have to login first
              </h3>
              <button
                data-modal-toggle='popup-modal'
                type='button'
                className='text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 mr-2'
                onClick={() => router.push('/login')}
              >
                Login
              </button>
              <button
                type='button'
                className='text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center'
                onClick={() => dispatch(uiActions.hideLoginModal())}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
