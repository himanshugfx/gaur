import { cookies } from 'next/headers';
import { verifyToken } from '@/lib/auth';

export async function getAdminSession() {
    const cookieStore = await cookies();
    const token = cookieStore.get('admin_token')?.value;

    if (!token) return null;

    return await verifyToken(token);
}

export async function isAdmin() {
    const session = await getAdminSession();
    return !!session;
}

export async function requireAdmin() {
    const session = await getAdminSession();
    if (!session) {
        throw new Error('Unauthorized: Admin access required');
    }
    return true;
}
