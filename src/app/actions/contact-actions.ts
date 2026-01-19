'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function submitLead(prevState: any, formData: FormData) {
    const name = formData.get('name') as string
    const hotelName = formData.get('hotelName') as string
    const phone = formData.get('phone') as string
    const email = formData.get('email') as string
    const city = formData.get('city') as string
    const message = formData.get('message') as string

    // Get selected categories
    const categories = formData.getAll('categories') as string[]

    // Simple validation
    if (!name || !hotelName || !phone || !email || !city) {
        return { success: false, message: 'Please fill in all required fields.' }
    }

    try {
        // Format message with metadata for admin inquiry page parsing
        const formattedMessage = `[metadata]:${JSON.stringify({
            hotelName,
            city,
            categories: categories.length > 0 ? categories : ['General Inquiry'],
            originalMessage: message || 'No additional message'
        })}`

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
