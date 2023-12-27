'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { setCredentials, removeCredentials } from '@/redux/features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { useLoginMutation } from '@/redux/features/userApi';
import loginImage from '/public/assets/login_hr.jpg';
import irsLogo from '/public/irssmall.png';
import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';

export default function LoginPage({}) {

  const router = useRouter();


  /// initialize

  const dispatch = useDispatch<AppDispatch>();

  /// local state
  const [user, setUser] = React.useState({
    email: '',
    password: '',
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  /// rtk query
  const [loginMutation, { isLoading, isError, error }] = useLoginMutation();

  const onLogin = async () => {
    try {
      setLoading(true);

      const res = await loginMutation(user).unwrap();

      dispatch(setCredentials(res.data));

      console.log(res);
      router.push(`/profile`);
    } catch (error: any) {
      console.log('Error At Login', error.message);
    } finally {
      setLoading(false);
    }
  };
  console.log(isLoading);
  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <section className='flex w-[100vw] flex-col lg:flex-row  items-center gap-14 justify-center min-h-screen py-2 '>
      <div
        style={{ clipPath: 'polygon(0 0, 100% 0%, 71% 100%, 0% 100%)' }}
        className='basis-[70%] h-[97.6vh] bg-white '
      >
        <Image
          src={loginImage}
          alt=''
          className='h-[80%] w-[100%] object-fit'
        />
      </div>
      <div className='basis-[23%]  flex flex-col shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] p-3 rounded-md '>
        <div className='flex-center mb-5'>
          <Image src={irsLogo} alt='' className='w-[3rem]' />
        </div>
        <label htmlFor='email'>email</label>
        <input
          className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black'
          id='email'
          type='text'
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder='email'
        />
        <label htmlFor='password'>password</label>
        <input
          className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black'
          id='password'
          type='password'
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder='password'
        />
        <button
          onClick={onLogin}
          disabled={buttonDisabled}
          className='btn_primary mt-4'
        >
          Login
        </button>
        <Link className='text-center my-5 underline font-bold' href='/signup'>
          Register
        </Link>
      </div>
    </section>
  );
}
