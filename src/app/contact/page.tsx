'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { submitLead } from '@/app/actions/contact-actions'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const initialState = {
    success: false,
    message: '',
}

function SubmitButton() {
    const { pending } = useFormStatus()
    return (
        <button
            type="submit"
            disabled={pending}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-4 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-purple-200"
        >
            {pending ? (
                <span>Sending...</span>
            ) : (
                <>
                    <Send size={18} />
                    <span>Send Message</span>
                </>
            )}
        </button>
    )
}

export default function ContactPage() {
    const [state, formAction] = useFormState(submitLead, initialState)

    return (
        <div className="bg-white min-h-screen py-24">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">Get in Touch</h1>
                        <p className="text-gray-500 text-lg">We'd love to hear from you. Fill out the form below or contact us directly.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-gray-50 rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>
                            <p className="text-gray-500 leading-relaxed">
                                Whether you have a question about our products, pricing, or want to request a custom catalog, our team is ready to help.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-purple-100 p-3 rounded-lg text-purple-700">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Phone</h4>
                                        <p className="text-gray-500">+1 (555) 123-4567</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-purple-100 p-3 rounded-lg text-purple-700">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Email</h4>
                                        <p className="text-gray-500">hello@luxeamenities.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-purple-100 p-3 rounded-lg text-purple-700">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Office</h4>
                                        <p className="text-gray-500">123 Hospitality Lane,<br />New York, NY 10001</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div>
                            {state.success ? (
                                <div className="h-full flex flex-col items-center justify-center text-center p-6 bg-green-50 rounded-xl border border-green-100">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                                        <Send size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                                    <p className="text-green-700">{state.message}</p>
                                    <button
                                        onClick={() => window.location.reload()}
                                        className="mt-6 text-sm text-green-600 font-medium hover:underline"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form action={formAction} className="space-y-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                                            placeholder="john@hotel.com"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone (Optional)</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                                                placeholder="+1 (555) 000-0000"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="companyName" className="text-sm font-medium text-gray-700">Hotel/Company</label>
                                            <input
                                                type="text"
                                                id="companyName"
                                                name="companyName"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                                                placeholder="Grand Hotel"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={4}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all resize-none"
                                            placeholder="Tell us about your requirements..."
                                        />
                                    </div>

                                    {state.message && !state.success && (
                                        <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm">
                                            {state.message}
                                        </div>
                                    )}

                                    <SubmitButton />
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
