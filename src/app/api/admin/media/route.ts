import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAdmin } from '@/lib/admin/auth';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
    try {
        await requireAdmin();

        const formData = await request.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json({ error: 'No file provided' }, { status: 400 });
        }

        // Validate file size (e.g., 5MB)
        const MAX_SIZE = 5 * 1024 * 1024;
        if (file.size > MAX_SIZE) {
            return NextResponse.json({ error: 'File too large' }, { status: 400 });
        }

        const buffer = Buffer.from(await file.arrayBuffer());
        const data = buffer.toString('base64');

        const media = await prisma.media.create({
            data: {
                name: file.name,
                mimeType: file.type,
                data: data,
                size: file.size,
            },
        });

        return NextResponse.json({ id: media.id });
    } catch (error) {
        console.error('Media upload error:', error);
        return NextResponse.json(
            { error: (error as Error).message || 'Failed to upload media' },
            { status: 500 }
        );
    }
}
