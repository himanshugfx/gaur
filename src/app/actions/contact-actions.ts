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
        await prisma.lead.create({
            data: {
                name,
                email,
                phone,
                companyName,
                message,
                status: 'NEW',
            },
        })

        revalidatePath('/admin/leads')
        return { success: true, message: 'Thank you! We will contact you shortly.' }
    } catch (error) {
        console.error('Lead submission error:', error)
        return { success: false, message: 'Something went wrong. Please try again.' }
    }
}
