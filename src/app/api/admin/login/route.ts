
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyPassword, signToken } from '@/lib/auth'
import { cookies } from 'next/headers'

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json()

        if (!email || !password) {
            return NextResponse.json({ message: 'Missing fields' }, { status: 400 })
        }

        const admin = await prisma.admin.findUnique({
            where: { email },
        })

        if (!admin) {
            return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 })
        }

        const isValid = await verifyPassword(password, admin.passwordHash)

        if (!isValid) {
            return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 })
        }

        const token = await signToken({ id: admin.id, email: admin.email })

        // Await the cookies() promise (Next.js 15+ requirement, good practice for 16 too)
        const cookieStore = await cookies()

        cookieStore.set('admin_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24, // 24 hours
            path: '/',
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Login error:', error)
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
    }
}
