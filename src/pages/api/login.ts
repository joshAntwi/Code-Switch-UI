import { NextApiRequest, NextApiResponse } from 'next';
import { authenticateUser } from '../../services/authService';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email, password } = req.body;
        try {
            const token = await authenticateUser(email, password);
            res.status(200).json({ token });
        } catch (error) {
            res.status(401).json({ error: 'Authentication failed' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
