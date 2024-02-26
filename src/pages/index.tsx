import Button from '@/components/buttons';
import React from 'react';
import { useRouter } from 'next/router';
import { signInWithGoogle, signInWithApple } from '../services/authService';
import Link from 'next/link';

const SignIn: React.FC = () => {

    const router = useRouter();

    const handleButtonClick = () => {
        router.push('/login');
    };

    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle(); // Call function to initiate Google sign-in
        } catch (error) {
            console.error('Google sign-in failed:', error);
        }
    };

    const handleAppleSignIn = async () => {
        try {
            await signInWithApple(); // Call function to initiate Apple sign-in
        } catch (error) {
            console.error('Apple sign-in failed:', error);
        }
    };

    return (
        <div>
            <img className='pb-4 bg-black' src='/logo.svg' alt='Example SVG' />
            <div className='w-screen h-screen bg-black px-20 flex flex-col items-center space-y-4'>
                <Button
                    text='Sign up for free'
                    font='Arial'
                    fontWeight='bold'
                    textColor='black'
                    buttonColor='#2272ff'
                    onClick={handleButtonClick}
                    fullWidth
                />
                <Button
                    text='Log in with Apple'
                    font='Arial'
                    fontWeight='bold'
                    textColor='white'
                    buttonColor='black'
                    border='0.125rem solid #e3e3e3'
                    svg={<img src='/apple.svg' alt='Icon' />}
                    onClick={handleAppleSignIn}
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
                    onClick={handleGoogleSignIn}
                    fullWidth
                />
                <Link className='text-white' href='/login'>
                    Login with email
                </Link>
            </div>
        </div>
    );
};

export default SignIn;
