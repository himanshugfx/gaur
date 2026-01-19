import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { ShoppingBag, Menu, Phone, Mail } from 'lucide-react'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
    title: 'Harbigreen | Premium Hotel Supplies',
    description: 'Elevate your guest experience with our premium hotel amenities and toiletries.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${playfair.variable} font-sans antialiased text-gray-900 bg-white`}>
                {/* Navigation */}
                <header className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
                    <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                        <Link href="/" className="flex items-center gap-3">
                            <img src="/logo.png" alt="Harbigreen" className="h-12 w-auto" />
                        </Link>

                        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
                            <Link href="/" className="hover:text-green-800 transition-colors">Home</Link>
                            <Link href="/products" className="hover:text-green-800 transition-colors">Collections</Link>
                            <Link href="/about" className="hover:text-green-800 transition-colors">About Us</Link>
                            <Link href="/contact" className="hover:text-green-800 transition-colors">Contact</Link>
                        </nav>

                        <div className="flex items-center gap-4">
                            <Link
                                href="/contact"
                                className="hidden md:flex bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-green-800 transition-colors"
                            >
                                Get a Quote
                            </Link>
                            <button className="md:hidden p-2 text-gray-600">
                                <Menu size={24} />
                            </button>
                        </div>
                    </div>
                </header>

                <main className="pt-20 min-h-screen">
                    {children}
                </main>

                <footer className="bg-gray-900 text-white py-16">
                    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <img src="/logo.png" alt="Harbigreen" className="h-12 w-auto" />
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Providing exceptional amenities to the world's finest hotels and resorts.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6">Collections</h4>
                            <ul className="space-y-3 text-sm text-gray-400">
                                <li><Link href="#" className="hover:text-white transition-colors">Toiletries</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Linens</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Spa Essentials</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Room Accessories</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6">Company</h4>
                            <ul className="space-y-3 text-sm text-gray-400">
                                <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
                                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                                <li><Link href="/admin" className="hover:text-white transition-colors">Admin Login</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6">Contact</h4>
                            <ul className="space-y-3 text-sm text-gray-400">
                                <li className="flex items-center gap-3">
                                    <Phone size={16} />
                                    <span>+1 (555) 123-4567</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail size={16} />
                                    <span>hello@luxeamenities.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="container mx-auto px-6 mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
                        © {new Date().getFullYear()} Harbigreen. All rights reserved.
                    </div>
                </footer>
            </body>
        </html>
    )
}
