import Link from 'next/link'
import { ArrowRight, Star, Leaf, ShieldCheck, Truck, Sparkles, Wind, Droplets } from 'lucide-react'

export default function Home() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-950">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
                        alt="Luxury Palace Hotel Room"
                        className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent"></div>
                </div>

                <div className="relative z-10 container mx-auto px-6 text-center text-white space-y-10">
                    <div className="animate-fade-in-up">
                        <span className="inline-block px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-sm font-medium tracking-[0.2em] uppercase text-emerald-100">
                            Excellence in Hospitality
                        </span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-serif font-bold leading-tight tracking-tight animate-fade-in-up delay-100">
                        Elevate Every <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-white to-emerald-200 drop-shadow-sm">
                            Guest Moment
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in-up delay-200">
                        Curating world-class toiletries, linens, and amenities that transform stays into unforgettable experiences.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 animate-fade-in-up delay-300">
                        <Link
                            href="/products"
                            className="group px-10 py-5 bg-white text-gray-950 hover:bg-emerald-50 rounded-full font-medium transition-all transform hover:scale-105 shadow-xl shadow-green-900/10 flex items-center gap-2 text-lg"
                        >
                            View Collection
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/contact"
                            className="px-10 py-5 bg-transparent border border-white/30 text-white hover:bg-white/10 rounded-full font-medium transition-all text-lg backdrop-blur-sm"
                        >
                            Partner With Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us - Enhanced */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-50/50 -skew-x-12 translate-x-32 z-0"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">The Gold Standard</h2>
                        <p className="text-gray-500 text-lg">We don't just supply products; we engineer experiences that define luxury.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                        {[
                            {
                                icon: <Sparkles className="text-amber-500" size={40} />,
                                title: "Uncompromising Quality",
                                desc: "Sourced from premier global artisans to meet the exacting standards of 5-star establishments.",
                                color: "bg-amber-50"
                            },
                            {
                                icon: <Leaf className="text-emerald-600" size={40} />,
                                title: "Eco-Conscious Luxury",
                                desc: "Sustainable solutions that protect the planet without sacrificing the indulgence your guests expect.",
                                color: "bg-emerald-50"
                            },
                            {
                                icon: <Truck className="text-blue-600" size={40} />,
                                title: "Seamless Operations",
                                desc: "Infrastructure designed for reliability, ensuring your inventory is exactly where you need it.",
                                color: "bg-blue-50"
                            }
                        ].map((feature, i) => (
                            <div key={i} className="group p-10 rounded-3xl bg-white hover:bg-white border border-gray-100 hover:border-gray-200 hover:shadow-2xl hover:shadow-green-900/5 transition-all duration-500">
                                <div className={`mb-8 w-20 h-20 ${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">{feature.title}</h3>
                                <p className="text-gray-500 leading-relaxed text-lg">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories Visual Showcase */}
            <section className="py-32 bg-gray-950 text-white overflow-hidden relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

                <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
                    <div className="space-y-10 order-2 lg:order-1">
                        <div className="space-y-6">
                            <h2 className="text-5xl md:text-6xl font-serif font-bold leading-tight">
                                Curated for <br />
                                <span className="text-emerald-300">Absolute Comfort</span>
                            </h2>
                            <p className="text-gray-400 text-xl leading-relaxed max-w-xl">
                                From the refreshing scent of our organic body washes to the embrace of our 800-thread-count linens, every detail is chosen to delight.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8">
                            <div className="flex gap-4 items-start">
                                <div className="p-3 bg-white/5 rounded-xl text-emerald-300"><Droplets size={24} /></div>
                                <div>
                                    <h4 className="text-lg font-bold mb-1">Premium Toiletries</h4>
                                    <p className="text-sm text-gray-400">Paraben-free, signature scents</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="p-3 bg-white/5 rounded-xl text-emerald-300"><Wind size={24} /></div>
                                <div>
                                    <h4 className="text-lg font-bold mb-1">Fine Linens</h4>
                                    <p className="text-sm text-gray-400">Egyptian cotton, plush towels</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <Link href="/products" className="inline-flex items-center gap-3 text-white border-b border-emerald-400/50 pb-1 hover:text-emerald-300 hover:border-emerald-300 transition-all group text-lg">
                                Explore Our Catalog <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    <div className="relative order-1 lg:order-2 h-[600px] w-full">
                        <div className="absolute top-0 right-0 w-3/4 h-[85%] rounded-3xl overflow-hidden shadow-2xl border border-white/10 z-10">
                            <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070" alt="Premium Amenities" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
                        </div>
                        <div className="absolute bottom-0 left-0 w-3/5 h-[60%] rounded-3xl overflow-hidden shadow-2xl border border-white/10 z-20">
                            <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070" alt="Spa Treatment" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
                        </div>
                        {/* Decorative Circle */}
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-600/20 rounded-full blur-3xl z-0"></div>
                    </div>
                </div>
            </section>

            {/* Testimonial / Trust */}
            <section className="py-24 bg-emerald-50">
                <div className="container mx-auto px-6 text-center max-w-4xl mx-auto">
                    <Star className="w-12 h-12 text-emerald-600 mx-auto mb-8 fill-current" />
                    <blockquote className="text-3xl md:text-4xl font-serif font-medium text-gray-900 leading-snug mb-10">
                        "Harbigreen has completely elevated our guest satisfaction scores. Their attention to quality and design is unmatched in the industry."
                    </blockquote>
                    <div className="flex items-center justify-center gap-4">
                        <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200" alt="Hotel Manager" className="w-full h-full object-cover" />
                        </div>
                        <div className="text-left">
                            <div className="font-bold text-gray-900">James Anderson</div>
                            <div className="text-sm text-gray-500">General Manager, The Grand Horizon</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
