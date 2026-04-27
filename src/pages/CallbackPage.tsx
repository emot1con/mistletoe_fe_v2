import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { setAuthTokens } from '../api/client';
import { useAuth } from '../auth/useAuth';

export default function CallbackPage() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { checkAuth } = useAuth();

    useEffect(() => {
        const accessToken = searchParams.get('access_token');
        const refreshToken = searchParams.get('refresh_token');
        const uid = searchParams.get('uid');

        if (accessToken && refreshToken && uid) {
            setAuthTokens(accessToken, refreshToken, uid);
            checkAuth();        // update AuthContext state
            navigate('/dashboard', { replace: true });
        } else {
            navigate('/', { replace: true });
        }
    }, [searchParams, navigate, checkAuth]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-surface">
            <div className="text-on-surface text-xl font-bold">
                Authenticating...
            </div>
        </div>
    );
}
