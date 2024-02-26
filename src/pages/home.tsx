import React from 'react';
import ProtectedRoute from '../components/ProtectedRoute';

const HomePage: React.FC = () => {
    return (
        <ProtectedRoute>
            <div>
                <h1>Welcome to the Home Page!</h1>
                <p>This is the protected home page.</p>
            </div>
        </ProtectedRoute>
    );
};

export default HomePage;