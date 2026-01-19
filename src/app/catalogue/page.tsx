'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Package, Download, Phone, Mail } from 'lucide-react'

const CATEGORIES = [
    { value: 'CONSUMABLES', label: 'Consumables', color: 'bg-green-100 text-green-700', borderColor: 'border-green-200' },
    { value: 'MOPS_WIPERS', label: 'Mops & Wipers', color: 'bg-blue-100 text-blue-700', borderColor: 'border-blue-200' },
    { value: 'BROOMS_DUSTPANS', label: 'Brooms, Dustpans & Dustbins', color: 'bg-amber-100 text-amber-700', borderColor: 'border-amber-200' },
    { value: 'HANDLING_EQUIPMENTS', label: 'Handling Equipments', color: 'bg-purple-100 text-purple-700', borderColor: 'border-purple-200' },
    { value: 'UTILITIES', label: 'Utilities', color: 'bg-teal-100 text-teal-700', borderColor: 'border-teal-200' },
    { value: 'DISPENSORS', label: 'Dispensors', color: 'bg-pink-100 text-pink-700', borderColor: 'border-pink-200' },
    { value: 'CARTS_TROLLIES', label: 'Carts and Trollies', color: 'bg-orange-100 text-orange-700', borderColor: 'border-orange-200' },
    { value: 'MACHINERIES', label: 'Machineries', color: 'bg-indigo-100 text-indigo-700', borderColor: 'border-indigo-200' },
];

interface HotelAmenity {
    id: string;
    name: string;
    category: string;
    description: string | null;
    image: string;
    price: number;
    minOrderQty: number;
    sizes: string | null;
    packing: string | null;
    material: string | null;
    isActive: boolean;
}

const getImageUrl = (image: string): string => {
    if (!image) return '/assets/images/product/1000x1000.png';
    if (image.startsWith('/') || image.startsWith('http')) return image;
    return `/api/media/${image}`;
};

const getCategoryLabel = (category: string) => {
    return CATEGORIES.find(c => c.value === category)?.label || category;
};

export default function CataloguePage() {
    const [amenities, setAmenities] = useState<HotelAmenity[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAmenities();
    }, []);

    const fetchAmenities = async () => {
        try {
            const res = await fetch('/api/admin/hotel-catalogue?limit=1000');
            const data = await res.json();
            setAmenities(data.amenities || []);
        } catch (error) {
            console.error('Error fetching amenities:', error);
        } finally {
            setLoading(false);
        }
    };

    // Group amenities by category
    const groupedAmenities = CATEGORIES.reduce((acc, cat) => {
        acc[cat.value] = amenities.filter(a => a.category === cat.value && a.isActive);
        return acc;
    }, {} as Record<string, HotelAmenity[]>);

    // Only show categories that have products
    const categoriesWithProducts = CATEGORIES.filter(cat => groupedAmenities[cat.value]?.length > 0);

    if (loading) {
        return (
            <div className="bg-white min-h-screen py-16">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col items-center justify-center py-20">
                        <div className="w-8 h-8 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
                        <p className="text-gray-500 mt-3">Loading catalogue...</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white py-20">
                <div className="container mx-auto px-6 text-center">
                    <div className="flex justify-center mb-6">
                        <img src="/logo.png" alt="Harbigreen" className="h-20 w-auto" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Product Catalogue</h1>
                    <p className="text-lg text-green-100 max-w-2xl mx-auto mb-8">
                        Premium housekeeping and cleaning products for hotels, offices, and businesses.
                    </p>
                    <div className="flex items-center justify-center gap-6 text-sm text-green-200">
                        <span className="flex items-center gap-2">
                            <Phone size={16} />
                            +91 9110134408
                        </span>
                        <span className="flex items-center gap-2">
                            <Mail size={16} />
                            hello@harbigreen.com
                        </span>
                    </div>
                </div>
            </div>

            {/* Category Navigation */}
            {categoriesWithProducts.length > 0 && (
                <div className="sticky top-20 bg-white/95 backdrop-blur-md py-4 border-b border-gray-100 z-30">
                    <div className="container mx-auto px-6">
                        <div className="flex items-center gap-3 overflow-x-auto pb-2">
                            <span className="text-sm text-gray-500 font-medium whitespace-nowrap">Categories:</span>
                            {categoriesWithProducts.map((cat) => (
                                <a
                                    key={cat.value}
                                    href={`#${cat.value}`}
                                    className={`px-4 py-2 text-sm font-medium rounded-full transition-colors whitespace-nowrap ${cat.color} hover:opacity-80`}
                                >
                                    {cat.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Products by Category */}
            <div className="py-16">
                <div className="container mx-auto px-6">
                    {categoriesWithProducts.length === 0 ? (
                        <div className="text-center py-24 bg-gray-50 rounded-2xl">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Package className="w-10 h-10 text-green-600" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-2">Catalogue Coming Soon</h3>
                            <p className="text-gray-500 mb-6">Our product catalogue is currently being updated.</p>
                            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-green-700 text-white rounded-lg font-medium hover:bg-green-800 transition-colors">
                                Contact Us for Details
                            </Link>
                        </div>
                    ) : (
                        <div className="space-y-20">
                            {categoriesWithProducts.map((category) => (
                                <section key={category.value} id={category.value} className="scroll-mt-32">
                                    {/* Category Header */}
                                    <div className={`p-6 rounded-2xl ${category.color} border-2 ${category.borderColor} mb-8`}>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h2 className="text-2xl md:text-3xl font-serif font-bold">
                                                    {category.label}
                                                </h2>
                                                <p className="text-sm opacity-75 mt-1">
                                                    {groupedAmenities[category.value].length} Products Available
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Products Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                        {groupedAmenities[category.value].map((product) => (
                                            <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                                                <div className="relative h-48 bg-gray-100 overflow-hidden">
                                                    <img
                                                        src={getImageUrl(product.image)}
                                                        alt={product.name}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                        onError={(e) => {
                                                            (e.target as HTMLImageElement).src = '/assets/images/product/1000x1000.png';
                                                        }}
                                                    />
                                                </div>
                                                <div className="p-4">
                                                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>

                                                    <div className="space-y-1 text-sm text-gray-500 mb-3">
                                                        {product.material && (
                                                            <p><span className="font-medium">Material:</span> {product.material}</p>
                                                        )}
                                                        {product.packing && (
                                                            <p><span className="font-medium">Packing:</span> {product.packing}</p>
                                                        )}
                                                    </div>

                                                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                                        <div>
                                                            <span className="text-lg font-bold text-green-700">₹{product.price.toFixed(2)}</span>
                                                            <span className="text-xs text-gray-400 ml-1">/unit</span>
                                                        </div>
                                                        <span className="text-xs text-gray-400">MOQ: {product.minOrderQty}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Footer CTA */}
            <div className="bg-gray-900 text-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-serif font-bold mb-4">Ready to Order?</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                        Contact us today for bulk pricing, customization options, and quick delivery.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full font-medium transition-colors"
                    >
                        Get a Quote
                    </Link>
                </div>
            </div>
        </div>
    );
}
