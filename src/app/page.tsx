import Link from 'next/link'
import { ArrowRight, Star, Leaf, ShieldCheck, Truck } from 'lucide-react'

export default function Home() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-gray-900">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2049&auto=format&fit=crop')] bg-cover bg-center opacity-60"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>

                <div className="relative container mx-auto px-6 text-center text-white space-y-8">
                    <span className="inline-block px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-sm font-medium tracking-wide uppercase">
                        Start Your Journey with Excellence
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
                        Refining the Art of <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-purple-400">Hospitality</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Supply your hotel with world-class amenities designed to leave a lasting impression on your guests.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
                        <Link
                            href="/products"
                            className="px-8 py-4 bg-purple-700 hover:bg-purple-600 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-purple-900/50 flex items-center gap-2"
                        >
                            Explore Collection <ArrowRight size={18} />
                        </Link>
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 rounded-full font-medium transition-all"
                        >
                            Request Catalog
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">Why Choose Us</h2>
                        <p className="text-gray-500">We partner with hotels to deliver exceptional guest experiences through thoughtful amenities.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: <Star className="text-purple-600" size={32} />,
                                title: "Premium Quality",
                                desc: "Sourced from the finest materials to ensure 5-star standards."
                            },
                            {
                                icon: <Leaf className="text-green-600" size={32} />,
                                title: "Eco-Friendly Options",
                                desc: "Sustainable choices that care for the planet without compromising luxury."
                            },
                            {
                                icon: <Truck className="text-blue-600" size={32} />,
                                title: "Reliable Logistics",
                                desc: "Timely deliveries ensuring your operations run smoothly."
                            }
                        ].map((feature, i) => (
                            <div key={i} className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-purple-100 hover:shadow-xl transition-all duration-300">
                                <div className="mb-6 bg-white w-16 h-16 rounded-2xl shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories CTA */}
            <section className="py-24 bg-gray-900 text-white overflow-hidden">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold">Curated for Comfort</h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            From organic toiletries to plush linens, our diverse range of products allows you to customize the perfect stay for your guests.
                        </p>
                        <Link href="/products" className="inline-flex items-center gap-2 text-purple-400 font-medium hover:text-purple-300 transition-colors group">
                            View All Categories <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                    <div className="relative">
                        {/* Abstract visual using CSS/divs purely or we could use an image. I'll use a placeholder div that looks nice */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 translate-y-8">
                                <div className="h-64 bg-gray-800 rounded-2xl overflow-hidden relative">
                                    <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1000&auto=format&fit=crop" alt="Amenities" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="h-48 bg-gray-800 rounded-2xl overflow-hidden relative">
                                    <img src="https://images.unsplash.com/photo-1595183492716-e889fe60155b?q=80&w=1000&auto=format&fit=crop" alt="Towels" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="h-48 bg-gray-800 rounded-2xl overflow-hidden relative">
                                    <img src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=1000&auto=format&fit=crop" alt="Soap" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="h-64 bg-gray-800 rounded-2xl overflow-hidden relative">
                                    <img src="https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=1000&auto=format&fit=crop" alt="Liquid" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
