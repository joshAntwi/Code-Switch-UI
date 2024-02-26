import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { authenticateUser } from '../services/authService';
import Button from '@/components/buttons';
import Link from 'next/link';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Your login logic goes here
    // If login is successful, router to the homepage
    // For demonstration, we're using a timeout to simulate a successful login
    try {
      // Call authentication service with email and password
      const token = await authenticateUser(email, password);
      // If authentication is successful, store token in local storage
      localStorage.setItem('token', token);
      // Redirect to home page
      router.push('/home');
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className='bg-black h-screen'>
      <img className='pb-4 bg-black' src='/logo.svg' alt='Example SVG' />
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit} method='post' className='flex flex-col items-center h-2/4'>
        <div className='flex flex-col px-8 gap-4 w-5/6 h-1/4'>
          <input className='text-black rounded h-1/3 pl-2' type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' />
          <input className='text-black rounded h-1/3 pl-2' type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
        </div>
        <div className='flex flex-col px-8 gap-4 text-white'>
          <button type='submit'>Login</button>
          <Link href='#'>
            Forgot password?
          </Link>
        </div>
        <div className='flex flex-col pt-8 gap-4 h-2/4'>
          <Button
            text='Log in with Apple'
            font='Arial'
            fontWeight='bold'
            textColor='white'
            buttonColor='black'
            border='0.125rem solid #e3e3e3'
            svg={<img src='/apple.svg' alt='Icon' />}
            fullWidth
          />
          <Button
            text='Continue with Google'
            font='Arial'
            fontWeight='bold'
            textColor='white'
            buttonColor='black'
            border='0.125rem solid #e3e3e3'
            svg={<img src='/google.svg' alt='Icon' />}
            fullWidth
          />
        </div>



      </form>
    </div>
  );
};

export default LoginForm;
