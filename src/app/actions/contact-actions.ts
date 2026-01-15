'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function submitLead(prevState: any, formData: FormData) {
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const companyName = formData.get('companyName') as string
    const message = formData.get('message') as string

    // Simple validation
    if (!name || !email || !message) {
        return { success: false, message: 'Please fill in all required fields.' }
    }

    try {
        // Format message with metadata for admin inquiry page parsing
        const formattedMessage = companyName
            ? `[metadata]:${JSON.stringify({
                hotelName: companyName,
                quantity: 'N/A',
                originalMessage: message
            })}`
            : message;

        await prisma.contactInquiry.create({
            data: {
                name,
                email,
                phone,
                message: formattedMessage,
                status: 'UNREAD',
            },
        })

        revalidatePath('/admin/inquiries')
        return { success: true, message: 'Thank you! We will contact you shortly.' }
    } catch (error) {
        console.error('Inquiry submission error:', error)
        return { success: false, message: 'Something went wrong. Please try again.' }
    }
}
