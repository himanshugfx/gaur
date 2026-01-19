'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { submitLead } from '@/app/actions/contact-actions'
import { Mail, Phone, MapPin, Send, CheckSquare } from 'lucide-react'

const initialState = {
    success: false,
    message: '',
}

const PRODUCT_CATEGORIES = [
    { value: 'CONSUMABLES', label: 'Consumables' },
    { value: 'MOPS_WIPERS', label: 'Mops & Wipers' },
    { value: 'BROOMS_DUSTPANS', label: 'Brooms, Dustpans & Dustbins' },
    { value: 'HANDLING_EQUIPMENTS', label: 'Handling Equipments' },
    { value: 'UTILITIES', label: 'Utilities' },
    { value: 'DISPENSORS', label: 'Dispensors' },
    { value: 'CARTS_TROLLIES', label: 'Carts and Trollies' },
    { value: 'MACHINERIES', label: 'Machineries' },
];

function SubmitButton() {
    const { pending } = useFormStatus()
    return (
        <button
            type="submit"
            disabled={pending}
            className="w-full bg-green-700 hover:bg-green-800 text-white font-medium py-4 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-green-200"
        >
            {pending ? (
                <span>Sending...</span>
            ) : (
                <>
                    <Send size={18} />
                    <span>Submit Inquiry</span>
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
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">Get a Quote</h1>
                        <p className="text-gray-500 text-lg">Tell us about your requirements and we'll get back to you with a customized quote.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Contact Info - Left Side */}
                        <div className="space-y-8 bg-gray-50 rounded-2xl p-8 border border-gray-100 h-fit">
                            <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>
                            <p className="text-gray-500 leading-relaxed">
                                Whether you have a question about our products, pricing, or want to request a custom catalog, our team is ready to help.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-green-100 p-3 rounded-lg text-green-700">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Phone</h4>
                                        <p className="text-gray-500">+91 9110134408</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-green-100 p-3 rounded-lg text-green-700">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Email</h4>
                                        <p className="text-gray-500">hello@harbigreen.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-green-100 p-3 rounded-lg text-green-700">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Office</h4>
                                        <p className="text-gray-500">Harbigreen Products<br />Business Center</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Lead Form - Right Side */}
                        <div className="lg:col-span-2 bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100">
                            {state.success ? (
                                <div className="h-full flex flex-col items-center justify-center text-center p-6 bg-green-50 rounded-xl border border-green-100">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                                        <Send size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold text-green-800 mb-2">Inquiry Submitted!</h3>
                                    <p className="text-green-700">{state.message}</p>
                                    <button
                                        onClick={() => window.location.reload()}
                                        className="mt-6 text-sm text-green-600 font-medium hover:underline"
                                    >
                                        Submit another inquiry
                                    </button>
                                </div>
                            ) : (
                                <form action={formAction} className="space-y-6">
                                    {/* Customer Details Section */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                            <span className="w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center text-sm">1</span>
                                            Your Details
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name *</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    required
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                                                    placeholder="John Doe"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="hotelName" className="text-sm font-medium text-gray-700">Hotel / Company Name *</label>
                                                <input
                                                    type="text"
                                                    id="hotelName"
                                                    name="hotelName"
                                                    required
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                                                    placeholder="Grand Hotel"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number *</label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    required
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                                                    placeholder="+91 9876543210"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address *</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                                                    placeholder="john@hotel.com"
                                                />
                                            </div>

                                            <div className="space-y-2 md:col-span-2">
                                                <label htmlFor="city" className="text-sm font-medium text-gray-700">City *</label>
                                                <input
                                                    type="text"
                                                    id="city"
                                                    name="city"
                                                    required
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                                                    placeholder="Mumbai"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Product Categories Section */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                            <span className="w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center text-sm">2</span>
                                            Products You Need
                                        </h3>
                                        <p className="text-sm text-gray-500 mb-4">Select the product categories you're interested in:</p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {PRODUCT_CATEGORIES.map((category) => (
                                                <label
                                                    key={category.value}
                                                    className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl cursor-pointer hover:border-green-500 hover:bg-green-50 transition-all group"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        name="categories"
                                                        value={category.value}
                                                        className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                                                    />
                                                    <span className="text-sm font-medium text-gray-700 group-hover:text-green-700">{category.label}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Additional Message */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                            <span className="w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center text-sm">3</span>
                                            Additional Information
                                        </h3>
                                        <div className="space-y-2">
                                            <label htmlFor="message" className="text-sm font-medium text-gray-700">Message (Optional)</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={4}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all resize-none"
                                                placeholder="Tell us about your specific requirements, quantities, or any questions..."
                                            />
                                        </div>
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
