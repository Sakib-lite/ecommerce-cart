import { useSnackbar } from 'notistack';
import React, { Fragment, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../utils/store/ui-slice';

type a = {
  name: string;
  email: string;
  age: number;
  password: string;
};

export default function Registration(): JSX.Element {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<a>();

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
const dispatch = useDispatch();


  async function createUser(
    name: string,
    email: string,
    age: number,
    password: string
  ) {
    try {
      const response = await fetch('/api/auth/registration', {
        method: 'POST',
        body: JSON.stringify({ name, email, age, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      const message = await response.text();
      //   const data = await response.json();

      console.log(message);
      if (!response.ok) {
        enqueueSnackbar(message, {
          variant: 'warning',
          autoHideDuration: 3000,
          persist: false,
        });
        return;
      }
      return message;
    } catch (err) {
      console.log(err);
    }
  }

useEffect(() => {

  dispatch(uiActions.hideLoginModal())
},[dispatch])

  const submitHandler = async (data: a) => {
    const { name, email, age, password } = data;

    const user = await createUser(name, email, age, password);

    if (user) {
      enqueueSnackbar(user, {
        variant: 'success',
        autoHideDuration: 3000,
        persist: false,
      });

      setValue('name', '');
      setValue('email', '');
      setValue('password', '');
      setValue('age', 0);
    }
  };

  return (
    <Fragment>
      <div className='md:py-10'>
        <section className='max-w-2xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 '>
          <h2 className='text-lg font-semibold text-gray-700 capitalize dark:text-white mb-10'>
            Account settings
          </h2>

          <form onSubmit={handleSubmit(submitHandler)}>
            <div className=''>
              <div>
                <label className='text-gray-700 dark:text-gray-200'>name</label>
                <input
                  id='username'
                  type='text'
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                  {...register('name', {
                    required: 'This field is empty',
                    minLength: {
                      value: 5,
                      message: 'name has to be atleast 5 characters long',
                    },
                  })}
                />
                {errors.name && (
                  <p className='text-red-500 text-base'>
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className='text-gray-700 dark:text-gray-200'>
                  Email Address
                </label>
                <input
                  id='emailAddress'
                  type='email'
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                  {...register('email', {
                    required: 'This field is empty',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'invalid email address',
                    },
                  })}
                />

                {errors.email ? (
                  errors.email.type === 'pattern' ? (
                    <p className='text-red-500'> Email is not valid </p>
                  ) : (
                    <p className='text-red-500'> Email is required </p>
                  )
                ) : (
                  ''
                )}
              </div>

              <div>
                <label className='text-gray-700 dark:text-gray-200'>Age</label>
                <input
                  type='number'
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                  {...register('age', {
                    required: 'This field is empty',
                    valueAsNumber: true,
                  })}
                />

                {errors.email && (
                  <p className='text-red-500 text-base'>
                    {errors.email.message}{' '}
                  </p>
                )}
              </div>
              <div>
                <label className='text-gray-700 dark:text-gray-200'>
                  Password
                </label>
                <input
                  id='password'
                  type='password'
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                  {...register('password', {
                    required: 'This field is empty',
                    minLength: {
                      value: 3,
                      message: 'password has to be at least 3 characters',
                    },
                  })}
                />
                {errors.password && (
                  <p className='text-red-500 text-base'>
                    {errors.password.message}{' '}
                  </p>
                )}
              </div>
            </div>

            <div className='flex justify-end mt-6'>
              <button className='px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                Submit
              </button>
            </div>
          </form>
        </section>
      </div>
    </Fragment>
  );
}