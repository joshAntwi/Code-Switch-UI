import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Custom404 = () => {
    const router = useRouter();

    useEffect(() => {
        // Redirect to the index page on mount
        router.push('/');
    }, []);

    return null; // No need to render anything
};

export default Custom404;
